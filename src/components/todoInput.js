import React from 'react';

const TodoInput = () => {
  return (
    <div>
      <form >
        <input type="text" placeholder="...type todo here"/>
        <button type="submit">Submit Todo</button>
      </form>
    </div>
  );
};

export default TodoInput;