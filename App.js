import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import Home from './src/pages/Home';
import Cadastro from './src/pages/Cadastro';
import Final from './src/pages/Final';

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Final" component={Final} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
