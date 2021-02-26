import React from 'react'
import { Button } from 'react-bootstrap'
import { completText, deleteText } from '../Redux/Action/Action'
import { useDispatch } from 'react-redux'
import EditText from './EditText'


const TaskCards = ({ task }) => {

    const dispatch = useDispatch()

    return (
        <div className='list-task'>
            <span style={task.isDone ? { textDecoration: "line-through" } : null}>{task.title}</span>

            <EditText task={task} />

            <Button variant="outline-primary" size="lg" className="button-style"
                onClick={() => dispatch(deleteText(task.id))}
            >DELETE TASK</Button>

            <Button variant="outline-primary" size="lg" className="button-style"
                onClick={() => dispatch(completText(task.id))}
            >{task.isDone ? "UNDONE" : "DONE TASK"}</Button>
        </div>
    )
}

export default TaskCards
