import checkEmail from '@/lib/emailChecker';

const cache = new Map(); // Cache en memoria para almacenar respuestas

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método no permitido.' });
  }

  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ error: 'El email es requerido.' });
  }

  try {
    // Verificar si la respuesta ya está cacheada
    if (cache.has(email)) {
      console.log(`Cache hit para el email: ${email}`);
      return res.status(200).json(cache.get(email));
    }

    const result = await checkEmail(email);

    // Guardar en caché la respuesta
    cache.set(email, result);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Error procesando la solicitud.' });
  }
}
