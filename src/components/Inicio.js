import React from "react";
import '../css/inicio.css'
import logo from "../img/logoHydroFeed.png"
import img2 from '../img/img2.png'

var Inicio = () =>{
    return(
        <div className="container-fluid">
            <div className="jumbo">
                <div className="row">
                    <div className="col-12 col-lg-4 img-cont">
                        <img className="img1 animate__animated animate__bounce" src={logo} alt="logo"/>
                    </div>
                    <div className="col-12 col-lg-8">
                        <p><strong>"HydroFeed"</strong> Combina la innovación en la alimentación ganadera con la tecnología del cultivo hidropónico. Destaca la capacidad de HydroFeed para superar los desafíos causados por la sequía y proporcionar una solución eficiente y sostenible para alimentar al ganado incluso en condiciones climáticas adversas.</p>
                        <p><strong>"HydroFeed"</strong> Nutrición Abundante en Cualquier Estación.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid row">
            <div className="col-12 col-lg-8">
                    <p className="p">En Nicaragua, la combinación de sequía prolongada y altas temperaturas, con registros que alcanzan los 36°C o 39°C, representa una problemática significativa para los ganaderos locales. Durante esta época del año, la falta de lluvia resulta en una disminución drástica de los pastizales y forraje natural, lo que conduce a una escasez de alimento para el ganado.</p>
                </div>
                <div className="col-12 col-lg-4">
                    <img src={img2} className='img2' alt='img2'/>
                </div>
                <div className="col-12">
                    <p className="p2">En este contexto, es esencial encontrar soluciones adaptadas a las condiciones de Nicaragua que permitan superar esta problemática. El cultivo de forraje hidropónico se presenta como una alternativa viable, ya que permite a los ganaderos producir alimento nutritivo en un ambiente controlado y sin depender de la disponibilidad de agua de lluvia. El forraje hidropónico puede ser cultivado en sistemas cerrados, utilizando tecnologías que optimizan el uso del agua y regulan las condiciones de temperatura, permitiendo así el suministro constante de alimento para el ganado, incluso durante la sequía y las altas temperaturas.</p>
                </div>
            </div>
        </div>
    )
}

export default Inicio;