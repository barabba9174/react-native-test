import { connect } from 'react-redux';

import { repoDetail } from './reducer';
import RepoDetail from './RepoDetail';

const mapStateToProps = (state) => {
  const { repo = {}, loading } = state.reportDetail;
  const { content } = repo;

  return {
    content,
    loading,
  };
};

const mapDispatchToProps = {
  repoDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoDetail);
