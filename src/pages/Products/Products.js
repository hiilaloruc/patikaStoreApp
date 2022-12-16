import React from 'react';
import {SafeAreaView, Text, FlatList, ActivityIndicator} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {showMessage, hideMessage} from 'react-native-flash-message';

import CardProduct from '../../components/CardItem';
import useFetch from '../../hooks/useFetch/useFetch';

const API_URL = 'https://fakestoreapi.com/products'; // api url to get data

const Products = () => {
  const {errMessage, loading, data} = useFetch(API_URL); // call for the hook

  const showAlert = errMessage => {
    /* HERE IS WHERE WE'RE GOING TO SHOW OUR FIRST MESSAGE */
    showMessage({
      message: errMessage,
      type: 'danger',
    });
  };

  //const renderProduct = ({item}) => <Text>{item.title}</Text>;
  const renderProduct = ({item}) => <CardProduct product={item} />;

  if (loading) {
    //until data will be loaded show loading
    return <ActivityIndicator size="large" />;
  }
  if (errMessage) {
    showAlert(errMessage);
    // return <Text>{errMessage}</Text>;
  }
  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderProduct} numColumns={2} />
      <FlashMessage position="top" statusBarHeight={10} />
    </SafeAreaView>
  );
};

export default Products;
