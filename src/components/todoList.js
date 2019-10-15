import React from 'react';
import TodoListItem from './todoListItem';

const TodoList = ({ todos, deleteTodo, updateTodoInput }) => {
  return (
    <div>
      {
        todos.map((todo) => {
          return (
            <TodoListItem 
              key={todo.id}
              id={todo.id} 
              todo={todo} 
              updateTodoInput={updateTodoInput}
              deleteTodo={deleteTodo}/>
          );
        })
      }
    </div>
  );
};

export default TodoList;