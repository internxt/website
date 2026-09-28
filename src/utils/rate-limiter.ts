import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

import { getClientIp } from './get-client-ip';

const CLEANUP_INTERVAL_MS = 5 * 60 * 1000;
let lastCleanup = Date.now();

const rateLimitMap = new Map<string, { count: number; lastReset: number; windowMs: number }>();

// Cada contador se limpia segun SU ventana: el mapa es comun a todas las rutas y usar la ventana
// de la peticion que dispara la limpieza borraria los contadores de ventana larga (create-email, 1h)
// cada vez que una ruta de ventana corta (60s) pasase por aqui.
function cleanUpOldKeys() {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;

  rateLimitMap.forEach((value, key) => {
    if (now - value.lastReset > value.windowMs) {
      rateLimitMap.delete(key);
    }
  });

  lastCleanup = now;
}

export default function rateLimitMiddleware(
  handler: NextApiHandler,
  path: string,
  limit: number,
  windowMs: number = 60 * 1000,
) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    cleanUpOldKeys();

    const ip = getClientIp(req);
    const mapIdentifier = `${ip}-${path}`;

    if (!rateLimitMap.has(mapIdentifier)) {
      rateLimitMap.set(mapIdentifier, {
        count: 0,
        lastReset: Date.now(),
        windowMs,
      });
    }

    const ipData = rateLimitMap.get(mapIdentifier)!;

    if (Date.now() - ipData.lastReset > windowMs) {
      ipData.count = 0;
      ipData.lastReset = Date.now();
    }

    if (ipData.count >= limit) {
      return res.status(429).send('Too Many Requests');
    }

    ipData.count += 1;

    return handler(req, res);
  };
}
