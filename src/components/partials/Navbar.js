import React, { Component } from 'react';
import logo from '../../img/logoHydroFeed.png'

export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg nav1">
        <div className="container-fluid">

            <a className= " navbar-brand" href="/" >
              <img src={logo} className="logo" alt="logo" />
            </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="bi bi-border-width"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/"><i class="bi bi-house-gear-fill"></i> Inico</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/beneficios"><i class="bi bi-clipboard2-data-fill"></i> Beneficios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/proceso"><i class="bi bi-gear-fill"></i> Proceso</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Juego"><i class="bi bi-controller"></i> Juego</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/ayuda"> <i class="bi bi-info-circle-fill"></i> Ayuda</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer"><i class="bi bi-telephone-fill"></i> Contactos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}