import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Home from './pages/Home'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />

      <Routes>
<Route path="/" element={<Home />} />
<Route path="contact" element={<Contact />} />


      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App