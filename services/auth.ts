import callAPI from '../config/api';
import { LoginFormType } from './data-types';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export const setSignUp = async (data: FormData) => {
  const URL = `${ROOT_API}/${API_VERSION}/auth/signup`;

  return callAPI({
    url: URL,
    method: 'POST',
    data,
  });
};

export const setLogin = async (data: LoginFormType) => {
  const URL = `${ROOT_API}/${API_VERSION}/auth/signin`;

  return callAPI({
    url: `${URL}`,
    method: 'POST',
    data,
  });
};
