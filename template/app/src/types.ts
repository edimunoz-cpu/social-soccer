export enum EventType {
  GOAL = 'GOAL',
  ASSIST = 'ASSIST',
  YELLOW_CARD = 'YELLOW_CARD',
  RED_CARD = 'RED_CARD',
  SUB_IN = 'SUB_IN',
  SUB_OUT = 'SUB_OUT',
}

export enum MatchStatus {
  SCHEDULED = 'SCHEDULED',
  LIVE = 'LIVE',
  FINISHED = 'FINISHED',
  SUSPENDED = 'SUSPENDED',
}

export enum PaymentType {
  REFEREE_FEE = 'REFEREE_FEE',
  FINE = 'FINE',
  INSCRIPTION = 'INSCRIPTION',
}

export enum PaymentMethod {
  DEUNA = 'DEUNA',
  BANK_TRANSFER = 'BANK_TRANSFER',
  CASH = 'CASH',
}

export enum PaymentStatus {
  PENDING = 'PENDING',
  VERIFIED = 'VERIFIED',
  REJECTED = 'REJECTED',
}

export interface PlayerProfileData {
  id: string;
  userId: string;
  fullName: string;
  dni: string;
  photoUrl?: string | null;
  qrCode: string;
  isSuspended: boolean;
  currentTeamId?: string | null;
  communityPoints: number;
}

export interface TeamData {
  id: string;
  name: string;
  logoUrl?: string | null;
  category: string;
  delegateId: string;
}

export interface MatchData {
  id: string;
  homeTeamId: string;
  awayTeamId: string;
  scheduledAt: string | Date;
  pitchName: string;
  status: MatchStatus;
  homeGoals: number;
  awayGoals: number;
  vocalSignedAt?: string | Date | null;
}

export interface MatchEventData {
  id: string;
  matchId: string;
  playerId: string;
  eventType: EventType;
  minute: number;
}

export interface PaymentRecordData {
  id: string;
  teamId: string;
  amount: number;
  paymentType: PaymentType;
  paymentMethod: PaymentMethod;
  referenceNumber?: string | null;
  proofUrl?: string | null;
  status: PaymentStatus;
  createdAt: string | Date;
}
