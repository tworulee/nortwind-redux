import { combineReducers } from 'redux';
import changeCategoryReducers from './changeCategoryReducers';
import categoryListReducer from './categoryListReducer';

const rootReducer = combineReducers({
  changeCategoryReducers,
  categoryListReducer,
});

export default rootReducer;
