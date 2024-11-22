import axios from 'axios';

const API_URL = 'https://haveibeenpwned.com/api/v3/breachedaccount';
const API_KEY = process.env.HIBP_API_KEY;

export default async function checkEmail(email) {
  const url = `${API_URL}/${encodeURIComponent(email)}?truncateResponse=false`;
  const headers = {
    'hibp-api-key': API_KEY,
    'User-Agent': 'your-app-name',
  };

  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (err) {
    throw new Error(err.response?.data);
  }
}
