import React from 'react';
import {createSwitchNavigator,createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import Main from '../screens/MainScreen';
import Login from '../screens/SecondScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import SecondScreen from '../screens/SecondScreen';

const AppStack = createStackNavigator({
      Main:Login,
      Scanner:SecondScreen,
      Chat:MessegesScreen,
      ProfileSettings:ProfileScreen,
      Error:ErrorScreen
},{
headerMode:'none'
})
const AuthStack = createStackNavigator({
    SignIn:Main,
    Registration:RegPageScreen,
    Error:ErrorScreen
},{
  headerMode:'none'
});
export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  AuthLoading:AuthLoadingScreen,
  Auth:AuthStack,
  App:AppStack
},{initialRouteName:'AuthLoading'});