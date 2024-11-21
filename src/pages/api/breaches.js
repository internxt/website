import checkEmail from '@/lib/emailChecker';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método no permitido.' });
  }

  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ error: 'El email es requerido.' });
  }

  try {
    const result = await checkEmail(email);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error en la API:', error.message);
    res.status(500).json({ error: 'Error procesando la solicitud.' });
  }
}
