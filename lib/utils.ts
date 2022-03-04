import axios from 'axios';

function getBridgeAuth(): { username: string, password: string } {
  const auth: { username: string, password: string } = {
    username: process.env.NEXT_BRIDGE_GATEWAY_USERNAME || '',
    password: process.env.NEXT_BRIDGE_GATEWAY_PASS || ''
  };

  return auth;
}

export function getUserId(email: string) {
  const auth = getBridgeAuth();

  return axios.post(`${process.env.NEXT_BRIDGE_URL}/gateway/uuid`, { email },
    { auth }).then((response) => {
    const { uuid } = response.data;
    return uuid;
  }).catch((err) => {
    throw new Error(err);
  });
}

export function getUser(email: string) {
  const auth = getBridgeAuth();

  return axios.get(`${process.env.NEXT_DRIVE_API_URL}/api/gateway/users`, {
    params: {
      email
    },
    auth
  }).then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function getCheckoutSession(sessionId: string | string[]) {
  const auth = getBridgeAuth();
  const API = process.env.NEXT_DRIVE_API_URL;

  return axios.get(`${API}/api/gateway/checkout/session`, {
    params: {
      sessionId
    },
    auth
  }).then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}
