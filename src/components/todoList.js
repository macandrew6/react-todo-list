import React from 'react';
import TodoListItem from './todoListItem';

const TodoList = ({ todos, deleteTodo, editTodo }) => {
  return (
    <div className="todo-list">
      {
        todos.map((todo) => {
          return (
            <TodoListItem 
              key={todo.id}
              id={todo.id} 
              todo={todo} 
              deleteTodo={deleteTodo}
              editTodo={editTodo}/>
          );
        })
      }
    </div>
  );
};

export default TodoList;