import React from "react";
import "./Tasks.css";
import { ITasks, ITask } from "../../containers/App/App";
const Tasks: React.FunctionComponent<ITasks> = (props) => {
  return (
    <div className="todoTasks">
      <ul>
        {props.tasks.map((el) => (
          <li id={el.id}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
