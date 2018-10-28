import React from 'react';
import {createSwitchNavigator,createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import Main from '../screens/MainScreen';
import Login from '../screens/LoginScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import SecondScreen from '../screens/SecondScreen';
import SearchScreen from '../screens/SearchScreen';
import MessegesScreen from '../screens/MessagesScreen';
import RegPageScreen from '../screens/RegPageScreen';
import ButtonSubmit from '../screens/ButtonSubmit';

const AppStack = createStackNavigator({
      Main:SecondScreen,
      Scanner:SearchScreen,
      Chat:MessegesScreen,
      ProfileSettings:SecondScreen,
      Error:SecondScreen,

},{
headerMode:'none'
})
const AuthStack = createStackNavigator({
    SignIn:Login,
    Search:SearchScreen,
    Registration:RegPageScreen,
    SignUpButton:ButtonSubmit,
    Error:SecondScreen
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