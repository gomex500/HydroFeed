import React from "react";
import '../css/inicio.css'
import logo from "../img/logoHydroFeed.png"

var Inicio = () =>{
    return(
        <div className="container-fluid">
            <div className="jumbo">
                <div className="row">
                    <div className="col-12 col-lg-4 img-cont">
                        <img className="img1" src={logo} alt="logo"/>
                    </div>
                    <div className="col-12 col-lg-8">
                        <p><strong>"HydroFeed"</strong> combina la innovación en la alimentación ganadera con la tecnología del cultivo hidropónico. Destaca la capacidad de HydroFeed para superar los desafíos causados por la sequía y proporcionar una solución eficiente y sostenible para alimentar al ganado incluso en condiciones climáticas adversas.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid row">
                <div className="col">
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default Inicio;