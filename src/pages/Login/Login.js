import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import styles from './Login.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ContentContainer}>
        <Image style={styles.image} source={require('../../assets/logo.png')} />
        <View style={styles.TitleContainer}>
          <Text style={styles.h1}>Log In Now</Text>
          <Text style={styles.p}>Please login to reach products.</Text>
        </View>
        <View style={styles.inputContainer}>
          <Input placeholder={'Email'} />
          <Input placeholder={'Password'} />
          <Button text={'Log In'} />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Login;
