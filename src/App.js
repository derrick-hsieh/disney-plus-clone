
import './App.css';
import Header from './components/Header';
import styled from 'styled-components';
import Home from './components/Home';
import React,  {Fragment} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom"
import Detail from './components/Detail';
import Login from './components/Login';

function App(props) {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route  exact path="/login" element ={  <Login/>}/>
          <Route  exact path="/detail/:id/:title/:path" element ={ <Detail/>}/>
          <Route  exact path="/" element ={  <Home/>}/>
        </Routes>
      </Router>
     
    
 
    </div>
  );
}

export default App;
