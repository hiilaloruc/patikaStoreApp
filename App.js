/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, FlatList, Text, StyleSheet} from 'react-native';
import CardProduct from './src/components/CardItem/CardProduct';
import data from './src/data.json';

const App = () => {
  const renderProducts = ({item}) => <CardProduct product={item} />;
  return (
    <SafeAreaView style={styles.main}>
      <FlatList
        ListHeaderComponent={
          <Text style={styles.headerTitle}>P A T I K A S T O R E</Text>
        }
        data={data}
        renderItem={renderProducts}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 30,
    textAlign: 'center',
  },
  main: {
    backgroundColor: '#eceff1',
  },
});
export default App;
