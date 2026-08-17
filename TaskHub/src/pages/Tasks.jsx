import React from 'react'
import { Link } from 'react-router-dom';
import tasks from '../data/tasks';


const Tasks = () => {
    return (
        <div>
            <h1>Tasks Page</h1>
            <p>Your tasks will appear here.</p>

            {tasks.map((task) => (
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <p>Priority: {task.priority}</p>
                    <p>Status: {task.status}</p>
                    <Link to={`/tasks/${task.id}`}>
                        View Details
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Tasks