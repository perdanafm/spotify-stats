import React from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends React.Component {
  render() {
    const { todo, onRemove } = this.props;

    return (
      <li >
        <button
          onClick={() => onRemove(todo)}
        >
          x
        </button>{' '}
        {todo.text}
      </li>
    );
  }
}

TodoItem.propTypes = {
  classes: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired
};
