import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    width: '100%',
    resizeMode: 'contain',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  price: {
    marginBottom: 2,
    marginTop: 5,
    fontWeight: 'bold',
    color: '#808080',
  },
  inner_container: {
    flex: 1,
    margin: 5,
    justifyContent: 'center',
  },
  noStock: {
    width: 85,
    fontSize: 12,
    color: 'red',
    fontWeight: 'bold',
    backgroundColor: '#ffc7c7',
    borderRadius: 10,
    padding: 2,
  },
});
