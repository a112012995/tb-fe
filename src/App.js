import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login, Home, Details, Dashboard } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/details' element={<Details />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
