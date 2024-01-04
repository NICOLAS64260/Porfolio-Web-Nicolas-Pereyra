import React from 'react'
import { Link } from 'react-router-dom';
import "../bootstrap.min.css"

export default function Navbar() {
    return (
<div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      

      <ul className="nav nav-pills">
        <li className="nav-item"><Link to={"/"} className="nav-link active" aria-current="page">Inicio</Link></li>
        <li className="nav-item"><Link to={"/proyectos"} className="nav-link">Proyectos</Link></li>
        <li className="nav-item"><Link to={"/contacto"} className="nav-link">Contacto</Link></li>
      </ul>
    </header>
  </div>
    );
  }