import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import styles from './Button.style';

const Button = ({text, onPress, loading}) => {
  return (
    <TouchableOpacity
      style={styles.loginBtn}
      onPress={onPress}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={styles.btnText}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
