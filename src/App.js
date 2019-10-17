import React, { Component } from 'react';
import TodoList from './components/todoList';
import TodoInput from './components/todoInput';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: {text: '', id: performance.now(), completed: false},
      todos: []
    };

    this.updateTodoInput = this.updateTodoInput.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }

  componentDidMount() {
    const todos = localStorage.getItem('todos');
    if (todos) {
      const savedTodos = JSON.parse(todos);
      this.setState({
        todos: savedTodos
      });
    } else {
      console.log('no todos');
    }
  }

  deleteTodo(id) {
    const todos = JSON.parse(JSON.stringify(this.state.todos));
    const updatedTodos = todos.filter(todo => todo.id !== id);

    this.setState({
      todos: updatedTodos
    }, localStorage.setItem('todos', JSON.stringify(updatedTodos)));
  }

  editTodo(text, id) {
    const todos = JSON.parse(JSON.stringify(this.state.todos));

    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.text = text;
      } 
      return todo;
    });

    this.setState({
      todos: updatedTodos
    }, localStorage.setItem('todos', JSON.stringify(updatedTodos)));  
  }

  updateTodoInput(e) {
    let todo = Object.assign({},this.state.todo);
    todo.text = e.target.value;
    todo.id = performance.now();
    todo.completed = false;

    this.setState({
      todo
    });
  }

  addTodo(e) {
    e.preventDefault();
    let updatedTodos = [...this.state.todos, this.state.todo];

    this.setState({
      todo: {text: ''},
      todos: updatedTodos
    }, localStorage.setItem('todos', JSON.stringify(updatedTodos)));
  }
  
  render() {
    const { todos, todo } = this.state;

    return (
      <div className="App">
        <TodoList 
          todos={todos} 
          deleteTodo={this.deleteTodo}
          editTodo={this.editTodo}/>

        <TodoInput 
          updateTodoInput={this.updateTodoInput} 
          todo={todo}
          addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
