import React, {useState} from "react";
import '../css/ayuda.css'

var Ayuda = () =>{
    const [mensaje, setMensaje] = useState([]);
    const [newMensaje, setNewMensaje] = useState('');

    const optenerMensaje = (event) => {
      setNewMensaje(event.target.value);
    };

    const enviarMensaje = (event) => {
      event.preventDefault();
      if (newMensaje.trim() !== '') {
        const message = {
          content: newMensaje,
          author: 'Usuario',
          timestamp: new Date().toLocaleTimeString(),
        };
        setMensaje([...mensaje, message]);
        setNewMensaje('');
      }
    };



    return(
        <div className="container-fluid">
            <div className="mensajes">
                {mensaje.map((message, index) => (
                <div key={index}>
                    <strong>{message.author}: </strong>
                    <span>{message.content}</span>
                </div>
                ))}
            </div>
            <div className="mensaje">
                <form onSubmit={enviarMensaje}>
                    <input type='text' className="form-control inpt" value={newMensaje} onChange={optenerMensaje} placeholder="ingrese su pregunda"/>
                    <button className="btn btn1"><i class="bi bi-send-fill"></i></button>
                </form>
            </div>
        </div>
    )
}

export default Ayuda;