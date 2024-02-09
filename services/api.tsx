import axios from 'axios';
import {Series} from '../types';

const API_BASE_URL = 'https://api.tvmaze.com';

export const searchSeries = (query: string) => {
  return axios.get<Series[]>(`${API_BASE_URL}/search/shows?q=${query}`);
};
