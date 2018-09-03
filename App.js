import React, { Component } from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import {
  View, Text, FlatList, Button,
} from 'react-native';
import { Provider } from 'react-redux';
import { Icon } from 'react-native-elements';

import Third from './pages/Third';
import Second from './pages/Second';
import Home from './pages/Home';
import store from './redux/store';
import ReposList from './pages/ReposList';
import RepoDetail from './pages/RepoDetail';


function HeaderLeft({ navigation }) {
  return (
    <Icon name="menu" size={30} containerStyle={{ marginLeft: 10 }} onPress={() => { navigation.toggleDrawer(); }} />
  );
}

function HeaderLeftBack({ navigation }) {
  return (
    <Icon name="chevron-left" size={30} containerStyle={{ marginLeft: 10 }} onPress={() => { navigation.goBack(); }} />
  );
}


const Routing = createStackNavigator({
  List: {
    screen: ReposList,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.user,
    }),
  },
  Detail: {
    screen: RepoDetail,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.repo,
      headerLeft: (<HeaderLeftBack navigation={navigation} />),
    }),
  },
  First: {
    screen: Home,
  },
  Second: {
    screen: Second,
  },
  Third: {
    screen: Third,
  },
}, {
  initialRouteParams: { user: 'relferreira' },
  initialRouteName: 'List',
  navigationOptions: ({ navigation }) => ({
    headerLeft: (<HeaderLeft navigation={navigation} />),
  }),
});

const RootDrawer = createDrawerNavigator({
  Home: {
    screen: Routing,
  },
  List: {
    screen: ReposList,
  },
  First: {
    screen: Home,
  },
  Second: {
    screen: Second,

  },
  Third: {
    screen: Third,
  },
}, {
  initialRouteName: 'Home',
  initialRouteParams: { user: 'relferreira' },
});

export default function App() {
  return (
    <Provider store={store}>
      <RootDrawer />
    </Provider>
  );
}
