import axios from 'axios';

const API_URL = 'https://haveibeenpwned.com/api/v3/breachedaccount';
const API_KEY = process.env.HIBP_API_KEY; // Carga la clave API desde las variables de entorno

export default async function checkEmail(email) {
  if (typeof email !== 'string' || !email.includes('@')) {
    throw new Error('El correo electrónico no es válido.');
  }

  const url = `${API_URL}/${encodeURIComponent(email)}?truncateResponse=false`;
  const headers = {
    'hibp-api-key': API_KEY,
    'User-Agent': 'your-app-name',
  };

  try {
    const response = await axios.get(url, { headers });
    return response.data; // Devuelve las brechas encontradas
  } catch (err) {
    if (err.response?.status === 404) {
      return { message: `No se encontraron brechas para el correo: ${email}` }; // Sin brechas
    }
    throw new Error(err.response?.data || 'Error al conectar con HIBP.');
  }
}
