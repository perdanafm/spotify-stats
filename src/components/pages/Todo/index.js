import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Todo from './component';
import * as actions from './action';

function mapStateToProps(state) {
  const { items } = state.todo;
  return {
    items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

const Connected = connect(mapStateToProps, mapDispatchToProps)(Todo);
export default Connected;