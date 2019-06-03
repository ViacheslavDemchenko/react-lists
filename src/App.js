import React from 'react';
import './App.css';
import './components/first-list.css';
import './components/second-list.css';
import './components/capsules-table.css';
import FruitsListFirst from './components/FruitsListFirst';
import FruitsListSecond from './components/FruitsListSecond';
import UserList from './components/UserList';
import CapsuleTable from './components/CapsulesTable';


function App() {
  return (
    <div className="container-fluid">
      <div className="container">
        <FruitsListFirst />
        <FruitsListSecond />
        <UserList />
        <CapsuleTable />
      </div>
    </div>
  )
}

export default App;
