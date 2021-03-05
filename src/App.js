import React, { useState } from 'react'

import InputTask from './Components/InputTask/InputTask'
import Tasklist from './Components/Tasklist/Tasklist'
import FilterTask from './Components/FilterTask/FilterTask'
import './App.css';


function App() {

  const [filteredTaskList, setFilteredTaskList] = useState([]);
  const [filterStatus, setFilterStauts] = useState("");


  return (
    <div className="App">
      <InputTask />

      <FilterTask
        setFilteredTaskList={setFilteredTaskList}
        filterStatus={filterStatus}
        setFilterStauts={setFilterStauts}

      />
      <Tasklist filteredTaskList={filteredTaskList} filterStatus={filterStatus} />
    </div>
  );
}

export default App;
