import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Second extends Component {
  static navigationOptions = {
    title: 'Second page',
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.welcome}>
            <Text style={styles.textWelcome}>Welcome to second page</Text>
        </View>
        <View style={styles.instructions}>
            <Text style={styles.text}>To get started, edit App.js</Text>
        </View>
        <View style={styles.instructions}>
            <Text style={styles.text}>{instructions}</Text>
        </View>
        <Button
            title="Go to third page"
            onPress={() =>
              navigation.navigate('Third')
            }
        />
      </View>
    );
  }
}

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
