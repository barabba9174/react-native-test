import React, { Component } from 'react';
import {
  Platform, Text, View,
} from 'react-native';

import styles from './styles';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload\nCmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n'
    + 'Shake or press menu button for dev menu',
});

export default class Third extends Component {
  static navigationOptions = {
    title: 'Third page',
  };

  render() {
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
      </View>
    );
  }
}
