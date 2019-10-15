import React, { Component } from 'react';

export default class TodoListItem extends Component {
  constructor() {
    super();

    this.state = {
      todoText: ''
    };
  }
  
  editTodo() {
    // do something that edits todo
    
  }

  render() {
    const { todo, deleteTodo, id } = this.props;

    return (
      <div>
        {todo.text}
        <button onClick={() => deleteTodo(id)}>Delete</button>
      </div>
    );
  }
}
