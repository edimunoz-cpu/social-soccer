import { queueMatchEvent, getQueuedEvents, clearQueuedEvents, syncOfflineMatchEvents } from './offlineSync';

describe('Offline Events Queue Engine', () => {
  beforeEach(() => {
    clearQueuedEvents();
  });

  it('should queue a match event in localStorage', () => {
    queueMatchEvent({
      matchId: 'm101',
      playerId: 'p1',
      playerName: 'Carlos Andrade',
      eventType: 'GOAL',
      minute: 12,
    });

    const events = getQueuedEvents();
    expect(events.length).toBe(1);
    expect(events[0].playerName).toBe('Carlos Andrade');
    expect(events[0].eventType).toBe('GOAL');
  });

  it('should sync queued events when network is online', async () => {
    queueMatchEvent({
      matchId: 'm101',
      playerId: 'p1',
      playerName: 'Carlos Andrade',
      eventType: 'GOAL',
      minute: 12,
    });

    const mockRecordFn = jest.fn().mockResolvedValue(true);
    const result = await syncOfflineMatchEvents(mockRecordFn);

    expect(result.syncedCount).toBe(1);
    expect(mockRecordFn).toHaveBeenCalledTimes(1);
    expect(getQueuedEvents().length).toBe(0);
  });
});
