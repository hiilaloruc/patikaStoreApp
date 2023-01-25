import React from 'react';
import {SafeAreaView, View, Text, Image, Alert} from 'react-native';
import {Formik} from 'formik';
import styles from './Login.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import usePost from '../../hooks/usePost/usePost';

const Login = ({navigation}) => {
  const {data, loading, error, post} = usePost();

  function handleLogin(values) {
    post('https://fakestoreapi.com/auth/login', values);
  }

  if (!loading) {
    if (data) {
      if (data.token !== undefined) {
        navigation.navigate('ProductsPage');
        //console.log('success..');
      } else {
        Alert.alert('PatikaStore', 'Something went wrong..');
      }
    } else {
      if (error) {
        console.log('mistaken info..');
        Alert.alert('PatikaStore', 'User not found.');
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ContentContainer}>
        <Image style={styles.image} source={require('../../assets/logo.png')} />
        <View style={styles.TitleContainer}>
          <Text style={styles.h1}>Log In Now</Text>
          <Text style={styles.p}>Please login to reach products.</Text>
        </View>
        <Formik
          initialValues={{username: '', password: ''}}
          onSubmit={handleLogin}>
          {({handleSubmit, handleChange, values}) => (
            <View style={styles.inputContainer}>
              <Input
                placeholder={'Username'}
                value={values.username}
                onType={handleChange('username')}
              />
              <Input
                placeholder={'Password'}
                value={values.password}
                onType={handleChange('password')}
                isSecure={true}
              />
              <Button text="LOGIN" onPress={handleSubmit} loading={loading} />
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};
export default Login;
