import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './Button.style';

const Button = ({text, OnPress}) => {
  return (
    <TouchableOpacity style={styles.loginBtn}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
