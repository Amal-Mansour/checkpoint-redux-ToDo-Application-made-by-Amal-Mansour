import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { addText } from '../../Redux/Action/Action'
import './InputTask.css'

const InputTask = () => {

    const [InputTitle, setInputTitle] = useState("");
    const dispatch = useDispatch()

    return (
        <div className="add__container">
            <Form.Control type="text" placeholder="Enter task title ..."
                onChange={(e) => setInputTitle(e.target.value)}
                value={InputTitle}/>
                
            <Button variant="danger" className="add-button"
                onClick={() => { dispatch(addText({ id: Math.random(), title: InputTitle, isDone: false })); setInputTitle("") }}
            >Add Task</Button>
        </div>
    )
}

export default InputTask
