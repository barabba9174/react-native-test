import React, { Component } from 'react';
import {
  View, Text, FlatList,
} from 'react-native';
import { shape } from 'prop-types';

import styles from './styles';

export default class RepoDetail extends Component {
  static propTypes = {
    repo: shape({}),
  };

  static defaultProps = {
    repo: {},
  };

  componentDidMount() {
    const { navigation, repoDetail } = this.props;
    const { getParam } = navigation;
    repoDetail(
      navigation.getParam('user'),
      navigation.getParam('repo')
    );
  }


  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
    </View>
  );

  render() {
    const { repo } = this.props;
    console.log(repo);
    return (
      <FlatList />
    );
  }
}
