import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import SignIn from '../page/SignIn';
import SignUp from '../page/SignUp';
import ForgotPassword from '../page/ForgotPassword';
import WelcomeScrean from '../page/WelcomeScrean';
import OnboardingSwiper from '../page/OnboardingSwiper';
import HomeRoutes from './home.routes';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false,  }}  initialRouteName="OnboardingSwiper">
        <Screen name="SignIn" component={SignIn} />
        <Screen 
          name="SignUp" 
          component={SignUp} 
          options={{ 
            headerShown: true, 
            headerTitle: '', 
            headerStyle: {
              backgroundColor: '#fff',
              elevation:0
            }
          }} 
        />
        <Screen 
          name="ForgotPassword" 
          component={ForgotPassword} 
          options={{ 
            headerShown: true, 
            headerTitle: '', 
            headerStyle: {
              backgroundColor: '#fff',
              elevation:0
            }
          }} 
        />
        <Screen name="WelcomeScrean" component={WelcomeScrean} />
        <Screen name="Home" component={HomeRoutes} />
        <Screen name="OnboardingSwiper" component={OnboardingSwiper} />
      </Navigator>
    </NavigationContainer>
  )
}