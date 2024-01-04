import React from 'react'
import Navbar from '../componentes/Navbar'
import Lenguajes from '../componentes/lenguajes'
import About from "../componentes/about"
import Div from "../componentes/div"


function Inicio() {
  return (
    <>
    <Navbar />
    <About />
    <Div />
    <Lenguajes />

    </>
  )
}

export default Inicio