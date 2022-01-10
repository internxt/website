import axios from 'axios';

function getBridgeAuth(): { username: string, password: string } {
  const auth: { username: string, password: string } = {
    username: process.env.BRIDGE_GATEWAY_USERNAME || '',
    password: process.env.BRIDGE_GATEWAY_PASS || ''
  };

  return auth;
}

export default function getUserId(email: string) {
  const auth = getBridgeAuth();

  return axios.post(`${process.env.BRIDGE_URL}/gateway/uuid`, { email },
    { auth }).then((response) => {
    const { uuid } = response.data;
    return uuid;
  }).catch((err) => {
    throw new Error(err);
  });
}
