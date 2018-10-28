import React, {Component} from 'react';
import PropTypes from 'prop-types';
import RegForm from './RegForm';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';

export default class LoginScreen extends Component {
  render() {
    return (
      <Wallpaper>
        <RegForm />
        <ButtonSubmit />
      </Wallpaper>
    );
  }
}
