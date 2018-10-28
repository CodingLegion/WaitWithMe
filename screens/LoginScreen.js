import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';
import logoImg from '../images/logo.png';
import spinner from '../images/loading.gif';
import Dimensions from 'Dimensions';
import {  StyleSheet,
  KeyboardAvoidingView,
  View,
  Animated,
  Easing,
  ActivityIndicator,
  Text,
  AsyncStorage,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import UserInput from './UserInput';

import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';
import eyeImg from '../images/eye_black.png';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;
export default class LoginScreen extends Component {
  constructor() {
    super()
  
    this.state = {
      showPass: true,
      press: false,
    };
    this.showPass = this.showPass.bind(this);
    this.buttonAnimated = new Animated.Value(0);
    this.growAnimated = new Animated.Value(0);
    this._onPress = this._onPress.bind(this);
    this._onPressRegister = this._onPressRegister.bind(this);
    this.onRegistrationHandler = this.registrationHandler.bind(this);
  }
  _onPressRegister(){
    this.props.navigation.navigate('Registration')
   }
  registrationHandler(data) {
    //this.setState({ data: data });
  }
  showPass() {
    this.state.press === false
      ? this.setState({showPass: false, press: true})
      : this.setState({showPass: true, press: false});
  }
  _onPress() {
    if (this.state.isLoading) return;
    let store_data = async ()=>{
      try{
        await  AsyncStorage.setItem('UserToken','abc1337');
      }catch(e){
       console.log(e)   
      }
    }
    console.log('Button Pressed')
    store_data();  
    this.setState({isLoading: true});
    Animated.timing(this.buttonAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start();

    setTimeout(() => {
      this._onGrow();
    }, 2000);
    this.props.navigation.navigate('Scanner');
  }

  _onGrow() {
    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start();
  }
  render() {
    const changeWidth = this.buttonAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [DEVICE_WIDTH - MARGIN, MARGIN],
    });
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, MARGIN],
    });
    return (
      <Wallpaper>
        <View style={stylesLogo.container}>
          <Image source={logoImg} style={stylesLogo.image} />
          <Text style={stylesLogo.text}>Making your waiting and commuting a fun time time</Text>
        </View>
        <KeyboardAvoidingView behavior="padding" style={stylesForm.container}>
        <UserInput
          source={usernameImg}
          placeholder="Username"
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
        />
        <UserInput
          source={passwordImg}
          secureTextEntry={this.state.showPass}
          placeholder="Password"
          returnKeyType={'done'}
          autoCapitalize={'none'}
          autoCorrect={false}
        />
          <TouchableOpacity
            activeOpacity={0.7}
            style={stylesForm.btnEye}
            onPress={this.showPass}>
            <Image source={eyeImg} style={stylesForm.iconEye} />
          </TouchableOpacity>


          
          <View style={stylesSubmit.container}>
            <Animated.View style={{ width: changeWidth }}>
              <TouchableOpacity
                style={stylesSubmit.button}
                onPress={this._onPress}
                activeOpacity={1}>
                {this.state.isLoading ? (
                  <Image source={spinner} style={stylesSubmit.image} />
                ) : (
                    <Text style={stylesSubmit.text}>LOGIN</Text>
                )}
              </TouchableOpacity>
              <Animated.View
                style={[stylesSubmit.circle, { transform: [{ scale: changeScale }] }]}
              />
            </Animated.View>
           
          </View> 
         
        </KeyboardAvoidingView>

         <View style={stylesSignUp.container}>
        <Text style={stylesSignUp.text} onPress={this._onPressRegister}>Create Account</Text>
        <Text style={stylesSignUp.text}>Forgot Password?</Text>
      </View>

      </Wallpaper>
    );
  }

}
const stylesLogo = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 160,
    height: 160,
  },
  text: {
    fontSize: 16,
    color: '#ff71ce',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 20,
  }
});

const stylesForm = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  btnEye: {
    position: "absolute",
    top: 75,
    right: 28,
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },
});

const stylesSubmit = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b967ff',
    height: MARGIN,
    borderRadius: 20,
    zIndex: 100,
  },
  circle: {
    height: MARGIN,
    width: MARGIN,
    marginTop: -MARGIN,
    borderWidth: 1,
    borderColor: '#F035E0',
    borderRadius: 100,
    alignSelf: 'center',
    zIndex: 99,
    backgroundColor: '#F035E0',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  image: {
    backgroundColor:'#b967ff',
    width: 24,
    height: 24,
  },
});
const stylesSignUp = StyleSheet.create({
  container: {
    flex: 1,
    top: 85,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
});
