import { combineReducers } from 'redux';
import loading from './loading';
import todo from '../components/pages/Todo/reducer';

export default combineReducers({
  loading,
  todo,
});
