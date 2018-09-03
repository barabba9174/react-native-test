import React, { PureComponent } from 'react';
import { Dimensions } from 'react-native';


export default class Dimension extends PureComponent {
  static propTypes = {

  };

  static defaultProps = {

  };

  componentDidMount() {
    const { setDimensions } = this.props;
    setDimensions(Dimensions.get('window'));
  }

  componentWillReceiveProps(nextProps) {
    const { orientation, setDimensions } = this.props;
    if (orientation === nextProps.orientation) return;
    setDimensions(Dimensions.get('window'));
  }


  render() {
    const { children, dimensions } = this.props;
    return children;
  }
}
