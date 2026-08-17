import React from 'react'
import { useParams, Link } from 'react-router-dom'
import tasks from '../data/tasks'

const TaskDetails = () => {
    const { id } = useParams()
    const task = tasks.find((task) => task.id === Number(id))
    return (
        <div>
            <h1>Task Details</h1>
            <p>Task details will appear here.</p>
            {task ? (
                <div>
                    <p>Task id: {task.id}</p>
                    <h3>{task.title}</h3>
                    <p>Priority: {task.priority}</p>
                    <p>Status: {task.status}</p>
                </div>
            ) : (
                <div>
                    <p>Task not found.</p>
                    <Link to="/tasks">Back to Tasks</Link>
                </div>
            )}
        </div >
    )
}

export default TaskDetails