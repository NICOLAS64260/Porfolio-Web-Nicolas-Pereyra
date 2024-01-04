import React from 'react'
import "../bootstrap.min.css"

function Info() {
  return (
    <div class="card text-center">
  <div class="card-header">
    Me presento
  </div>
  <div class="card-body">
    <h5 class="card-title">Que tal? Mucho gusto tenerte aqui</h5>
    <p class="card-text">Mi nombre es Nicolas Pereyra, soy un programador back-end recientemente recibido. Actualmente me encuentro en la busquedas de empleos en donde pueda demostrar los amplios conocimientos adquiridos en todo mi tiempo de estudio. Tengo la certeza de que respondere positivamente a cualquier posibilidad que se me brinde</p>
    <a href="#" class="btn btn-primary">Mi curriculum</a>
  </div>
  <div class="card-footer text-body-secondary">
    Ultima coneccion hace 2 dias
  </div>
</div>
  )
}

export default Info
