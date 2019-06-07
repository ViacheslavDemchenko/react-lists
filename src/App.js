import React from 'react';
import './App.css';
import FruitsListFirst from './components/FruitsListFirst/FruitsListFirst';
import FruitsListSecond from './components/FruitsListSecond/FruitsListSecond';
import UserList from './components/UserList/UserList';
import CapsuleTable from './components/CapsulesList/CapsulesTable';


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
