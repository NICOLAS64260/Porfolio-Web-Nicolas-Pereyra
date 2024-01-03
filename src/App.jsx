import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import inicio from './pages/inicio'
import proyectos from './pages/proyectos'
import contacto from './pages/contacto'
import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter>

          <Routes>
            <Route path='/' exact element={ <inicio />}/>
            <Route path='/proyectos' element={ <proyectos />}/>
            <Route path='/contacto' element={ <contacto />}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
