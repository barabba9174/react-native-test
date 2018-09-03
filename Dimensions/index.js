import { connect } from 'react-redux';

import { setDimensions } from './reducer';
import Dimensions from './Dimension';

const mapStateToProps = (state) => {
  const { Dimensions: stateDimension = {} } = state;
  const { dimensions = {} } = stateDimension;
  return {
    dimensions,
  };
};

const mapDispatchToProps = {
  setDimensions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dimensions);
