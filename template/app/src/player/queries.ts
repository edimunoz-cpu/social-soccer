import { HttpError } from 'wasp/server';
import { generateHmacQrToken } from '../server/authHelpers';

export const getPlayerDigitalCard = async (_args: any, context: any) => {
  if (!context.user) {
    throw new HttpError(401, 'Usuario no autenticado.');
  }

  const playerProfile = await context.entities.PlayerProfile.findUnique({
    where: { userId: context.user.id },
    include: {
      team: true,
    },
  });

  if (!playerProfile) {
    // Return mock fallback for demonstration / unlinked profile
    const now = Date.now();
    const mockDni = '1726543210';
    return {
      id: 'mock-player-id',
      userId: context.user.id,
      fullName: context.user.username || context.user.email || 'Jugador Barrial',
      dni: mockDni,
      photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
      qrCode: generateHmacQrToken(mockDni, now),
      isSuspended: false,
      communityPoints: 120,
      team: {
        id: 'team-mena-alta',
        name: 'Club Deportivo Mena Alta',
        logoUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=100&auto=format&fit=crop&q=80',
        category: 'Máxima Categoría',
      },
    };
  }

  const qrCode = generateHmacQrToken(playerProfile.dni, Date.now());

  return {
    ...playerProfile,
    qrCode,
  };
};

export const getPlayerCareerStats = async (_args: any, context: any) => {
  if (!context.user) {
    throw new HttpError(401, 'Usuario no autenticado.');
  }

  const player = await context.entities.PlayerProfile.findUnique({
    where: { userId: context.user.id },
    include: {
      matchEvents: true,
      team: true,
    },
  });

  if (!player) {
    return {
      fullName: context.user.username || 'Jugador Demo',
      matchesPlayed: 14,
      goals: 8,
      assists: 5,
      yellowCards: 2,
      redCards: 0,
      fairPlayRating: 9.4,
      communityPoints: 120,
    };
  }

  const goals = player.matchEvents.filter((e: any) => e.eventType === 'GOAL').length;
  const assists = player.matchEvents.filter((e: any) => e.eventType === 'ASSIST').length;
  const yellowCards = player.matchEvents.filter((e: any) => e.eventType === 'YELLOW_CARD').length;
  const redCards = player.matchEvents.filter((e: any) => e.eventType === 'RED_CARD').length;

  return {
    fullName: player.fullName,
    matchesPlayed: player.matchEvents.length > 0 ? Math.ceil(player.matchEvents.length / 2) : 10,
    goals,
    assists,
    yellowCards,
    redCards,
    fairPlayRating: Math.max(10 - yellowCards * 0.5 - redCards * 2, 5.0),
    communityPoints: player.communityPoints,
  };
};
