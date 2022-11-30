import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './CardProduct.style';

const CardProduct = ({product}) => {
  if (product.inStock) {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: product.imgURL}} />
        <View style={styles.inner_container}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>{product.price}</Text>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: product.imgURL}} />
        <View style={styles.inner_container}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>{product.price}</Text>
          <Text style={styles.noStock}>*Out of stock</Text>
        </View>
      </View>
    );
  }
};

export default CardProduct;
