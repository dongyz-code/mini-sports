import axios from 'axios';
import { createHash } from 'crypto';

const sk = 'VzgJwtTLDiHA75Xopd838wrLKOPCK6CE';
const instance = axios.create({
  baseURL: 'https://apis.map.qq.com',
  timeout: 60 * 1000,
});

instance.interceptors.request.use((config) => {
  const { params, url, data, method } = config;

  let sortedParams = '';
  if (method.toUpperCase() === 'GET') {
    sortedParams = Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join('&');
  } else if (method.toUpperCase() === 'POST') {
    sortedParams = Object.keys(data)
      .map((key) => `${key}=${JSON.stringify(params[key])}`)
      .join('&');
  }

  const hash = createHash('md5');
  hash.update(url + '?' + sortedParams + sk);
  params.sig = hash.digest('hex');
  return config;
});

export default instance;
