import React, { Component } from 'react';
import { shape } from 'prop-types';
import {
  Platform, Text, View, Button,
} from 'react-native';

import styles from './styles';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n'
    + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n'
    + 'Shake or press menu button for dev menu',
});

export default class Home extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  static defaultProps = {
    navigation: {},
  };

  static propTypes = {
    navigation: shape({}),
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.welcome}>
          <Text style={styles.textWelcome}>Welcome to React Native! test5</Text>
        </View>
        <View style={styles.instructions}>
          <Text style={styles.text}>To get started, edit App.js</Text>
        </View>
        <View style={styles.instructions}>
          <Text style={styles.text}>{instructions}</Text>
        </View>
        <Button
          title="Go to second page"
          onPress={() => navigation.navigate('Second')
            }
        />
      </View>
    );
  }
}
