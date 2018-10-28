import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import Dimensions from 'Dimensions';

const DEVICE_WIDTH = Dimensions.get('window').width;
export default class Radar extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <LottieView
          source={require('../constants/radar-scanning-animation.json')}
          autoPlay
          loop
          style={{ height: DEVICE_WIDTH * 0.6, opacity: 0.8, marginTop: '2%' }}
        />
      </View>
    );
  }
}