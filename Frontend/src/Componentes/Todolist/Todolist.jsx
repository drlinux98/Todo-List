import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './styles.css'

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
          {/*Dentro del container puse las funcionalidades del TodoList*/} 
  return (
  
    <div>
      
     
      
      <div>
        <div className='container' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FAEDCB' }}>
        
        <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Añade una nueva tarea"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Añadir</button>
      <ul>
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} onDelete={() => deleteTask(index)} />
        ))}
      </ul>



        </div>
        
        
        
        
        
        
        
        
        </div>    

    </div>
    
  );
}

export default TodoList;
