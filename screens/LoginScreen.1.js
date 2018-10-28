import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';

export default class LoginScreen extends Component {
  constructor(){
    super()
    this.state ={

    }
    this.onRegistrationHandler = this.registrationHandler.bind(this);
  }
  registrationHandler(data){
     this.setState({data:data}); 
  }
  render() {
    return (
      <Wallpaper>
        <Logo />
        <Form />
        <SignupSection />
       
      </Wallpaper>
    );
  }
}
