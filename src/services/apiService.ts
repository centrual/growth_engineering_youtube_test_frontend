import { YoutubeApiFactory } from '@centrual/geyt_api_client';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import Config from '../config';

const onErrorResponse = (err: AxiosError): AxiosError => {
  if (err.response?.status !== 200) {
    toast.error('Oops! I think some tubes are broken. Can you give me a few seconds to fix it?');
  }

  throw err;
};

axios.interceptors.response.use((r) => r, onErrorResponse);

const YoutubeApi = YoutubeApiFactory(undefined, Config.api.baseUrl, axios);

export {
  YoutubeApi,
};
