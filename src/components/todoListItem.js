import React, { Component } from 'react';

export default class TodoListItem extends Component {
  constructor() {
    super();

    this.state = {
      todoText: ''
    };
  }
  
  editTodo(e) {
    // do something that edits todo
    this.setState({
      todoText: e.target.value
    });
  }

  render() {
    const { todo, deleteTodo, id } = this.props;

    return (
      <div>
        <div onClick={(e) => this.editTodo(e)}>{this.state.todoText ? this.state.todoText : todo.text}</div>
        <button onClick={() => deleteTodo(id)}>Delete</button>
      </div>
    );
  }
}
