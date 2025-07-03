import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import WeatherCard from '../components/WeatherCard';
import WeatherRepository from '../services/WeatherRepository';
import { WeatherDTO } from '../dtos/WeatherDTO';

export default function SearchScreen() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<WeatherDTO | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!city) return;
    setLoading(true);
    try {
      const data = await WeatherRepository.getWeatherByCity(city);
      setWeather(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="City"
        value={city}
        onChangeText={setCity}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleSearch}>
        Search
      </Button>
      <WeatherCard weather={weather} loading={loading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
});
