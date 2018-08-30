import { connect } from 'react-redux';

import { repoDetail } from './reducer';
import RepoDetail from './RepoDetail';

const mapStateToProps = (state) => {
  const storedRepositorie = state.reportDetial.repo;
  return {
    repo: storedRepositorie,
  };
};

const mapDispatchToProps = {
  repoDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoDetail);
