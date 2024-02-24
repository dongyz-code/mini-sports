import axios from 'axios';

const instince = axios.create({
  timeout: 1000 * 20,
});

export const request = instince;
