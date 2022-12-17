import React from 'react';
import {Text, FlatList, ActivityIndicator} from 'react-native';
//import FlashMessage from 'react-native-flash-message';
import {showMessage, hideMessage} from 'react-native-flash-message';
import CardProduct from '../../components/CardItem';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const API_URL = 'https://fakestoreapi.com/products'; // api url to get data

const Products = ({navigation}) => {
  const {errMessage, loading, data} = useFetch(API_URL); // call for the hook

  const showAlert = errMessage => {
    /* HERE IS WHERE WE'RE GOING TO SHOW OUR FIRST MESSAGE */
    showMessage({
      message: errMessage,
      type: 'danger',
    });
  };
  const onClick = id => {
    navigation.navigate('DetailPage', {id});
  };

  //const renderProduct = ({item}) => <Text>{item.title}</Text>;
  const renderProduct = ({item}) => (
    <CardProduct product={item} onClick={() => onClick(item.id)} />
  );

  if (loading) {
    //until data will be loaded show loading
    //return <ActivityIndicator size="large" />; //v0.0
    return <Loading />;
  }
  if (errMessage) {
    //showAlert(errMessage); //v0.0
    return <Error />;
    // return <Text>{errMessage}</Text>;
  }
  return (
    <FlatList data={data} renderItem={renderProduct} numColumns={2} />
    //<FlashMessage position="top" statusBarHeight={10} />
  );
};

export default Products;
