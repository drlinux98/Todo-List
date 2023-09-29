import logo from './logo.svg';
import './App.css';
import LoginSignUp from './Componentes/LoginSignUp/LoginSignUp';
import Todolist from './Componentes/Todolist/Todolist';
import axios from "axios";

function App() {
  return (
    <div>
      <LoginSignUp/>
      <Todolist/>
    </div>
    
  );
}


export default App;