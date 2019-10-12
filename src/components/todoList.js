import React from 'react';
import { TodoListItem } from './todoListItem';

const TodoList = ({todos}) => {
  return (
    <div>
      {
        todos.map((todo) => {
          return (
            <TodoListItem todo={todo}/>
          );
        })
      }
    </div>
  );
};

export default TodoList;