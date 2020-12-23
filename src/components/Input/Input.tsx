import React,{useState} from 'react';
import './Input.css';

interface taskProps {
  addTask: (newTask:string) => void,
}

const Input: React.FunctionComponent<taskProps> = (props) => {
   const [newTask, setNewTask] = useState('');
   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
   }

   const handleAddClick  = (newTask: string) => {
    props.addTask(newTask);
    setNewTask('');
   }
   return (
    <div className="todoAdd">
      <input id ="myid" type="text" placeholder= "Enter new Task" onChange = {handleInputChange} value={newTask}  className="todoInput"></input>
      <button onClick = {() => handleAddClick(newTask)}>Add</button>
      </div>
  );
}

export default Input;
