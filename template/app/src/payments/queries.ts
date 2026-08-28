export const getTeamPaymentStatus = async (args: { teamId?: string }, context: any) => {
  return {
    refereeFeeStatus: 'PAGADO_DEUNA',
    refereeFeeAmount: 25.0,
    outstandingFines: 0.0,
    isHabilitado: true,
    lastPaymentDate: new Date().toISOString(),
    receiptsHistory: [
      { id: 'p1', type: 'Arbitraje Fecha 5', amount: 25.0, method: 'Deuna QR', status: 'VERIFICADO', date: '2026-08-25' },
      { id: 'p2', type: 'Inscripción Torneo', amount: 150.0, method: 'Transf. Banco Pichincha', status: 'VERIFICADO', date: '2026-08-01' },
    ],
  };
};
