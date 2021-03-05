import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editText } from '../../Redux/Action/Action';
import './EditTask.css';


const EditTask = ({ task }) => {

    const [show, setShow] = useState(false);
    const [newText, setNewtext] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    const dispatch = useDispatch()

    return (

        <div>
            <Button variant="outline-primary" className="button-style"
                onClick={handleShow}>
                EDIT </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Task</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter the new task title..."
                            onChange={(e) => setNewtext(e.target.value)}
                            value={newText} />
                    </Form.Group>
                </Modal.Body>


                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>CLOSE</Button>
                    <Button variant="primary"
                        onClick={() => {
                            dispatch(editText(task.id, newText))
                            handleClose()
                        }}>
                        EDIT TASK</Button>

                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default EditTask
