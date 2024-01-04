import React from "react";
import profile from "../img/profile.jpg"
import "../bootstrap.min.css"

import "../index.css"

export default function About() {
  return (
    <section className="sectionHero  ">
    <div className="containerHero container d-flex  p-4">

        <div className="heroContainerBiografia col-9 text-start justify-content-center">
            <h2 className="heroTitulo bg-gray-900">Hola, Soy Nicolás Pereyra - Desarrollador web</h2>
            <h3 className="heroSubTitulo">UTN de rosario y en la Universidad Nacional de Tres de Febrero <br/>
        </h3>
        <ul className=" heroRedes row justify-content-center text-center">
                <li className="heroRedesItem col-2"><a href="https://github.com/NICOLAS64260"><button type="button" class="btn btn-success">GITHUB</button> <i
                            className="fa-brands fa-github "></i> </a></li>
                <li className="heroRedesItem col-2"><a href="https://www.linkedin.com/in/nicolas-pereyra-7a3aa7283/"><button type="button" class="btn btn-success">LINKEDIN</button>
                        <i className="fa-brands fa-linkedin"></i></a></li>
                <li className="heroRedesItem col-2"><a href="https://www.instagram.com/"><button type="button" class="btn btn-success">INSTAGRAM</button> <i
                            className="fa-brands fa-instagram "></i></a></li>
                </ul>
        </div>
        <img className="heroProfile rounded-circle" src={profile} width="280" height="280" />

    </div>
</section>
  );
}

{/* <button type="button" class="btn btn-primary">Primary</button> */}