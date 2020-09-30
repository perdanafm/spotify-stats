import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from '../../elements/TodoItem';

export default class Todo extends React.Component {
  state = {
    text: ''
  }

  _handleAddTodos = e => {
    e.preventDefault();

    this.props.actions.addTodo(this.state.text);
    this.setState({ text: '' });
  }

  _handleRemoveTodo = todo => {
    this.props.actions.removeTodo(todo);
  }
  render() {
    const { items } = this.props;

    return (
      <div>
        <form onSubmit={this._handleAddTodos}>
          <div>
            <input
              id="input"
              onInput={e => this.setState({ text: e.target.value })}
              type="text"
              value={this.state.text}
            />
            <label htmlFor="input">
              What must be done?
            </label>
          </div>
        </form>

        <ul >
          {items.map((todo, i) => (
            <TodoItem key={i} onRemove={this._handleRemoveTodo} todo={todo} />
          ))}
        </ul>
      </div>
    );
  }
}

Todo.propTypes = {
  actions: PropTypes.object.isRequired,
  items: PropTypes.array
};

Todo.defaultProps = {
  items: []
};
