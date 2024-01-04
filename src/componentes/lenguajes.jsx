import React from 'react'
import "../bootstrap.min.css"
import reactimg1 from "../img/reactimg1.png"
import cssimg from "../img/cssimg.png"
import htmlimg from "../img/htmlimg.png"
import "../app.css"

function Lenguajes() {
  return (
    

    <div className="container marketing">

    <div className="row">
      <div className="col-lg-4">
        <img src={reactimg1} className="bd-placeholder-img rounded-circle " width="140" height="140" />
        {/* <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg> */}
        <h2 className="fw-normal">React</h2>
        <p>Los conocimientos que adquiri al dominar el idioma Javascript me permitieron poder aprender a programar en react</p>
        <p><a className="btn btn-secondary" href="#">Ver Mas &raquo;</a></p>
      </div>
      <div className="col-lg-4">
      <img src={htmlimg} className="bd-placeholder-img rounded-circle " width="140" height="140" />
        <h2 className="fw-normal">HTML 5</h2>
        <p>Capacitado para manejar la última versión del estándar HTML que se utiliza para crear las páginas web mas recientes</p>
        <p><a className="btn btn-secondary" href="#">Ver Mas &raquo;</a></p>
      </div>
      <div className="col-lg-4">
      <img src={cssimg} className="bd-placeholder-img rounded-circle " width="140" height="140" />
        <h2 className="fw-normal">CSS 3</h2>
        <p>la especificación más reciente del lenguaje CSS, dominando las nuevas reglas de estilo, selectores y nuevas especificaciones para ser mas eficiente</p>
        <p><a className="btn btn-secondary" href="#">Ver Mas &raquo;</a></p>
      </div>
    </div>
    </div>

  )
}

export default Lenguajes