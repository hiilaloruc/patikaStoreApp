import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  image: {
    marginTop: 20,
    height: 100,
    resizeMode: 'contain',
  },

  ContentContainer: {
    height: Dimensions.get('window').height / 1.5,
    width: Dimensions.get('window').width,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TitleContainer: {
    alignItems: 'center',
  },

  h1: {
    fontWeight: '400',
    fontSize: 28,
  },
  p: {
    fontSize: 17,
    marginTop: 4,
    color: '#737373',
  },
  inputContainer: {
    width: Dimensions.get('window').width / 1.1,
    margin: 10,
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
});

export default styles;
