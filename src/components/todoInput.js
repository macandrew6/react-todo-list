import React from 'react';

const TodoInput = ({updateTodoInput, todo, addTodo}) => {
  // state of todo should live here
  return (
    <div className="todo-input-container">
      <form onSubmit={(e) => addTodo(e)}>
        <input 
          onChange={updateTodoInput} 
          type="text" 
          value={todo.text}
          placeholder="...type todo here"/>
        <button type="submit">Submit Todo</button>
      </form>
    </div>
  );
};

export default TodoInput;