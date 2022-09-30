import { useState } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import Sidebar from './Components/Sidebar';

function App() {

  let data={
    earningsMonthly:"40,000",
    earningsAnnual:"215,000",
    Task:"80",
    pendingRequest:18
  }
  const [value,setValue] = useState("Hi!")
  return (
    <div id="wrapper">      
      <Sidebar/>
      <h1>{value}</h1>
      <Dashboard data={{data,setValue}}/>
    </div>
  );
}

export default App;
