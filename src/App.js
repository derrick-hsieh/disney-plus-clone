
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
import MovieList from './components/MovieList';
import Search from './components/Search';


function App() {
  const location = useLocation();
// const background = location.state && location.state.background
  return (
    <div className="App">
        <Header/>
        <Routes location = { location}>
          <Route   path="/login" element ={  <Login/>}/>
          <Route   path="/detail/:id" element ={ <Detail/>}>
            <Route path="/detail/:id/modal" element={<PlayModal/>} />
          </Route>
          <Route path="/movielist" element = {<MovieList/>} />
          <Route   path="/" element ={  <Home/>}/>
          <Route   path="/search" element ={  <Search/>}/>
        </Routes>
        {/* {background && (
            <Routes>
              <Route path="/detail/:id/modal" element={<PlayModal/>} />
            </Routes>
        )} */}
      

     
    
 
    </div>
  );
}

export default App;
