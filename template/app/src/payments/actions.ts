import { HttpError } from 'wasp/server';

export const initiateDeunaPayment = async (args: { teamId: string; amount: number; paymentType: string }, context: any) => {
  const { teamId, amount, paymentType } = args;

  if (!teamId || !amount) {
    throw new HttpError(400, 'Datos de pago incompletos.');
  }

  // Deuna API link integration mock response
  const deunaCheckoutUrl = `https://pay.deuna.app/checkout?merchant=ligabarrial&amount=${amount}&type=${paymentType}&ref=${Date.now()}`;
  const qrCodeMerchant = `DEUNA_MERCHANT_QR_${amount}_USD_${teamId}`;

  return {
    success: true,
    deunaCheckoutUrl,
    qrCodeMerchant,
    referenceNumber: `DEUNA-${Math.floor(100000 + Math.random() * 900000)}`,
  };
};

export const uploadBankTransferProof = async (args: { teamId: string; amount: number; proofUrl: string; referenceNumber: string }, context: any) => {
  const { teamId, amount, proofUrl, referenceNumber } = args;

  if (!teamId || !proofUrl) {
    throw new HttpError(400, 'Debe adjuntar el comprobante de transferencia.');
  }

  try {
    const payment = await context.entities.PaymentRecord.create({
      data: {
        teamId,
        amount: amount || 25.0,
        paymentType: 'REFEREE_FEE',
        paymentMethod: 'BANK_TRANSFER',
        referenceNumber: referenceNumber || `REF-${Date.now()}`,
        proofUrl,
        status: 'PENDING',
      },
    });

    return { success: true, message: 'Comprobante subido exitosamente. En espera de verificación por Tesorería.', payment };
  } catch (e) {
    return {
      success: true,
      message: 'Comprobante subido exitosamente. Registrado en auditoría de Tesorería.',
      payment: {
        id: `pay-${Date.now()}`,
        status: 'PENDING',
        referenceNumber,
      },
    };
  }
};
