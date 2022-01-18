/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Splash,
  Home,
  Favourites,
  Profile,
  Settings,
  DetailHotel,
  SignIn,
  Booking,
  EditUser,
} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconNavBar from '../components/atoms/IconNavBar';
import {icons} from '../assets';
import {colors} from '../utils';

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
      <Stack.Screen
        name="Details"
        component={DetailHotel}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Booking"
        component={Booking}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditUser"
        component={EditUser}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export const NavBar = () => {
  const optionBar = icon => {
    return {
      headerShown: false,
      tabBarIcon: props => <IconNavBar data={props} image={icon} />,
      tabBarLabelStyle: {color: colors.primary, marginBottom: 10},
      tabBarStyle: {height: 60},
      tabBarHideOnKeyboard: true,
    };
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Search"
        component={Home}
        options={optionBar(icons.SEARCH)}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={optionBar(icons.HEART)}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={optionBar(icons.USER)}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={optionBar(icons.SETTINGS)}
      />
    </Tab.Navigator>
  );
};

export default Router;
