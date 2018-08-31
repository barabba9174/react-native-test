import React, { Component } from 'react';
import {
  View, Text, FlatList, ScrollView, Image, StyleSheet,
} from 'react-native';
import { string, func } from 'prop-types';
import { Buffer } from 'buffer';
import Markdown from 'react-native-markdown-renderer';
import FitImage from 'react-native-fit-image';

import styles from './styles';

const markdown = StyleSheet.create({
  heading: {
    borderBottomWidth: 1,
    borderColor: '#000000',
  },
  heading1: {
    fontSize: 32,
    backgroundColor: '#000000',
    color: '#FFFFFF',
  },
  heading2: {
    fontSize: 24,
  },
  heading3: {
    fontSize: 18,
  },
  heading4: {
    fontSize: 16,
  },
  heading5: {
    fontSize: 13,
  },
  heading6: {
    fontSize: 11,
  },
});


const rules = {
  image: (node, children, parent, styles) => <Image style={{ width: 50, height: 50 }} indicator key={node.key} style={styles.image} source={{ uri: node.attributes.src }} />,
};


export default class RepoDetail extends Component {
  static propTypes = {
    content: string,
    repoDetail: func,
  };

  static defaultProps = {
    content: '',
  };

  componentDidMount() {
    const { navigation, repoDetail } = this.props;
    const { getParam } = navigation;
    repoDetail(
      getParam('user'),
      getParam('repo')
    );
  }


  render() {
    const { content } = this.props;

    return (
      <View>
        <ScrollView style={styles.container}>
          <Markdown rules={rules} styles={markdown}>
            {Buffer.from(content, 'base64').toString('ascii')}
          </Markdown>
        </ScrollView>
      </View>
    );
  }
}
