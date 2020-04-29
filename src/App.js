import React, { Component } from "react";
import './App.css';
import Navbar from './navbar';
import StatTable from './Stat-Table';

class App extends Component {
  render(){
  return(
    <div className="App">
       <Navbar/>
       <StatTable/>
    </div>
   );
  }
}

export default App;
