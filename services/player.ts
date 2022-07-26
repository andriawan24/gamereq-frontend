import callAPI from '../config/api';
import { CheckoutTypes } from './data-types';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export const getFeaturedGame = async () => {
  const URL = `${ROOT_API}/${API_VERSION}/players/landingpage`;

  return callAPI({
    url: URL,
    method: 'GET',
  });
};

export const getDetailVoucher = async (id: string) => {
  const URL = `${ROOT_API}/${API_VERSION}/players/${id}/detail`;

  return callAPI({
    url: URL,
    method: 'GET',
  });
};

export const getGameCategory = async () => {
  const URL = `${ROOT_API}/${API_VERSION}/players/category`;

  return callAPI({
    url: URL,
    method: 'GET',
  });
};

export const setCheckout = async (data: CheckoutTypes) => {
  const URL = `${ROOT_API}/${API_VERSION}/players/checkout`;

  return callAPI({
    url: URL,
    method: 'POST',
    data,
    token: true,
  });
};

export const getMemberOverview = async () => {
  const URL = `${ROOT_API}/${API_VERSION}/players/dashboard`;

  return callAPI({
    url: URL,
    method: 'GET',
    token: true,
  });
};
