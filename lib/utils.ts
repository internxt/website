import axios from 'axios';
import { CheckIfUserHasSubscription, UserData } from './types/types';

const API_URL = process.env.NEXT_DRIVE_API_URL;
const NEW_API_URL = process.env.NEXT_DRIVE_NEW_API_URL;

const GATEWAY_USER = process.env.NEXT_BRIDGE_GATEWAY_USERNAME;
const GATEWAY_PASS = process.env.NEXT_BRIDGE_GATEWAY_PASS;

function getBridgeAuth(): { username: string; password: string } {
  const auth: { username: string; password: string } = {
    username: GATEWAY_USER ?? '',
    password: GATEWAY_PASS ?? '',
  };

  return auth;
}

export function getUserId(email: string) {
  const auth = getBridgeAuth();

  return axios
    .post(`${process.env.NEXT_STORAGE_API_URL}/gateway/uuid`, { email }, { auth })
    .then((response) => {
      const { uuid } = response.data;
      return uuid;
    })
    .catch((err) => {
      throw new Error(err);
    });
}

export function getUser(email: string): Promise<UserData | null> {
  const auth = getBridgeAuth();

  return axios
    .get(`${API_URL}/api/gateway/users`, {
      params: {
        email,
      },
      auth,
    })
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((err) => {
      return null;
    });
}

export function checkIfUserHasSubscription(email: string, token: string): Promise<CheckIfUserHasSubscription | null> {
  return axios
    .get(`${NEW_API_URL}/users/user/${email}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((err) => {
      return null;
    });
}
