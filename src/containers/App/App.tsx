import React, { useState, useReducer } from "react";
import "./App.css";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import Tasks from "../../components/Tasks/Tasks";
import Reducer from "../Reducer";
import { uuid } from "uuidv4";

export interface ITask {
  id: string;
  name: string;
}
export interface ITasks {
  tasks: ITask[];
}

const App = () => {
  const initialTaskState: ITasks = {
    tasks: [],
  };
  const [state, dispatch] = useReducer(Reducer, initialTaskState);
  const addTask = (newTask: string) => {
    return dispatch({ type: "create", data: { id: uuid(), name: newTask } });
  };
  return (
    <div className="todoListMain">
      <Header />
      <Input addTask={(newTask) => addTask(newTask)} />
      <Tasks tasks={state.tasks} />
    </div>
  );
};

export default App;
