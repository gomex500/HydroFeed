import React from "react";
import '../css/beneficios.css'
import fh1 from '../img/fh1.png'
import fh2 from '../img/fh2.png'
import fh3 from '../img/fh3.png'
import fh4 from '../img/fh4.png'
import fh5 from '../img/fh5.png'
import fh6 from '../img/fh6.png'
import fh7 from '../img/fh7.png'


var Beneficios = () =>{
    return(
        <div className="container-fluid">
            <center>
            <div className="container-flui row">
                <h3 className="titulo t animate__animated animate__zoomIn">Beneficios del Forraje Hidropónico</h3>
                <div className="col-12 col-lg-4">
                    <img src={fh1} className='fh1' alt='fh1'/>
                </div>
                <div className="col-12 col-lg-8 pa">
                        <p className="p"><b>Mayor disponibilidad y calidad del alimento:</b> El forraje hidropónico permite cultivar una gran cantidad de alimento en un espacio reducido y en un corto período de tiempo. Esto garantiza una disponibilidad constante de forraje fresco y nutritivo para el ganado, sin depender de factores climáticos o estacionales.</p>
                </div>
            </div>
            <div className="container-flui row">
                <div className="col-12 col-lg-4">
                    <img src={fh2} className='fh1' alt='fh1'/>
                </div>
                <div className="col-12 col-lg-8">
                        <p className="p pa"><b>Nutrición balanceada:</b>El cultivo hidropónico permite controlar y ajustar los niveles de nutrientes en el forraje, asegurando una dieta equilibrada y óptima para el ganado. Es posible ajustar los niveles de proteínas, minerales y vitaminas para satisfacer las necesidades específicas de cada especie animal y etapa de desarrollo.</p>
                </div>
            </div>
            <div className="container-flui row">
                <div className="col-12 col-lg-4">
                    <img src={fh3} className='fh1' alt='fh1'/>
                </div>
                <div className="col-12 col-lg-8">
                        <p className="p pa"><b>Ahorro de agua:</b>El sistema hidropónico utiliza menos agua en comparación con los métodos tradicionales de cultivo de forraje. El agua se recircula en el sistema, lo que reduce significativamente los requerimientos de riego y minimiza el desperdicio de agua.</p>
                </div>
            </div>
            <div className="container-flui row">
                <div className="col-12 col-lg-4">
                    <img src={fh4} className='fh1' alt='fh1'/>
                </div>
                <div className="col-12 col-lg-8">
                        <p className="p pa"><b>Menor impacto ambiental:</b>El cultivo hidropónico de forraje produce menos emisiones de gases de efecto invernadero y requiere menos terreno en comparación con los pastizales tradicionales. Además, al utilizar técnicas de cultivo sin suelo, se evita la erosión del suelo y se reducen los riesgos de contaminación por pesticidas o fertilizantes químicos.</p>
                </div>
            </div>
            <div className="container-flui row">
                <div className="col-12 col-lg-4">
                    <img src={fh5} className='fh1' alt='fh1'/>
                </div>
                <div className="col-12 col-lg-8">
                        <p className="p pa"><b>Mayor eficiencia en el uso de nutrientes:</b>El sistema hidropónico permite un uso más eficiente de los nutrientes, ya que las plantas absorben directamente los nutrientes disueltos en el agua. Esto se traduce en una mayor absorción de nutrientes por parte del ganado y una menor excreción de nutrientes no utilizados.</p>
                </div>
            </div>
            <div className="container-flui row">
                <div className="col-12 col-lg-4">
                    <img src={fh6} className='fh1' alt='fh1'/>
                </div>
                <div className="col-12 col-lg-8">
                        <p className="p pa"><b>Reducción de enfermedades y parásitos:</b>El cultivo hidropónico de forraje proporciona un ambiente controlado y libre de malezas, insectos y patógenos. Esto ayuda a reducir la propagación de enfermedades y la infestación de parásitos en el ganado, mejorando su salud y bienestar.</p>
                </div>
            </div>
            <div className="container-flui row">
                <div className="col-12 col-lg-4">
                    <img src={fh7} className='fh1' alt='fh1'/>
                </div>
                <div className="col-12 col-lg-8 pa">
                        <p className="p"><b>Mayor control y flexibilidad:</b>Con el forraje hidropónico, los ganaderos tienen un mayor control sobre la producción de alimentos para su ganado. Pueden ajustar la cantidad y calidad del forraje según las necesidades cambiantes de sus animales, lo que brinda flexibilidad y eficiencia en la alimentación.</p>
                </div>
            </div>
            </center>
        </div>
    )
}

export default Beneficios;