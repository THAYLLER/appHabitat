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
import MyPublicProfile from '../page/MyPublicProfile';
import SettingsPanel from '../page/SettingsPanel';
import TermsAndConditions from '../page/TermsAndConditions';
import PrivacyPolicies from '../page/PrivacyPolicies';
import Opinion from '../page/Opinion';
import HelpAndSupport from '../page/HelpAndSupport';
import Notifications from '../page/Notifications';
import MyCircle from '../page/MyCircle';
import Habit from '../page/Habit';
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
        <Screen name="MyCircle" component={MyCircle} />
        <Screen name="Habit" component={Habit} />
        <Screen 
          name="SettingsPanel" 
          component={SettingsPanel} 
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
          name="MyPublicProfile" 
          component={MyPublicProfile} 
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
          name="TermsAndConditions" 
          component={TermsAndConditions} 
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
          name="PrivacyPolicies" 
          component={PrivacyPolicies} 
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
          name="HelpAndSupport" 
          component={HelpAndSupport} 
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
          name="Opinion" 
          component={Opinion} 
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
          name="Notifications" 
          component={Notifications} 
          options={{ 
            headerShown: true, 
            headerTitle: '', 
            headerStyle: {
              backgroundColor: '#fff',
              elevation:0
            }
          }} 
        />
      </Navigator>
    </NavigationContainer>
  )
}