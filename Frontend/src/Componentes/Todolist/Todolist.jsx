import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import './styles.css'
import { obtenerTareas, agregarTarea } from '../../api/api';
export default TodoList;



function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    obtenerTareas()
      .then((data) => {
        setTasks(data);
      })
      .catch((error) => {
        console.error('Error al obtener las tareas:', error);
      });
  }, []);






  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const nuevaTarea = {
    texto: newTask,
    completada: false,
  };

 // Realiza la solicitud para agregar la nueva tarea
 agregarTarea(nuevaTarea)
 .then((data) => {
   // Agrega la nueva tarea a la lista de tareas existente
   setTasks([...tasks, data]);






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
 
 
  },
 ) }   