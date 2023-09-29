import Axios from 'axios';

const apiUrl = 'http://localhost:8000/api/todos/';


export const obtenerTareas = () => {
  return Axios.get(apiUrl)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const agregarTarea = (newTask) => {
  return Axios.post(apiUrl, newTask)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const actualizarTarea = (task) => {
    return Axios.put(`${apiUrl}/${task.id}`, task)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  };
  
  export const eliminarTarea = (taskId) => {
    return Axios.delete(`${apiUrl}/${taskId}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  };

