import React, { useState } from 'react';

interface QRScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScanSuccess: (player: any) => void;
}

export const QRScannerModal: React.FC<QRScannerModalProps> = ({ isOpen, onClose, onScanSuccess }) => {
  const [scannedDni, setScannedDni] = useState('');
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<any>(null);

  if (!isOpen) return null;

  const handleSimulateScan = () => {
    setScanning(true);
    setResult(null);

    setTimeout(() => {
      setScanning(false);
      const isSuspended = scannedDni.endsWith('9');
      const mockResult = {
        success: true,
        player: {
          fullName: scannedDni ? `Jugador Cédula ${scannedDni}` : 'Juan Antonio Pérez',
          dni: scannedDni || '1726543210',
          teamName: 'CD Mena Alta',
          isSuspended,
          status: isSuspended ? 'SUSPENDIDO' : 'HABILITADO',
        },
      };
      setResult(mockResult);
      if (!isSuspended) {
        onScanSuccess(mockResult.player);
      }
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-md p-6 text-white shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl font-bold w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center"
        >
          ✕
        </button>

        <h3 className="text-xl font-bold text-emerald-400 mb-2 flex items-center gap-2">
          <span>📷</span> Escáner de Vocalía (Carnet QR)
        </h3>
        <p className="text-xs text-slate-400 mb-4">
          Apunta la cámara del dispositivo al código QR del carnet digital del jugador o ingresa cédula para validación manual.
        </p>

        {/* Camera Scanner Viewport Mock */}
        <div className="relative w-full h-48 bg-slate-950 rounded-2xl border-2 border-dashed border-emerald-500/40 flex items-center justify-center overflow-hidden mb-4">
          {scanning ? (
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-emerald-400 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
              <p className="text-xs text-emerald-300 font-semibold animate-pulse">Verificando firma digital HMAC...</p>
            </div>
          ) : (
            <div className="text-center p-4">
              <div className="w-20 h-20 border-2 border-emerald-400 rounded-xl mx-auto mb-2 flex items-center justify-center relative">
                <div className="w-full h-0.5 bg-emerald-400 absolute top-1/2 -translate-y-1/2 animate-bounce"></div>
                <span className="text-3xl">📱</span>
              </div>
              <p className="text-xs text-slate-400">Escaneando carnet de la cancha...</p>
            </div>
          )}
        </div>

        {/* Input fallback */}
        <div className="mb-4">
          <label className="block text-xs font-semibold text-slate-300 mb-1">
            Simular Cédula / DNI para Prueba:
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Ej: 1726543210 (Termina en 9 = Suspendido)"
              value={scannedDni}
              onChange={(e) => setScannedDni(e.target.value)}
              className="flex-1 px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-400"
            />
            <button
              onClick={handleSimulateScan}
              disabled={scanning}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 font-bold text-xs rounded-xl shadow-lg transition-all"
            >
              Validar
            </button>
          </div>
        </div>

        {/* Result notification */}
        {result && (
          <div
            className={`p-4 rounded-2xl border ${
              result.player.isSuspended
                ? 'bg-rose-950/50 border-rose-500/50 text-rose-200'
                : 'bg-emerald-950/50 border-emerald-500/50 text-emerald-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-sm">{result.player.fullName}</p>
                <p className="text-xs text-slate-300">Equipo: {result.player.teamName}</p>
              </div>
              <span
                className={`px-3 py-1 text-xs font-extrabold rounded-full ${
                  result.player.isSuspended ? 'bg-rose-600 text-white' : 'bg-emerald-600 text-white'
                }`}
              >
                {result.player.status}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
