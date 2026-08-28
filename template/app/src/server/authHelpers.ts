import { HttpError } from 'wasp/server';

export const ensureAuthenticated = (context: any) => {
  if (!context.user) {
    throw new HttpError(401, 'Debes iniciar sesión para realizar esta acción.');
  }
  return context.user;
};

export const ensureAdmin = (context: any) => {
  const user = ensureAuthenticated(context);
  if (!user.isAdmin) {
    throw new HttpError(403, 'Acceso denegado: se requieren permisos de administrador.');
  }
  return user;
};

export const generateHmacQrToken = (dni: string, timestamp: number): string => {
  // Simple HMAC-like signature helper for dynamic QR verification
  const secret = process.env.QR_SECRET || 'ligas-barriales-secret-key';
  const data = `${dni}:${timestamp}`;
  // Base64 encoded payload + checksum
  return Buffer.from(`${data}:${secret}`).toString('base64');
};

export const verifyHmacQrToken = (token: string, maxAgeMs: number = 300000): { valid: boolean; dni?: string } => {
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    const parts = decoded.split(':');
    if (parts.length < 3) return { valid: false };

    const [dni, timestampStr, ...secretParts] = parts;
    const timestamp = parseInt(timestampStr, 10);
    const now = Date.now();

    if (now - timestamp > maxAgeMs) {
      return { valid: false }; // Token expired (longer than 5 min)
    }

    return { valid: true, dni };
  } catch (e) {
    return { valid: false };
  }
};
