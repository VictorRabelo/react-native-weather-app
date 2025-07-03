import React from 'react';
import { View, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { WeatherDTO } from '../dtos/WeatherDTO';
import Animated, { FadeIn } from 'react-native-reanimated';

interface WeatherCardProps {
  weather: WeatherDTO | null;
  loading?: boolean;
}

export default function WeatherCard({ weather, loading }: WeatherCardProps) {
  if (loading) {
    return <ActivityIndicator style={styles.loading} />;
  }
  if (!weather) return null;

  return (
    <Animated.View entering={FadeIn} style={styles.container}>
      <Card>
        <Card.Title title={weather.name} subtitle={weather.weather[0].description} />
        <Card.Content style={styles.content}>
          <Image
            source={{ uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png` }}
            style={styles.icon}
          />
          <Text variant="headlineMedium">{Math.round(weather.main.temp)}°C</Text>
        </Card.Content>
      </Card>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 64,
    height: 64,
    marginRight: 16,
  },
  loading: {
    marginTop: 24,
  },
});
