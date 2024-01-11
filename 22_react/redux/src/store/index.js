import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import isVisibleReducer from './isVisibleReducer';
import bankingReducer from './bankingReducer';

// 여러 리듀서를 가진 객체 생성
const rootReducer = combineReducers({
  counter: counterReducer,
  isVisible: isVisibleReducer,
  banking: bankingReducer,
});

export default rootReducer;
