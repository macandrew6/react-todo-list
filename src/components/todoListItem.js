import React, { Component } from 'react';

export default class TodoListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoText: this.props.todo.text,
      id: this.props.todo.id
    };
  }
  
  handleEditInputChange(e) {
    let value = e.target.value;
    this.setState({
      todoText: value
    });
  }

  handleSubmitEdit(e) {
    e.preventDefault();
    this.props.editTodo(this.state.todoText, this.state.id);
  }

  editTodo() {
    return (
      <form 
        className="edit-todo-form"
        onSubmit={e => this.handleSubmitEdit(e)}>
        <input 
          type="text" 
          value={this.state.todoText}
          onChange={e => this.handleEditInputChange(e)}/>
        <button type="submit">Edit</button>
      </form>
    );
  }

  render() {
    const { deleteTodo, id } = this.props;

    return (
      <div className="todo-item">
        <div>{this.editTodo()}</div>
        <button onClick={() => deleteTodo(id)}>Delete</button>
      </div>
    );
  }
}
