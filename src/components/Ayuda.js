import React, {useState, useRef, useEffect} from "react";
import axios from 'axios';
import '../css/ayuda.css'

var Ayuda = () =>{
  const [input, setInput] = useState('');
  const [conversation, setConversation] = useState([]);
  const chatboxRef = useRef(null);

  const conversacion = async (e) =>{
    e.preventDefault();
    try {
      // const response = await axios.post('https://hydrobot.onrender.com/chat', {input: input});
      const response = await axios.post('http://127.0.0.1:5000/chat', {input: input});
      const Usuario = {
        user: 'Tu',
        message: input,
        type: 'user'
      };

      const bot = {
        user: 'HydroBot',
        message: response.data.response,
        type: 'bot'
      };
      setConversation((prevConversation) => [
        ...prevConversation,
        Usuario,
        bot
      ]);

      setInput('');

    } catch (error) {
      
    }
  }

  useEffect(() => {
    const chatboxElement = chatboxRef.current;
    chatboxElement.scrollTop = chatboxElement.scrollHeight;
  }, [conversation]);


    return(
        <div className="container-fluid">
            <div  ref={chatboxRef} className="mensajes">
                {conversation.map((message, index) => (
                <div key={index} className={`message ${message.type === 'user' ? 'user' : 'bot animate__animated animate__bounceInLeft'}`}>
                    <strong>{message.user}:  </strong>{message.message}
                </div>
                ))}
            </div>
            <div className="mensaje">
                <form onSubmit={conversacion}>
                    <input 
                      type='text'
                      className="form-control inpt"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="ingrese su pregunda"
                    />
                    <button type="submit" className="btn btn1">
                      <i class="bi bi-send-fill"></i>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Ayuda;