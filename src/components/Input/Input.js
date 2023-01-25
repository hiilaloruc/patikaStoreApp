import React from 'react';
import {TextInput} from 'react-native';
import styles from './Input.style';

const Input = ({placeholder, value, onType, isSecure}) => {
  return (
    <TextInput
      style={styles.TextInput}
      placeholder={placeholder}
      placeholderTextColor="#a0a0a0"
      onChangeText={onType}
      value={value}
      secureTextEntry={isSecure ? true : false}
      autoCapitalize="none"
    />
  );
};

export default Input;
