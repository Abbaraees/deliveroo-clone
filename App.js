import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ResturantScreen from './screens/ResturantScreen';
import { Provider } from 'react-redux';
import { store } from './store';



const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Resturant' component={ResturantScreen} />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </TailwindProvider>
  );
}
