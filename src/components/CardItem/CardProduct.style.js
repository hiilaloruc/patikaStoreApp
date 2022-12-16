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
    fontSize: 15,
  },
  price: {
    display: 'flex',
    marginBottom: 2,
    marginTop: 5,
    padding: 5,
    fontSize: 18,
    backgroundColor: '#ffe5d1',
    color: '#e56903',
    fontWeight: 'bold',
    height: 30,
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  inner_container: {
    flex: 1,
    margin: 5,
    justifyContent: 'space-between',
  },
  noStock: {
    alignSelf: 'flex-start',
    fontSize: 12,
    color: '#727272',
    fontWeight: 'bold',
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
    padding: 3,
    marginTop: 5,
    textTransform: 'capitalize',
  },
  starStyle: {
    width: 100,
    height: 20,
    marginBottom: 0,
  },
  ratingContainer: {
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingCount: {
    marginLeft: 5,
  },
});
