export interface QueuedMatchEvent {
  id: string;
  matchId: string;
  playerId: string;
  playerName: string;
  eventType: 'GOAL' | 'ASSIST' | 'YELLOW_CARD' | 'RED_CARD' | 'SUB_IN' | 'SUB_OUT';
  minute: number;
  timestamp: number;
}

const STORAGE_KEY = 'vocalia_pending_match_events';

export const getQueuedEvents = (): QueuedMatchEvent[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
};

export const queueMatchEvent = (event: Omit<QueuedMatchEvent, 'id' | 'timestamp'>): QueuedMatchEvent => {
  const events = getQueuedEvents();
  const newEvent: QueuedMatchEvent = {
    ...event,
    id: `offline-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    timestamp: Date.now(),
  };
  events.push(newEvent);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
  } catch (e) {
    console.error('LocalStorage quota exceeded for offline events queuing', e);
  }
  return newEvent;
};

export const clearQueuedEvents = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {}
};

export const syncOfflineMatchEvents = async (
  recordEventFn: (event: QueuedMatchEvent) => Promise<any>
): Promise<{ syncedCount: number; failedCount: number }> => {
  const events = getQueuedEvents();
  if (events.length === 0 || !navigator.onLine) {
    return { syncedCount: 0, failedCount: 0 };
  }

  let syncedCount = 0;
  let failedCount = 0;
  const remainingEvents: QueuedMatchEvent[] = [];

  for (const event of events) {
    try {
      await recordEventFn(event);
      syncedCount++;
    } catch (e) {
      failedCount++;
      remainingEvents.push(event);
    }
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(remainingEvents));
  } catch (e) {}

  return { syncedCount, failedCount };
};
