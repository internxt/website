const axios = require('axios');

async function checkBreaches(email) {
  const url = `${API_URL}/breachedaccount/${encodeURIComponent(email)}`;

  console.log('Request URL:', url); // Log the exact URL being requested
  try {
    const response = await axios.get(url, {
      headers: {
        'hibp-api-key': API_KEY,
        'User-Agent': 'internxt-website',
      },
    });
    console.log('Response Data:', response.data); // Log the response data
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Error Response Data:', error.response.data); // Log error response
      console.error('Error Status:', error.response.status); // Log status code
      if (error.response.status === 404) {
        return { message: `No breaches found for ${email}.` };
      }
      return { error: error.response.data };
    } else {
      console.error('Network/Unknown Error:', error.message);
      return { error: error.message };
    }
  }
}

module.exports = checkBreaches;
