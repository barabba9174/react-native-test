import { connect } from 'react-redux';

import { repoDetail } from './reducer';
import RepoDetail from './RepoDetail';

const mapStateToProps = (state) => {
  console.log(state);
  return ({
  // repo: storedRepositorie,
  });
};
const mapDispatchToProps = {
  repoDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoDetail);
