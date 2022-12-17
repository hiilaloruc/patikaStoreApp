import React from 'react';
import Lottie from 'lottie-react-native';

function Loading() {
  return <Lottie source={require('../../assets/loading.json')} autoPlay />;
}

export default Loading;
