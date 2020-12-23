import React,{useState} from 'react';
import './App.css';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import Tasks from '../../components/Tasks/Tasks';

const App = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const addTask = (newTask: string) => {
    setTasks(old => [...old, newTask]);
  } 
  return (
    <div className="todoListMain">
     <Header />
     <Input addTask = {(newTask)=> addTask(newTask)} />
     <Tasks tasks= {tasks}  />
    </div>
  );
}

export default App;
