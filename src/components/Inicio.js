import React from "react";
import '../css/inicio.css'
import logo from "../img/logoHydroFeed.png"
import img2 from '../img/img2.png'
import img1 from '../img/img1.png'
import humus from '../img/humus.png'

var Inicio = () =>{
    return(
        <div className="container-fluid">
            <div className="jumbo">
                <div className="row">
                    <div className="col-12 col-lg-4 img-cont">
                        <img className="img1 animate__animated animate__bounce" src={logo} alt="logo"/>
                    </div>
                    <div className="col-12 col-lg-8">
                        <p><strong>"HydroFeed"</strong> La vanguardia en la alimentación ganadera con forraje hidropónico, humus de lombriz y bloques nutricionales. Supera la escasez de alimentos, brinda nutrición de calidad y cuida del medio ambiente. ¡Alimenta a tu ganado de manera innovadora y sostenible con HydroFeed!"</p>
                        <p><strong>"HydroFeed"</strong> Nutrición Abundante en Cualquier Estación del Año.</p>
                    </div>
                </div>
            </div>
            <center>
                <div className="container-fluid row">
                    <h3 className="titulo">Problematica</h3>
                    <div className="col-12 col-lg-8">
                        <p className="p">En Nicaragua, la combinación de sequía prolongada y altas temperaturas, con registros que alcanzan los 36°C o 39°C, representa una problemática significativa para los ganaderos locales. Durante esta época del año, la falta de lluvia resulta en una disminución drástica de los pastizales y forraje natural, lo que conduce a una escasez de alimento para el ganado.</p>
                    </div>
                    <div className="col-12 col-lg-4">
                        <img src={img2} className='img2' alt='img2'/>
                    </div>
                    <div className="col-12">
                        <p className="p">En este contexto, es esencial encontrar soluciones adaptadas a las condiciones de Nicaragua que permitan superar esta problemática. El cultivo de forraje hidropónico se presenta como una alternativa viable, ya que permite a los ganaderos producir alimento nutritivo en un ambiente controlado y sin depender de la disponibilidad de agua de lluvia. El forraje hidropónico puede ser cultivado en sistemas cerrados, utilizando tecnologías que optimizan el uso del agua y regulan las condiciones de temperatura, permitiendo así el suministro constante de alimento para el ganado, incluso durante la sequía y las altas temperaturas.</p>
                    </div>
                </div>
                <div className="container-fluid row">
                    <h3 className="titulo">Forraje Hidropónico</h3>
                    <div className="col-12 col-lg-4">
                        <img src={img1} className='img3' alt='img3'/>
                    </div>
                    <div className="col-12 col-lg-8">
                        <p className="p">El forraje hidropónico (F.H) es un sistema de cultivos utilizado para producir alimentos a partir de una solución acuosa y nutritiva. Es decir, no se utiliza un sustrato de tierra para la siembra de granos y leguminosas. Usualmente es un modelo de producción para alimentar bovinos, ovinos y caprinos pues son cultivos de producción rápida y que se puede masificar.</p>
                    </div>
                </div>
                <div className="container-fluid row">
                    <h3 className="titulo">Características destacadas del forraje hidropónico</h3>
                    <div className="col-12">
                        <ul>
                            <li className="li">
                                <b>Crecimiento rápido:</b> El forraje hidropónico permite un crecimiento acelerado de las plantas, lo que significa que se puede obtener alimento fresco en poco tiempo, generalmente entre 7 y 10 días desde la siembra.
                            </li>
                            <li className="li">
                                <b>Alta densidad de nutrientes:</b> El cultivo hidropónico permite maximizar la concentración de nutrientes en el forraje. Esto se logra proporcionando una solución nutritiva adecuada que contiene todos los elementos esenciales para el crecimiento de las plantas.
                            </li>
                            <li className="li">
                                <b>Uso eficiente del agua: </b>El sistema hidropónico utiliza una cantidad significativamente menor de agua en comparación con los métodos tradicionales de cultivo de forraje. El agua se recircula en el sistema, lo que reduce la necesidad de riego y minimiza el desperdicio.
                            </li>
                            <li className="li">
                                <b>Control de condiciones ambientales: </b>Al cultivar forraje hidropónico en invernaderos o estructuras controladas, se puede gestionar y optimizar las condiciones ambientales, como la temperatura, la humedad y la iluminación. Esto ayuda a maximizar el crecimiento de las plantas y obtener un producto de calidad constante.
                            </li>
                            <li className="li">
                                <b>Producción durante todo el año:  </b>Con el cultivo hidropónico, es posible cultivar forraje fresco durante todo el año, independientemente de las estaciones o condiciones climáticas. Esto garantiza un suministro constante de alimento verde para el ganado, incluso en regiones con estacionalidad pronunciada.
                            </li>
                            <li className="li">
                                <b>Menor dependencia de la tierra: </b>El forraje hidropónico no requiere grandes extensiones de tierra para su cultivo. Puede ser cultivado en estantes o bandejas apilables, lo que lo hace especialmente adecuado para áreas con escasez de terreno agrícola.
                            </li>
                            <li className="li">
                                <b>Control de calidad y seguridad alimentaria: </b>Al tener el control total del entorno de cultivo, se puede garantizar la calidad y la seguridad del forraje hidropónico. Se pueden evitar el uso de pesticidas y herbicidas, y se reduce el riesgo de contaminación por patógenos.
                            </li>
                            <li className="li">
                                <b>Versatilidad de los cultivos: </b>El forraje hidropónico es adecuado para una amplia variedad de cultivos, como trigo, cebada, avena, maíz, alfalfa y varias hierbas. Esto permite adaptar la elección de cultivos a las necesidades específicas del ganado y la región.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container-fluid row">
                    <h3 className="titulo">Humus de Lombriz</h3>
                    <div className="col-12 col-lg-4">
                        <img src={humus} className='humus' alt='img3'/>
                    </div>
                    <div className="col-12 col-lg-8">
                        <p className="p">El humus de lombriz, también conocido como vermicompost, es un tipo de abono orgánico producido a partir del estiércol de lombrices rojas (Eisenia foetida) y otros materiales orgánicos en proceso de descomposición. Es el resultado de la digestión y descomposición de la materia orgánica por parte de las lombrices y otros microorganismos presentes en el vermicompostaje.</p>
                    </div>
                </div>
                <div className="container-fluid row">
                    <h3 className="titulo">Características destacadas del Humus de Lombriz</h3>
                    <div className="col-12">
                        <ul>
                            <li className="li">
                                <b>Nutrientes ricos y equilibrados: </b>El humus de lombriz contiene una amplia gama de nutrientes esenciales para las plantas, como nitrógeno, fósforo, potasio, calcio, magnesio, azufre y micronutrientes. Estos nutrientes están disponibles en formas fácilmente asimilables por las plantas, lo que favorece un crecimiento saludable.
                            </li>
                            <li className="li">
                                <b>Estructura del suelo mejorada: </b>El humus de lombriz mejora la estructura del suelo al promover la formación de agregados y mejorar la capacidad de retención de agua. Esto resulta en un suelo más suelto, bien aireado y con una mayor capacidad para retener la humedad.
                            </li>
                            <li className="li">
                                <b>Mayor capacidad de retención de agua: </b>Debido a su estructura esponjosa y alta capacidad de retención de agua, el humus de lombriz ayuda a retener la humedad en el suelo. Esto es especialmente beneficioso en regiones con sequías frecuentes o suelos con poca capacidad de retención de agua.
                            </li>
                            <li className="li">
                                <b>Mejora la aireación del suelo: </b>El humus de lombriz aumenta la porosidad del suelo, permitiendo una mejor circulación de aire. Esto es crucial para el desarrollo de raíces sanas, ya que las plantas necesitan oxígeno para un crecimiento óptimo.
                            </li>
                            <li className="li">
                                <b>Estimula la actividad microbiana: </b>El humus de lombriz fomenta la proliferación de microorganismos beneficiosos en el suelo, como bacterias y hongos. Estos organismos descomponen aún más la materia orgánica, liberan nutrientes y mejoran la salud general del suelo.
                            </li>
                            <li className="li">
                                <b>pH equilibrado: </b>El humus de lombriz tiene un pH casi neutro, lo que ayuda a equilibrar el pH del suelo. Esto es especialmente útil en suelos ácidos, ya que contribuye a neutralizar la acidez y crear un ambiente más favorable para el crecimiento de las plantas.
                            </li>
                            <li className="li">
                                <b>Baja concentración de sales: </b>A diferencia de algunos fertilizantes químicos, el humus de lombriz tiene una baja concentración de sales. Esto evita la acumulación de sales en el suelo, lo que podría dañar las raíces de las plantas.
                            </li>
                            <li className="li">
                                <b>Seguro y respetuoso con el medio ambiente: </b>El humus de lombriz es un abono orgánico completamente natural, libre de químicos sintéticos o aditivos dañinos. Es seguro de usar y no contamina el suelo ni el agua subterránea.
                            </li>
                        </ul>
                    </div>
                </div>
            </center>
        </div>
    )
}

export default Inicio;