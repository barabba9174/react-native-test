import React, { Component } from 'react';
import {
  FlatList,
} from 'react-native';
import { ListItem } from 'react-native-elements';

import {
  arrayOf, shape, string, bool, func,
} from 'prop-types';

import Loading from '../../common/Loader';
import styles from './styles';

export default class RepoList extends Component {
  static propTypes = {
    repos: arrayOf(shape({})),
    navigation: shape({}),
    user: string,
    loading: bool,
    listRepos: func,
  };

  static defaultProps = {
    repos: [],
    navigation: {},
    user: '',
    loading: false,
    listRepos: () => {},
  };

  static navigationOptions = {
    drawerLabel: 'List',
  }

  componentDidMount() {
    const { navigation, listRepos } = this.props;
    listRepos(navigation.state.params.user);
  }

  keyExtractor = (item, index) => `repo${index}`;


  renderItem = ({ item }) => {
    const { navigation } = this.props;
    return (
      <ListItem
        title={item.name}
        style={styles.subtitleView}
        subtitle={item.description}
        onPress={() => navigation.push('Detail', {
          user: navigation.state.params.user,
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

    );
  }

  render() {
    const { repos, user, loading } = this.props;
    return loading ? (<Loading />) : (
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
