import { connect } from 'react-redux';

import { listRepos } from './reducer';
import RepoList from './RepoList';

const mapStateToProps = (state) => {
  const storedRepositories = state.reportList.repos.map(repo => ({ key: repo.id, ...repo }));
  return {
    repos: storedRepositories,
  };
};

const mapDispatchToProps = {
  listRepos,
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);
