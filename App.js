import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Orientation from 'react-native-orientation';

import Drawer from './Routing';
import store from './redux/store';


export default class App extends Component {
  static propTypes = {

  };

  static defaultProps = {

  };


  componentDidMount() {
    Orientation.unlockAllOrientations();

    Orientation.addOrientationListener(this.orientationDidChange);
  }

  componentWillUnmount() {
    Orientation.getOrientation((err, orientation) => {
      console.log(`Current Device Orientation: ${orientation}`);
    });


    // Remember to remove listener
    Orientation.removeOrientationListener(this.orientationDidChange);
  }


  orientationDidChange = (orientation) => {
    console.log(orientation);
    if (orientation === 'LANDSCAPE') {
      // do something with landscape layout
    } else {
      // do something with portrait layout
    }
  }


  render() {
    return (
      <Provider store={store}>
        <Drawer />
      </Provider>
    );
  }
}
