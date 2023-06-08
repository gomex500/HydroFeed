import React from "react";
import '../css/beneficios.css'
import fh1 from '../img/fh1.png'
import fh2 from '../img/fh2.png'
import fh3 from '../img/fh3.png'
import fh4 from '../img/fh4.png'
import fh5 from '../img/fh5.png'
import fh6 from '../img/fh6.png'
import fh7 from '../img/fh7.png'
import b1 from '../img/b1.png'
import b2 from '../img/b2.png'
import b3 from '../img/b3.png'
import b4 from '../img/b4.png'
import b5 from '../img/b5.png'
import b6 from '../img/b6.png'


var Beneficios = () =>{
    return(
        <div className="container-fluid">
            <center>
            <div className="container row">
                <h3 className="titulo t animate__animated animate__zoomIn">Beneficios del Forraje Hidropónico</h3>
                <div className="col-12 col-lg-4">
                    <img src={fh1} className='fh1' alt='fh1'/>
                </div>
                <div className="col-12 col-lg-8 pa">
                        <p className="p"><b>Mayor disponibilidad y calidad del alimento:</b> El forraje hidropónico permite cultivar una gran cantidad de alimento en un espacio reducido y en un corto período de tiempo. Esto garantiza una disponibilidad constante de forraje fresco y nutritivo para el ganado, sin depender de factores climáticos o estacionales.</p>
                </div>
            </div>
            <div className="container row">
                <div className="col-12 col-lg-4">
                    <img src={fh2} className='fh1' alt='fh1'/>
                </div>
                <div className="col-12 col-lg-8">
                        <p className="p pa"><b>Nutrición balanceada:</b>El cultivo hidropónico permite controlar y ajustar los niveles de nutrientes en el forraje, asegurando una dieta equilibrada y óptima para el ganado. Es posible ajustar los niveles de proteínas, minerales y vitaminas para satisfacer las necesidades específicas de cada especie animal y etapa de desarrollo.</p>
                </div>
            </div>
            <div className="container row">
                <div className="col-12 col-lg-4">
                    <img src={fh3} className='fh1' alt='fh1'/>
                </div>
                <div className="col-12 col-lg-8">
                        <p className="p pa"><b>Ahorro de agua:</b>El sistema hidropónico utiliza menos agua en comparación con los métodos tradicionales de cultivo de forraje. El agua se recircula en el sistema, lo que reduce significativamente los requerimientos de riego y minimiza el desperdicio de agua.</p>
                </div>
            </div>
            <div className="container row">
                <div className="col-12 col-lg-4">
                    <img src={fh4} className='fh1' alt='fh1'/>
                </div>
                <div className="col-12 col-lg-8">
                        <p className="p pa"><b>Menor impacto ambiental:</b>El cultivo hidropónico de forraje produce menos emisiones de gases de efecto invernadero y requiere menos terreno en comparación con los pastizales tradicionales. Además, al utilizar técnicas de cultivo sin suelo, se evita la erosión del suelo y se reducen los riesgos de contaminación por pesticidas o fertilizantes químicos.</p>
                </div>
            </div>
            <div className="container row">
                <div className="col-12 col-lg-4">
                    <img src={fh5} className='fh1' alt='fh1'/>
                </div>
                <div className="col-12 col-lg-8">
                        <p className="p pa"><b>Mayor eficiencia en el uso de nutrientes:</b>El sistema hidropónico permite un uso más eficiente de los nutrientes, ya que las plantas absorben directamente los nutrientes disueltos en el agua. Esto se traduce en una mayor absorción de nutrientes por parte del ganado y una menor excreción de nutrientes no utilizados.</p>
                </div>
            </div>
            <div className="container row">
                <div className="col-12 col-lg-4">
                    <img src={fh6} className='fh1' alt='fh1'/>
                </div>
                <div className="col-12 col-lg-8">
                        <p className="p pa"><b>Reducción de enfermedades y parásitos:</b>El cultivo hidropónico de forraje proporciona un ambiente controlado y libre de malezas, insectos y patógenos. Esto ayuda a reducir la propagación de enfermedades y la infestación de parásitos en el ganado, mejorando su salud y bienestar.</p>
                </div>
            </div>
            <div className="container row">
                <div className="col-12 col-lg-4">
                    <img src={fh7} className='fh1' alt='fh1'/>
                </div>
                <div className="col-12 col-lg-8 pa">
                        <p className="p"><b>Mayor control y flexibilidad:</b>Con el forraje hidropónico, los ganaderos tienen un mayor control sobre la producción de alimentos para su ganado. Pueden ajustar la cantidad y calidad del forraje según las necesidades cambiantes de sus animales, lo que brinda flexibilidad y eficiencia en la alimentación.</p>
                </div>
                <h3 className="titulo t animate__animated animate__zoomIn">Beneficios del Humus de Lombriz</h3>
                <div className="col-12 col-lg-4">
                    <img src={b1} className='fh1' alt='fh1'/>
                </div>
                <div className="col-12 col-lg-8 pa">
                    <p className="p"><b>Mejora la estructura del suelo:</b> El humus de lombriz tiene una textura suave y granulada que mejora la estructura del suelo. Esto permite una mejor aireación y drenaje, evitando la compactación del suelo y favoreciendo el crecimiento de las raíces de las plantas.</p>
                </div>
                <div className="col-12 col-lg-4">
                    <img src={b2} className='fh1' alt='fh1'/>
                </div>
                <div className="col-12 col-lg-8 pa">
                    <p className="p"><b>Aumenta la retención de agua:</b> El humus de lombriz tiene una capacidad excepcional para retener la humedad en el suelo. Esto es beneficioso tanto en períodos de sequía, ya que ayuda a las plantas a mantenerse hidratadas por más tiempo, como en épocas de lluvia, ya que evita el encharcamiento y la pérdida de nutrientes por lixiviación.</p>
                </div>
                <div className="col-12 col-lg-4">
                    <img src={b3} className='fh1' alt='fh1'/>
                </div>
                <div className="col-12 col-lg-8 pa">
                    <p className="p"><b>Suministra nutrientes esenciales:</b> El humus de lombriz es rico en nutrientes esenciales para las plantas, como nitrógeno, fósforo, potasio, calcio, magnesio y muchos micronutrientes. Estos nutrientes están en formas fácilmente disponibles para las plantas, lo que favorece su crecimiento y desarrollo saludable.</p>
                </div>
                <div className="col-12 col-lg-4">
                    <img src={b4} className='fh1' alt='fh1'/>
                </div>
                <div className="col-12 col-lg-8 pa">
                    <p className="p"><b>Estimula la actividad microbiológica:</b> El humus de lombriz alberga una gran cantidad de microorganismos beneficiosos, como bacterias y hongos. Estos microorganismos ayudan a descomponer aún más la materia orgánica, liberando nutrientes adicionales y contribuyendo a la formación de una comunidad microbiana equilibrada en el suelo.</p>
                </div>
                <div className="col-12 col-lg-4">
                    <img src={b5} className='fh1' alt='fh1'/>
                </div>
                <div className="col-12 col-lg-8 pa">
                    <p className="p"><b>Reduce la necesidad de fertilizantes químicos:</b> Debido a su alto contenido de nutrientes, el humus de lombriz puede reducir la dependencia de fertilizantes químicos sintéticos. Al mejorar la fertilidad del suelo de manera natural, se puede reducir la cantidad de productos químicos utilizados, lo que beneficia tanto al medio ambiente como a la salud humana.</p>
                </div>
                <div className="col-12 col-lg-4">
                    <img src={b6} className='fh1' alt='fh1'/>
                </div>
                <div className="col-12 col-lg-8 pa">
                    <p className="p"><b>Incrementa la resistencia a enfermedades y estrés:</b> Las plantas cultivadas en suelos enriquecidos con humus de lombriz suelen ser más resistentes a enfermedades, plagas y estrés ambiental. Esto se debe en parte al aumento de la actividad microbiológica y al equilibrio nutricional del suelo, que fortalece el sistema inmunológico de las plantas.</p>
                </div>
            </div>
            </center>
        </div>
    )
}

export default Beneficios;