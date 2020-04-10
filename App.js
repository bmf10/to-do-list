import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SyncStorage from "sync-storage";

import SplashScreen from './src/Splashscreen';
import HomeScreen from './src/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  let start = SyncStorage.get('start');
  start
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          {start ? (
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          ) : (
              <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
            )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;
