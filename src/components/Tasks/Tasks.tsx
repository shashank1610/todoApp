import React from 'react';
import './Tasks.css';

interface Tasks {
    tasks: string[]
}
const Tasks: React.FunctionComponent<Tasks> = (props) => {
    return (
        <div className ="todoTasks">
            <ul>
                {
                    props.tasks.map(el => <li>{el}</li>)
                }
            </ul>

        </div>
    )
}

export default Tasks;