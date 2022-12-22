import React from 'react';
import {TextInput} from 'react-native';
import styles from './Input.style';

const Input = ({placeholder, onType}) => {
  return (
    <TextInput
      style={styles.TextInput}
      placeholder={placeholder}
      placeholderTextColor="#a0a0a0"
      onChangeText={onType}
    />
  );
};

export default Input;
