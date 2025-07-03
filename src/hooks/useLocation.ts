import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

export default function useLocation() {
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      setCoords({ lat: location.coords.latitude, lon: location.coords.longitude });
    })();
  }, []);

  return coords;
}
