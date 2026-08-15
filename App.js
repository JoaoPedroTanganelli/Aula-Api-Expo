import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import Stack from './src/routes/Stack';

export default function App() {
  return (
    <NavigationContainer>
      <Stack />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

