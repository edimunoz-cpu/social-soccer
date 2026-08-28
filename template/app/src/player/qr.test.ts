import { generateHmacQrToken, verifyHmacQrToken } from '../server/authHelpers';

describe('QR Token Verification', () => {
  it('should generate a valid token and verify it correctly', () => {
    const dni = '1726543210';
    const now = Date.now();
    const token = generateHmacQrToken(dni, now);

    const result = verifyHmacQrToken(token);
    expect(result.valid).toBe(true);
    expect(result.dni).toBe(dni);
  });

  it('should fail validation when token timestamp is expired (> 5 min)', () => {
    const dni = '1726543210';
    const expiredTimestamp = Date.now() - 400000; // 6.6 minutes ago
    const token = generateHmacQrToken(dni, expiredTimestamp);

    const result = verifyHmacQrToken(token);
    expect(result.valid).toBe(false);
  });
});
