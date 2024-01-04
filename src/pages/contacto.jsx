import React from 'react'
import "../bootstrap.min.css"
import "../index.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'


function Contacto() {

  const URL = "../../datos.json"
  const [datos, setdatos] = useState([])
  const notify = () => toast.success('Datos enviados. Ansio trabajar juntos', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

  useEffect(() => {
    fetch(URL)
    .then(response => response.json() )

    .then(data => setdatos(data))

  },[])

  // console.log(datos.map(elemento=>{
  //   return(<option key={elemento.pais} value={elemento.pais}>{elemento.pais}</option>)
  // }))



  return (
    <>
        <div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      

      <ul className="nav nav-pills">
        <li className="nav-item"><Link to={"/"} className="nav-link" aria-current="page">Inicio</Link></li>
        <li className="nav-item"><Link to={"/proyectos"} className="nav-link">Proyectos</Link></li>
        <li className="nav-item"><Link to={"/contacto"} className="nav-link active">Contacto</Link></li>
      </ul>
    </header>
  </div>


    <div >
  <form>
  <div className="form-row">
    <div className="form-group col-md-6 center">
      <label htmlFor="inputEmail4">Email</label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
    <div className="form-group col-md-6 center">
      <label htmlFor="inputPassword4">Nombre/Empresa</label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Nombre/Empresa"/>
    </div>
  </div>
  <div className="form-group col-md-6 center">
    <label htmlFor="inputAddress">Direccion</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="123 Lavalle"/>
  </div>


  <div className="form-row center">
    <div className="form-group col-md-6 center">
      <label htmlFor="inputCity">Ciudad</label>
      <input type="text" className="form-control" id="inputCity"/>
    </div>


    <div className="form-group col-md-4 center">
      <label htmlFor="inputState">Pais</label>
      <select id="inputState" className="form-control">
      <option value="">Selecciona ubicacion</option>
      {
      datos.map(elemento=>{
        return(<option key={elemento.Pais}>{elemento.Pais}</option>)
      })
      }
      </select>
    </div>
    
  </div>



</form>
</div>
<div>
  <button className="btn btn-primary pad1" onClick={notify}>ENVIAR</button>
  <ToastContainer />
</div>
    </>
  )
}

export default Contacto