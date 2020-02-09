import { combineReducers } from 'redux';
import auth from './auth';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  auth,
});

export function* rootSaga() {
  yield all([]);
}

export default rootReducer;
