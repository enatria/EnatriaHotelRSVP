/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Splash, Home, Favourites, Profile, Settings} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconNavBar from '../components/atoms/IconNavBar';
import { icons } from '../assets';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={NavBar}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export const NavBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Search"
        component={Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default Router;
