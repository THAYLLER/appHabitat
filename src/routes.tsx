import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './page/SignIn';
import SignUp from './page/SignUp';
import ForgotPassword from './page/ForgotPassword';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false,  }} >
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
      </Navigator>
    </NavigationContainer>
  )
}