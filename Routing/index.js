import React from 'react';
import { createStackNavigator, createDrawerNavigator, createTabNavigator } from 'react-navigation';

import { Icon } from 'react-native-elements';

import Third from '../pages/Third';
import Second from '../pages/Second';
import Home from '../pages/Home';

import ReposList from '../pages/ReposList';
import RepoDetail from '../pages/RepoDetail';


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
  // initialRouteName: 'List',
  initialRouteKey: 'List',
  headerMode: 'screen',
  navigationOptions: (props) => {
    const { navigation } = props;
    return ({
      headerLeft: (<HeaderLeft navigation={navigation} />),
    });
  },
});

const Tab = createTabNavigator({
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
  initialRouteName: 'First',
  tabBarPosition: 'top',
  initialRouteParams: { user: 'relferreira' },
});

export default createDrawerNavigator({
  Home: {
    screen: Routing,
  },
  Tab: {
    screen: Tab,
  },
}, {
  headerMode: 'float',
  contentOptions: { activeTintColor: '#e91e63' },
  initialRouteName: 'Home',
  initialRouteParams: { user: 'relferreira' },
});
