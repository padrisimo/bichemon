import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from './src/context/BichosContext';
import SearchScreen from './src/screens/SearchScreen';
import BichoScreen from './src/screens/BichoScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ title: 'Bichemon' }} name="Search" component={SearchScreen} />
        <Stack.Screen
          options={({ route }) => ({
            title: route.params.name,
            headerStyle: {
              backgroundColor: '#f4511e'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          })}
          name="Bicho"
          component={BichoScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => (
  <Provider>
    <App />
  </Provider>
);
