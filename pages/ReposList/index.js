import { connect } from 'react-redux';

import { listRepos } from './reducer';
import RepoList from './RepoList';

const mapStateToProps = (state) => {
  const { reportList = {} } = state;
  const { loading, repos = [] } = reportList;
  const storedRepositories = repos.map(repo => ({ key: repo.id, ...repo }));
  return {
    repos: storedRepositories,
    loading,
  };
};

const mapDispatchToProps = {
  listRepos,
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);
