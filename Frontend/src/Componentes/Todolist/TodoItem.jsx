import React from 'react';

function TodoItem({ task, onDelete }) {
  return (
    <li>
      {task}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;
