import React, { Component } from 'react';
import { TodoList } from './components/todoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ['hello', 'hello', 'hello']
    };
  }
  
  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <TodoList todos={todos}/>
      </div>
    );
  }
}

export default App;
