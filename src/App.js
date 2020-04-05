import React, { useEffect, Fragment } from 'react';
import SearchBar from './components/Navbar/Search'
import Logs from './components/Logs/Logs'
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import './App.css';
const App = () => {
  useEffect(()=>{
  	M.AutoInit()
  },[])
  return (
    <Fragment >
      <SearchBar/>
      <div className="container">
      	<Logs/>
      </div>
    </Fragment>
  );
}

export default App;
