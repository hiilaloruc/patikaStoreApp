import React from 'react';
import {Image, View} from 'react-native';
import styles from './Landing.styles';

function Landing() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
    </View>
  );
}

export default Landing;
