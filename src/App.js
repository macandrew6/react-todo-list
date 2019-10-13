import React, { Component } from 'react';
import TodoList from './components/todoList';
import TodoInput from './components/todoInput';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: {},
      todos: [
        {text: 'take out garbage', id: Math.PI * Math.random()}, 
        {text: 'do laundry', id: Math.PI * Math.random()}, 
        {text: 'fix laptop', id: Math.PI * Math.random()}, 
      ]
    };

    this.updateTodoInput = this.updateTodoInput.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  componentDidMount() {
    const todos = localStorage.getItem('todos');
    const savedTodos = JSON.parse(todos);
    
    this.setState({
      todos: savedTodos
    });
  }

  updateTodoInput(e) {
    let todo = Object.assign({},this.state.todo);
    todo.text = e.target.value;
    todo.id = Math.PI * Math.random();

    this.setState({
      todo
    });
  }

  async addTodo(e) {
    e.preventDefault();
    let todos = [...this.state.todos, this.state.todo];

    await this.setState({
      todo: {},
      todos
    });
    
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  
  render() {
    const { todos, todo } = this.state;
    console.log(todo);
    return (
      <div className="App">
        <TodoList todos={todos}/>
        <TodoInput 
          updateTodoInput={this.updateTodoInput} 
          todo={todo}
          addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
