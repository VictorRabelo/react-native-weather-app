import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import WeatherCard from '../components/WeatherCard';
import SearchBar from '../components/SearchBar';
import useWeather from '../hooks/useWeather';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { weather, loading } = useWeather();

  return (
    <View style={styles.container}>
      <SearchBar onPress={() => navigation.navigate('Search')} />
      <WeatherCard weather={weather} loading={loading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});
