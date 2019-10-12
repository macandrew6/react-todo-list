import React, { Component } from 'react';

export default class TodoListItem extends Component {
  render() {
    const { todo } = this.props;

    return (
      <div>
        {todo.text}
      </div>
    );
  }
}
