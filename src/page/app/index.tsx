import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../home';
import Statistics from '../statistics';
import Roster from '../roster';
import Player from '../player';
import TopVideo from '../topVideo';
import TopPhoto from '../topPhoto';

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Statistics" component={Statistics} />
      <Stack.Screen name="Roster" component={Roster} />
      <Stack.Screen
        name="Player"
        component={Player}
        options={{
          headerShown: true,
          title: '',
          headerTransparent: true,
        }}
      />
      <Stack.Screen name="TopPhoto" component={TopPhoto} />
      <Stack.Screen name="TopVideo" component={TopVideo} />
    </Stack.Navigator>
  );
};
