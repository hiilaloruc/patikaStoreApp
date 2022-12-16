import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './CardProduct.style';
import Star from 'react-native-star-view';

const CardProduct = ({product}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: product.image}} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{product.title}</Text>
        <View style={styles.subInfo}>
          <Text style={styles.noStock}>{product.category}</Text>
          <View style={styles.ratingContainer}>
            <Star score={product.rating.rate} style={styles.starStyle} />
            <Text style={styles.ratingCount}>({product.rating.count})</Text>
          </View>

          <Text style={styles.price}>{product.price} $</Text>
        </View>
      </View>
    </View>
  );
};
export default CardProduct;
