import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../home';

const Stack = createNativeStackNavigator();

export default () => {
  return <Home />;
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
