import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen';
import DetailScreen from '../screens/DetailScreen';
import ChannelScreen from '../screens/ChannelScreen';
import FavouritesScreen from '../screens/FavouritesScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={MainScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Channel"
        component={ChannelScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
}
