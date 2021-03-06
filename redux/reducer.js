import { combineReducers } from 'redux';

import reportList from '../pages/ReposList/reducer';
import reportDetail from '../pages/RepoDetail/reducer';
import Dimensions from '../Dimensions/reducer';

export default combineReducers({ reportList, reportDetail, Dimensions });
