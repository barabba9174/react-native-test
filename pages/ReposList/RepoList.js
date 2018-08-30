import React, { Component } from 'react';
import {
  View, Text, FlatList,
} from 'react-native';
import { ListItem } from 'react-native-elements';

import { arrayOf, shape, string } from 'prop-types';

import styles from './styles';

export default class RepoList extends Component {
  static propTypes = {
    repos: arrayOf(shape({})),
    navigation: shape({}),
  };

  static defaultProps = {
    repos: [],
    navigation: {},
    user: string,
  };

  static navigationOptions = {
    title: 'Repos list for',
  };

  componentDidMount() {
    this.props.listRepos('relferreira');
  }

  keyExtractor = (item, index) => `repo${index}`;


  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={item.description}
      onPress={() => console.log('test')}
      leftAvatar={{
        source: { uri: item.owner.avatar_url },
        rounded: true,
        size: 'medium',
      }}
    />
  )

  render() {
    const { repos } = this.props;
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        styles={styles.container}
        data={repos}
        renderItem={this.renderItem}
      />
    );
  }
}
