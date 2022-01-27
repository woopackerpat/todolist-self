import './App.css';
import TodoList from './todolist/TodoList';
import { Routes, Route } from 'react-router-dom';
import Result from './pages/Result';

function App() {
  return (
    <Routes>
      <Route exact path = "/" element = {<TodoList/>}/>
      <Route exact path = "result" element = {<Result/>}/>
    </Routes>
  );
}

export default App;
