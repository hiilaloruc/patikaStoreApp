import React, {UseState, useEffect, useState} from 'react';
import {SafeAreaView, Text, FlatList} from 'react-native';
import Config from 'react-native-config';
import axios from 'axios';

import CardProduct from '../../components/CardItem';

const API_URL = 'https://fakestoreapi.com/products'; // api url to get data

const Products = () => {
  const [data, setData] = useState([]); //state for data info
  //first operation that will be triggered when this page loads
  useEffect(() => {
    fetchData();
  }, []);
  // func to get data from api
  const fetchData = async () => {
    const {data: productData} = await axios.get(API_URL);
    setData(productData);
  };
  //const renderProduct = ({item}) => <Text>{item.title}</Text>;
  const renderProduct = ({item}) => <CardProduct product={item} />;

  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderProduct} numColumns={2} />
    </SafeAreaView>
  );
};

export default Products;
