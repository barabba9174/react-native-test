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
    user: string,
  };

  static defaultProps = {
    repos: [],
    navigation: {},
    user: '',
  };


  componentDidMount() {
    const { navigation, listRepos } = this.props;
    listRepos(navigation.state.params.user);
  }

  keyExtractor = (item, index) => `repo${index}`;


  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      style={styles.subtitleView}
      subtitle={item.description}
      onPress={() => this.props.navigation.push('Detail', {
        user: this.props.navigation.state.params.user,
        repo: item.name,
      })}
      chevronColor="grey"
      chevron
      leftAvatar={{
        source: { uri: item.owner.avatar_url },
        rounded: true,
        size: 'medium',
      }}
    />
  )

  render() {
    const { repos, user } = this.props;
    return (
      <FlatList
        screenProps={{ user }}
        keyExtractor={this.keyExtractor}
        styles={styles.container}
        data={repos}
        renderItem={this.renderItem}
      />
    );
  }
}
