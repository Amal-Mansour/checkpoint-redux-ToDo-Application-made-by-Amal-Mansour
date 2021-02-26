import React,{useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { addText} from '../Redux/Action/Action'
import {useDispatch} from 'react-redux'


function InputText() {

   const [inputTitle, setInputTitle] = useState("")
   const dispatch = useDispatch()
    return (
        <div className='add__container'>
            <Form >
                <Form.Group controlId="exampleForm.ControlInput1">

                    <Form.Control 
                    style={{ width: "250%" }} 
                    type="text" placeholder="Enter Todo hier"
                    onChange= {e => setInputTitle(e.target.value)} 
                    value={inputTitle}
                    />
                </Form.Group>
            </Form>
            <Button onClick={() => 
            { dispatch(addText({id : Math.random(), title: inputTitle, isDone:false}))
            ;setInputTitle ("") 
            }
              }


            
            >ADD_TODO</Button>
        </div>
    );
}


export default InputText;
