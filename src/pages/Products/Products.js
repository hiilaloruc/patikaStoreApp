import React, {UseState, useEffect, useState} from 'react';
import {SafeAreaView, Text, FlatList, ActivityIndicator} from 'react-native';
import Config from 'react-native-config';
import axios from 'axios';
import FlashMessage from 'react-native-flash-message';
import {showMessage, hideMessage} from 'react-native-flash-message';

import CardProduct from '../../components/CardItem';

const API_URL = 'https://fakestoreapi.com/products'; // api url to get data

const Products = () => {
  //states
  const [data, setData] = useState([]); //state for data info
  const [loading, setLoading] = useState(true); //state for loading info
  const [errMessage, setErrMessage] = useState(null); //state for error handling

  //first operation that will be triggered when this page loads
  useEffect(() => {
    fetchData();
  }, []);

  // func to get data from api
  const fetchData = async () => {
    try {
      const {data: productData} = await axios.get(API_URL);
      setData(productData);
      setLoading(false); // no more loading screen needed since data is fetched
    } catch (err) {
      setErrMessage(err.message);
      setLoading(false);
    }
  };
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
