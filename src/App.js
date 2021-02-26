import React, { useState } from 'react'

import InputText from './Components/InputText'
import Tasklist from './Components/Tasklist'
import FilterText from './Components/FilterText'
import './App.css';


function App() {

  const [filteredTaskList, setFilteredTaskList] = useState([]);
  const [filterStatus, setFilterStauts] = useState("");


  return (
    <div className="App">
      <InputText />

      <FilterText
        setFilteredTaskList={setFilteredTaskList}
        filterStatus={filterStatus}
        setFilterStauts={setFilterStauts}

      />
      <Tasklist filteredTaskList={filteredTaskList} filterStatus={filterStatus} />
    </div>
  );
}

export default App;
