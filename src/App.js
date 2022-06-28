
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
  Link,
  useLocation
} from "react-router-dom"
import Detail from './components/Detail';
import Login from './components/Login';
import Navbar from './components/Navbar';
import PlayModal from './components/modal/playModal';


function App() {
  const location = useLocation();
const background = location.state && location.state.background
  return (
    <div className="App">
 
        {/* <Navbar/> */}
        <Header/>
        <Routes location = {background || location}>
          <Route   path="/login" element ={  <Login/>}/>
          <Route   path="/detail/:id/:title/:path" element ={ <Detail/>}>
            <Route path="/detail/:id/:title/:path/modal" element={<PlayModal/>} />
          </Route>
          <Route   path="/" element ={  <Home/>}/>
        </Routes>
        {background && (
            <Routes>
              <Route path="/detail/:id/:title/:path/modal" element={<PlayModal/>} />
            </Routes>
        )}
      

     
    
 
    </div>
  );
}

export default App;
