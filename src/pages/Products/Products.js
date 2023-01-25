import React from 'react';
import {View, FlatList, Button} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import CardProduct from '../../components/CardItem';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import {useDispatch} from 'react-redux';

const API_URL = 'https://fakestoreapi.com/products'; // api url to get data

const Products = ({navigation}) => {
  const dispatch = useDispatch();
  const {errMessage, loading, data} = useFetch(API_URL); // call for the hook

  const logOut = () => {
    showMessage({
      message: 'Successfully logged out.',
      type: 'success',
    });
    dispatch({type: 'REMOVE_USER'});
  };

  const onClick = id => {
    navigation.navigate('DetailPage', {id});
  };

  const renderProduct = ({item}) => (
    <CardProduct product={item} onClick={() => onClick(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }
  if (errMessage) {
    return <Error />;
  }
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderProduct}
        numColumns={2}
        ListFooterComponent={
          <Button title="Log out" onPress={logOut} color="red" />
        }
        style={{marginBottom: 15}}
      />
    </View>
  );
};

export default Products;
