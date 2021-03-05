import React, { useEffect } from 'react'
import { Button } from "react-bootstrap";
import { useSelector } from 'react-redux';
import './FiletTask.css'



const FilterTask = ({ setFilteredTaskList, filterStatus, setFilterStauts }) => {

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
            <Button variant="outline-primary" size="lg" className="filter-button"
                onClick={() => setFilterStauts('allTasks')}
            >All Task</Button>

            <Button variant="outline-primary" size="lg" className="filter-button"
                onClick={() => setFilterStauts('doneTasks')}
            >Done Task</Button>

            <Button variant="outline-primary" size="lg" className="filter-button"
                onClick={() => setFilterStauts('UnDoneTasks')}
            >Undone Task</Button>
        </div>
    )
}

export default FilterTask;
