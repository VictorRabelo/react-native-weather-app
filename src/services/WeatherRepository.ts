import axios from 'axios';
import { WeatherDTO } from '../dtos/WeatherDTO';
import { OPEN_WEATHER_API_KEY } from '@env';

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

const getWeatherByCoords = async (lat: number, lon: number): Promise<WeatherDTO> => {
  const response = await api.get<WeatherDTO>('weather', {
    params: {
      lat,
      lon,
      units: 'metric',
      appid: OPEN_WEATHER_API_KEY,
    },
  });
  return response.data;
};

const getWeatherByCity = async (city: string): Promise<WeatherDTO> => {
  const response = await api.get<WeatherDTO>('weather', {
    params: {
      q: city,
      units: 'metric',
      appid: OPEN_WEATHER_API_KEY,
    },
  });
  return response.data;
};

export default {
  getWeatherByCoords,
  getWeatherByCity,
};
