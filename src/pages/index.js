import React from 'react';
import Todo from './todo';

export default class Index extends React.Component {
  render() {
    return (
      <div className="app">
        <Todo />
      </div>
    );
  }
}
