import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    backgroundColor: 'red',
    flex: 2,
    width: '100%',
    textAlignVertical: 'center',
    display: 'flex',
    justifyContent: 'center',

  },
  text: {
    textAlign: 'center',
  },
  textWelcome: {
    textAlign: 'center',
    fontSize: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    flex: 1,
    backgroundColor: '#00ff00',
    textAlignVertical: 'center',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
});

export default styles;
