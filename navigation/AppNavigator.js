import React from 'react';
import {createSwitchNavigator,createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import Main from '../screens/MainScreen';
import Login from '../screens/LoginScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import SecondScreen from '../screens/SecondScreen';
import MessegesScreen from '../screens/MessagesScreen';
import RegPageScreen from '../screens/RegPageScreen';
import ButtonSubmit from '../screens/ButtonSubmit';
import SearchScreen from '../screens/SearchScreen';
import Test from '../navigation/MainTabNavigator';

import MessageScreen from '../screens/MessageScreen'

const ConnectStack = createStackNavigator({
      Tabs:Test,
      Chat:MessageScreen,
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
  App:ConnectStack
},{initialRouteName:'AuthLoading'});