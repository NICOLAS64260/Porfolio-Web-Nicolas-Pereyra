import React from 'react'
import "../bootstrap.min.css"
import { Link } from 'react-router-dom';
import "../index.css"
import "../App.css"
import { Projects } from "../../proyects.js";


function Proyectos() {

console.log(Projects)

  return (
    <>
        <div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      

      <ul className="nav nav-pills">
        <li className="nav-item"><Link to={"/"} className="nav-link" aria-current="page">Inicio</Link></li>
        <li className="nav-item"><Link to={"/proyectos"} className="nav-link active">Proyectos</Link></li>
        <li className="nav-item"><Link to={"/contacto"} className="nav-link">Contacto</Link></li>
      </ul>
    </header>
  </div>
<div>

    {Projects.map((elemento)=>(
    <div className="card cartita container" >
      <img src={elemento.image} className="card-img-top" alt="..."/>
      <div className="card-body">
          <h5 className="card-title">{elemento.title}</h5>
          <p className="card-text">{elemento.description}</p>
          <a href="#" className="btn btn-primary">Ver Mas</a>
      </div>
    </div>
      ))}


</div>

    </>
  )
}

export default Proyectos