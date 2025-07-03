import React from 'react';
import { Appbar } from 'react-native-paper';

interface SearchBarProps {
  onPress: () => void;
}

export default function SearchBar({ onPress }: SearchBarProps) {
  return (
    <Appbar.Header>
      <Appbar.Content title="Weather" />
      <Appbar.Action icon="magnify" onPress={onPress} />
    </Appbar.Header>
  );
}
