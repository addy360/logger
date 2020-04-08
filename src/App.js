import React, { useEffect, Fragment } from 'react';

import SearchBar from './components/Navbar/Search'
import Logs from './components/Logs/Logs'
import Fab from './components/Fab/Fab'
import AddModal from './components/AddModal/AddModal'
import EditModal from './components/EditModal/EditModal'
import TechAddModal from './components/Tech/AddModal/AddModal'
import TechListModal from './components/Tech/TechList/TechList'

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
            <Fab/>
            <AddModal/>
            <EditModal/>
            <TechAddModal/>
            <TechListModal/>
          </div>
      </Fragment>
  );
}


export default App;
