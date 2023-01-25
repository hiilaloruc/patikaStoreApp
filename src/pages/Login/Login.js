import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import {Formik} from 'formik';
import {showMessage} from 'react-native-flash-message';
import {useDispatch} from 'react-redux';
import styles from './Login.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import usePost from '../../hooks/usePost/usePost';

const Login = ({navigation}) => {
  const {data, loading, error, post} = usePost();
  const dispatch = useDispatch();

  function handleLogin(values) {
    if (values.username !== '' && values.password !== '') {
      post('https://fakestoreapi.com/auth/login', values);
    } else {
      showMessage({
        message: 'Missing username or password.',
        type: 'danger',
      });
    }
  }

  if (!loading) {
    if (data) {
      if (data.token !== undefined) {
        const token = data.token;
        dispatch({type: 'SET_USER', payload: {token}});
        //navigation.navigate('ProductsPage');
      } else {
        //Alert.alert('PatikaStore', 'Something went wrong..');
        showMessage({
          message: 'Something went wrong..',
          type: 'danger',
        });
      }
    } else {
      if (error) {
        showMessage({
          message: 'Incorrect username or password.',
          type: 'danger',
        });
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
