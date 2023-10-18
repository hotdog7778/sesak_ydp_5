import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import isVisibleReducer from './isVisibleReducer';

// 여러 리듀서를 가진 객체 생성
const rootReducer = combineReducers({
  counter: counterReducer,
  isVisible: isVisibleReducer,
});

export default rootReducer;
