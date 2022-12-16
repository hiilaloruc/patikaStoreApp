/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Products from './pages/Products';
import Detail from './pages/Detail';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="P A T I K A S T O R E" component={Products} />
        <Stack.Screen name="DetailPage" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  /*const renderProducts = ({item}) => <CardProduct product={item} />;
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
  );*/
};

/*const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 30,
    textAlign: 'center',
  },
  main: {
    backgroundColor: '#eceff1',
  },
});*/
export default Router;
