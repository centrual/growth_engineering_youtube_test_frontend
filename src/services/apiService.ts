import { YoutubeApiFactory } from '@centrual/geyt_api_client';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import Config from '../config';

const axiosInstance = axios.create({
  baseURL: Config.api.baseUrl,
});

const onErrorResponse = (err: AxiosError): AxiosError => {
  if (err.response?.status !== 200) {
    toast.error('Oops! I think some tubes are broken. Can you give me a few seconds to fix it?');
  }

  throw err;
};

axiosInstance.interceptors.response.use((r) => r, onErrorResponse);

const youtubeApi = YoutubeApiFactory(undefined, undefined, axiosInstance);

export {
  youtubeApi,
};
