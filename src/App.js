import {Link,Routes,Route} from 'react-router-dom'
import React,{useState,useEffect} from 'react';
import Trends from './components/Trends'
import Furniture from './components/Furniture'
import Decoratives from './components/Decoratives'
import Fashion from './components/Fashion'
import Electronics from './components/Electronics'
import Header from './components/Header'
import Home from './components/Home'
import Accessories from './components/Accessories'
import icon from './images/project_2.png'
import Login from './components/Login';
import './App.css'
// import ImageOne from './images/banner.jpeg'
// import 'bootstrap/dist/css/bootstrap.css';

function App() {

  return (

    <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand nav-link" to="Home">
      <img src={icon} className="Homeicon"/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className="nav-link active" to="Trends">Trends</Link>
        </li>
      <li className="nav-item">
          <Link className="nav-link active" to="Electronics">Electronics</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="Accessories">Accessories</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="fashion">Fashion</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="Decoratives">Decoratives</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="Furniture" >Furniture</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="Login" >Sign in</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


<div>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/Home" element={<Home/>}/>
  <Route path='/Trends' element={<Trends/>}/>
  <Route path="/Fashion" element={<Fashion/>}/>
  <Route path='/Decoratives' element={<Decoratives/>}/>
  <Route path='/Electronics' element={<Electronics/>}/>
  <Route path='/Accessories' element={<Accessories/>}/>
  <Route path='/Furniture' element={<Furniture/>}/>
  <Route path='/Login' element={<Login/>}/>
  </Routes>
  
  </div>   
    </div>

  );
}

export default App;
