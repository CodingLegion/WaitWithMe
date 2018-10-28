import React, { Component } from 'react';
import { Router,Stack, Scene, Actions, ActionConst } from 'react-native-router-flux';

import LoginScreen from './LoginScreen';
import SecondScreen from './SecondScreen';
import MessagesScreen from './MessagesScreen';
import RegPageScreen from './RegPageScreen';
import AuthLoadingScreen from './AuthLoadingScreen';

export default class Main extends Component {
  render() {
	  return (
	    <Router>
	      <Scene key="root">
	        <Scene key="loginScreen"
	          component={LoginScreen}
	        	animation='fade'
	          hideNavBar={true}
	          initial={true}
	        />
					<Scene key='registrationScreen'
						component={RegPageScreen}
						animation='fade'
						hideNavBar={true}
						></Scene>
						<Scene key="landingScreen"
								component={AuthLoadingScreen}
								hideNavBar={true}
								animation='fade'>
						</Scene>
	    	
	      </Scene>
					
	    </Router>
	  );
	}
}