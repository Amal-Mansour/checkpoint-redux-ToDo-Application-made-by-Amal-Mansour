import React, { useEffect } from 'react'
import { Button } from "react-bootstrap";
import { useSelector } from 'react-redux'



const FilterText = ({ setFilteredTaskList, filterStatus, setFilterStauts }) => {


    const todolist = useSelector(state => state.ToDoReducer.todolist)


    useEffect(() => {

        filterTask()
    });


    const filterTask = () => {

        switch (filterStatus) {

            case 'allTasks': setFilteredTaskList(todolist);
                break;
            case 'doneTasks': setFilteredTaskList(todolist.filter(task => task.isDone === true));
                break;
            case 'UnDoneTasks': setFilteredTaskList(todolist.filter(task => task.isDone === false));
                break;
            default: return todolist;
        }
    }
    

    return (
        <div className="style-btn">
            <Button variant="outline-primary" size="lg" className="button-style"
                onClick={() => setFilterStauts('allTasks')}
            >ALL TASK</Button>

            <Button variant="outline-primary" size="lg" className="button-style"
                onClick={() => setFilterStauts('doneTasks')}
            >DONE TASK</Button>

            <Button variant="outline-primary" size="lg" className="button-style"
                onClick={() => setFilterStauts('UnDoneTasks')}
            >UNDONE TASK</Button>
        </div>
    )
}

export default FilterText
