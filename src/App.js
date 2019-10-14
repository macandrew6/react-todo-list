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

  deleteTodo() {

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

    console.log(todo);
    return (
      <div className="App">
        <TodoList todos={todos} deleteTodo={this.deleteTodo}/>
        <TodoInput 
          updateTodoInput={this.updateTodoInput} 
          todo={todo}
          addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
