import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../home';
import Statistics from '../statistics';
import Roster from '../roster';

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Statistics" component={Statistics} /> */}
      <Stack.Screen
        name="Roster"
        component={Roster}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
