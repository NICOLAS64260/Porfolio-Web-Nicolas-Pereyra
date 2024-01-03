import { useState } from 'react'
import Inicio from './pages/inicio'
import Proyectos from './pages/proyectos'
import Contacto from './pages/contacto'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />}></Route>
        <Route path='/proyectos' element={<Proyectos />}></Route>
        <Route path='/contacto' element={<Contacto />}></Route>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
