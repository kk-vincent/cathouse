import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import Menu from './page/Menu'
import About from './page/About'
import Login from './page/Login'
import Register from './page/Register'
import './style/var.css'
import './App.scss'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<Menu />} />
          <Route path='/Menu' element={<About />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;