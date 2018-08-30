import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import Third from './pages/Third';
import Second from './pages/Second';
import Home from './pages/Home';
import store from './redux/store';
import ReposList from './pages/ReposList';
import RepoDetail from './pages/RepoDetail';


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
    }),
  },
  Third: { screen: Third },
}, {
  initialRouteParams: { user: 'relferreira' },
});

export default function App() {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
}
