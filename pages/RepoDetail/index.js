import { connect } from 'react-redux';

import { repoDetail } from './reducer';
import RepoDetail from './RepoDetail';

const mapStateToProps = (state) => {
  const content = state.reportDetail.repo.content;
  console.log(state.reportDetail.repo);
  return {
    content,
  };
};

const mapDispatchToProps = {
  repoDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoDetail);
