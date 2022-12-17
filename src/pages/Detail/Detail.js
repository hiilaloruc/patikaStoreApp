import React from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import CardProduct from '../../components/CardItem';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import styles from './Detail.style';
import Star from 'react-native-star-view';

const Detail = ({route}) => {
  const {id} = route.params;
  const link = `https://fakestoreapi.com/products/${id}`;
  const {errMessage, loading, data} = useFetch(link); // call for the hook

  if (loading) {
    return <Loading />;
  }
  if (errMessage) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: data.image}} />
      <View style={styles.inner_container}>
        <Text style={styles.categoryInfo}>{data.category}</Text>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description}>{data.description}</Text>

        <View style={styles.subInfo}>
          <View style={styles.ratingContainer}>
            <Star score={data.rating.rate} style={styles.starStyle} />
            <Text style={styles.ratingCount}>({data.rating.count})</Text>
          </View>
        </View>
        <Text style={styles.price}>{data.price} $</Text>
      </View>
    </View>
  );
};

export default Detail;
