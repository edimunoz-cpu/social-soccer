import React, { useState } from 'react';

interface DeunaPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeunaPaymentModal: React.FC<DeunaPaymentModalProps> = ({ isOpen, onClose }) => {
  const [paymentType, setPaymentType] = useState<'deuna' | 'transfer'>('deuna');
  const [refNumber, setRefNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmitProof = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMsg('¡Comprobante recibido! Tesorería verificará el pago en un plazo máximo de 2 horas.');
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-lg p-6 text-white shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl font-bold w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center"
        >
          ✕
        </button>

        <h3 className="text-xl font-black text-emerald-400 mb-1 flex items-center gap-2">
          <span>💳</span> Pago de Arbitraje & Cuotas
        </h3>
        <p className="text-xs text-slate-400 mb-4">Evita manejar efectivo en camerinos realizando tu pago digital.</p>

        {/* Tab Selection */}
        <div className="flex bg-slate-950 p-1 rounded-2xl border border-slate-800 mb-5">
          <button
            onClick={() => {
              setPaymentType('deuna');
              setSuccessMsg('');
            }}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
              paymentType === 'deuna' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            ⚡ Deuna (QR Directo)
          </button>
          <button
            onClick={() => {
              setPaymentType('transfer');
              setSuccessMsg('');
            }}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
              paymentType === 'transfer' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            🏦 Transferencia Bancaria
          </button>
        </div>

        {paymentType === 'deuna' ? (
          <div className="text-center p-4 bg-slate-950 rounded-2xl border border-slate-800">
            <div className="inline-block p-3 bg-white rounded-2xl shadow-xl mb-3">
              {/* Deuna Merchant QR placeholder */}
              <div className="w-40 h-40 bg-slate-900 rounded-xl flex flex-col items-center justify-center text-emerald-400 font-bold p-2 text-center">
                <span className="text-4xl mb-1">📲</span>
                <span className="text-xs font-mono">DEUNA QR MERCH</span>
                <span className="text-sm text-white font-black">$25.00 USD</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 mb-4">
              Escanea con tu aplicación <strong>Deuna</strong> o Banco Pichincha para pagar $25.00 de arbitraje.
            </p>

            <a
              href="https://pay.deuna.app"
              target="_blank"
              rel="noreferrer"
              className="inline-block w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs rounded-xl shadow-lg transition-all"
            >
              🚀 Abrir App Deuna / Link Directo
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmitProof} className="space-y-4">
            <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 text-xs space-y-1">
              <p className="font-bold text-slate-200">Datos Bancarios Oficiales:</p>
              <p className="text-slate-400">Banco Pichincha • Cta. Corriente #2100456789</p>
              <p className="text-slate-400">Titular: Liga Barrial Mena Alta • RUC: 1792003456001</p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Número de Comprobante / Referencia:</label>
              <input
                type="text"
                required
                placeholder="Ej: 987654321"
                value={refNumber}
                onChange={(e) => setRefNumber(e.target.value)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Foto o Captura del Comprobante:</label>
              <div className="border-2 border-dashed border-slate-700 hover:border-emerald-400/50 rounded-2xl p-4 text-center cursor-pointer bg-slate-950">
                <span className="text-2xl">📎</span>
                <p className="text-xs text-slate-400">Haz clic para subir comprobante (PNG, JPG, PDF)</p>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all"
            >
              {isSubmitting ? 'Enviando comprobante...' : 'Enviar Comprobante a Tesorería'}
            </button>
          </form>
        )}

        {successMsg && (
          <div className="mt-4 p-3 bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 rounded-2xl text-xs font-semibold text-center">
            {successMsg}
          </div>
        )}
      </div>
    </div>
  );
};
