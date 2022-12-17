import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
    marginTop: 10,
    resizeMode: 'contain',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 19,
  },
  price: {
    marginTop: 12,
    padding: 15,
    fontSize: 25,
    backgroundColor: '#ffe5d1',
    color: '#e56903',
    fontWeight: 'bold',
    lineHeight: 50,
    textAlign: 'center',
    borderRadius: 10,
  },
  inner_container: {
    flex: 1,
    margin: 10,
  },
  categoryInfo: {
    alignSelf: 'flex-start',
    fontSize: 15,
    color: '#727272',
    fontWeight: 'bold',
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
    padding: 3,
    marginTop: 15,
    marginBottom: 5,
    textTransform: 'capitalize',
  },
  starStyle: {
    width: 100,
    height: 20,
    marginBottom: 0,
  },
  ratingContainer: {
    marginTop: 10,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingCount: {
    marginLeft: 5,
  },
  description: {
    color: 'gray',
    marginTop: 5,
    padding: 4,
  },
});
