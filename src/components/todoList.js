import React from 'react';
import TodoListItem from './todoListItem';

const TodoList = ({ todos }) => {
  return (
    <div>
      {
        todos.map((todo) => {
          return (
            <TodoListItem key={todo.id} todo={todo}/>
          );
        })
      }
    </div>
  );
};

export default TodoList;