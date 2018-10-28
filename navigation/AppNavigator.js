import React from 'react';
import {createSwitchNavigator,createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import Main from '../screens/MainScreen';
import Login from '../screens/SecondScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

const AppStack = createStackNavigator({
      Main:Main
})
const AuthStack = createStackNavigator({
    SignIn:Login
});
export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  AuthLoading:AuthLoadingScreen,
  Auth:AuthStack,
  App:AppStack
},{initialRouteName:'AuthLoading'});