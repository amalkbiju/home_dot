import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LoginOrRegisterScreen from '../screens/LoginOrRegisterScreen';
import ExistingUserScreen from '../screens/ExistingUserScreen';
import NonExstingUserOtpScreen from '../screens/NonExstingUserOtpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import ForgotPasswordOtpVvarifiactionScreen from '../screens/ForgotPasswordOtpVvarifiactionScreen';
import ForgotPasswordOtpToLogin from '../screens/ForgotPasswordOtpToLogin';
const stack = createNativeStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="SplashScreen" component={SplashScreen} />
        <stack.Screen
          name="LoginOrRegisterScreen"
          component={LoginOrRegisterScreen}
        />
        <stack.Screen
          name="NonExstingUserOtpScreen"
          component={NonExstingUserOtpScreen}
        />
        <stack.Screen
          name="ExistingUserScreen"
          component={ExistingUserScreen}
        />
        <stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
        <stack.Screen
          name="ForgotPasswordOtpVvarifiactionScreen"
          component={ForgotPasswordOtpVvarifiactionScreen}
        />
        <stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
        <stack.Screen
          name="ForgotPasswordOtpToLogin"
          component={ForgotPasswordOtpToLogin}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
