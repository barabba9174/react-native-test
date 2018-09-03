import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Orientation from 'react-native-orientation';

import Dimensions from './Dimensions';
import Drawer from './Routing';
import store from './redux/store';


export default class App extends Component {
  static propTypes = {

  };

  static defaultProps = {

  };

  constructor() {
    super();
    this.state = {
      orientation: Orientation.getInitialOrientation(),
    };
  }


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
    this.setState({ orientation });
    if (orientation === 'LANDSCAPE') {
      // do something with landscape layout
    } else {
      // do something with portrait layout
    }
  }


  render() {
    return (
      <Provider store={store}>
        <Dimensions orientation={this.state.orientation}>
          <Drawer />
        </Dimensions>
      </Provider>
    );
  }
}
