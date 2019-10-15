import React, { Component } from 'react';

export default class TodoListItem extends Component {
  constructor() {
    super();

    this.state = {
      todoText: ''
    };
  }
  
  handleEditInput(e) {
    let value = e.target.value;
    this.setState({
      todoText: value
    });
  }

  handleSubmitEdit(e) {
    e.preventDefault();
  }

  editTodo() {
    // do something that edits todo
    console.log('im here baby', this.props.todo.text);
    return (
      <form onSubmit={e => this.handleSubmitEdit(e)}>
        <input 
          type="text" 
          value={this.props.todo.text}
          onChange={e => this.handleEditInput(e)}/>
        <button type="submit">Edit</button>
      </form>
    );
  }

  render() {
    const { todo, deleteTodo, id } = this.props;

    return (
      <div>
        <div onClick={() => this.editTodo()}>{todo.text}</div>
        <button onClick={() => deleteTodo(id)}>Delete</button>
      </div>
    );
  }
}
