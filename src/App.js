import React, { Component } from 'react';
import TodoList from './components/todoList';
import TodoInput from './components/todoInput';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {text: 'take out garbage', id: Math.PI * Math.random()}, 
        {text: 'do laundry', id: Math.PI * Math.random()}, 
        {text: 'fix laptop', id: Math.PI * Math.random()}, 
      ]
    };
  }
  
  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <TodoList todos={todos}/>
        <TodoInput />
      </div>
    );
  }
}

export default App;
