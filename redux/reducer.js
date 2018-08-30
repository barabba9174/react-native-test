import { combineReducers } from 'redux';

import reportList from '../pages/ReposList/reducer';
import reportDetail from '../pages/RepoDetail/reducer';

export default combineReducers({ reportList });
