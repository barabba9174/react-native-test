import React, { PureComponent } from 'react';
import { Dimensions } from 'react-native';


export default class Dimension extends PureComponent {
  static propTypes = {

  };

  static defaultProps = {

  };

  componentDidMount() {
    this.props.setDimensions(Dimensions.get('window'));
  }

  componentWillReceiveProps(nextProps) {
    const { orientation } = this.props;
    if (orientation === nextProps.orientation) return;
    this.props.setDimensions(Dimensions.get('window'));
  }


  render() {
    const { children, dimensions } = this.props;
    console.log(dimensions);
    return children;
  }
}
