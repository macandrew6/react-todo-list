import React, { Component } from 'react';
import TodoList from './components/todoList';
import TodoInput from './components/todoInput';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: {text: '', id: performance.now()},
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
    console.log(text, id);
    // bug lies here
    todos.forEach(todo => {
      if (todo.id === id) {
        todo.text = text;
      }
    });

    this.setState({
      todos: todos
    }, localStorage.setItem('todos', JSON.stringify(todos)));
  }

  updateTodoInput(e) {
    let todo = Object.assign({},this.state.todo);
    todo.text = e.target.value;
    todo.id = performance.now();

    this.setState({
      todo
    });
  }

  addTodo(e) {
    e.preventDefault();
    let todos = [...this.state.todos, this.state.todo];

    this.setState({
      todo: {text: ''},
      todos
    }, localStorage.setItem('todos', JSON.stringify(todos)));
  }
  
  render() {
    const { todos, todo } = this.state;

    console.log(todos);
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
