import { useEffect, useState } from 'react';
import WeatherRepository from '../services/WeatherRepository';
import { WeatherDTO } from '../dtos/WeatherDTO';
import useLocation from './useLocation';

export default function useWeather() {
  const coords = useLocation();
  const [weather, setWeather] = useState<WeatherDTO | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!coords) return;
    (async () => {
      try {
        setLoading(true);
        const data = await WeatherRepository.getWeatherByCoords(coords.lat, coords.lon);
        setWeather(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [coords]);

  return { weather, loading };
}
