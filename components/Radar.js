import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

export default class Radar extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <LottieView
          source={require('../constants/radar-scanning-animation.json')}
          autoPlay
          loop
          style={{ height: 200 }}
        />
      </View>
    );
  }
}