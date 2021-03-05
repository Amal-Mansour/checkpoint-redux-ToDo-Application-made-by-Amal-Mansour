import React from 'react'
import { useSelector } from 'react-redux'
import TaskCards from '../TaskCards/TaskCards'
import './Tasklist.css'


const Tasklist = ({ filteredTaskList, filterStatus }) => {

    const todolist = useSelector(state => state.ToDoReducer.todolist)

    console.log(filteredTaskList)
    return (
        <div className="list-container">

            {filterStatus === "doneTasks" || filterStatus === "UnDoneTasks" ?

                filteredTaskList.map(task =>

                    <TaskCards key={task.id} task={task} />

                ) :

                todolist.map(task =>

                    <TaskCards key={task.id} task={task} />
                )
            }

        </div>

    )
}


export default Tasklist;
