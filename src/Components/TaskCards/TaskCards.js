import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { completText, deleteText } from '../../Redux/Action/Action';
import EditTask from '../EditTask/EditTask';
import './TaskCard.css'

const TaskCards = ({ task }) => {

    const dispatch = useDispatch()

    return (
        <div className='list-task'>
            <span style={task.isDone ? { textDecoration: "line-through", color: "#c02424" } : null}>{task.title}</span>
            <div className="btn-contaier">
                <EditTask task={task} />

                <Button variant="danger" className="button-style"
                    onClick={() => dispatch(deleteText(task.id))}
                >DELETE</Button>

                <Button variant="success" className="button-style"
                    onClick={() => dispatch(completText(task.id))}
                >{task.isDone ? "UNDONE" : "DONE"}</Button>
            </div>
        </div>
    )
}

export default TaskCards;
