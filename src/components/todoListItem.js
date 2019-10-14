import React, { Component } from 'react';

export default class TodoListItem extends Component {
  render() {
    const { todo, deleteTodo } = this.props;

    return (
      <div>
        {todo.text}
        <button onClick={e => deleteTodo(e)}></button>
      </div>
    );
  }
}
