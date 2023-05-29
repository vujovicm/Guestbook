import React, { useState } from "react";
import Axios from 'axios';

const Message = () => {

    const [message, setMessage] = useState('');
    const [name, setName] = useState('');

    const Submit = () => {
        Axios.post("http://localhost:3001/api/insert", 
            {message: message, name: name});
        Disable();
        //SetStatus();

    }

    const Disable = () => {
        const button= document.getElementById("b");
        button.disabled = true;
    }

    // const SetStatus = () => {
    //     if()

    // }

    return (
       <form>
       <h2> Leave a message here </h2>
       <label> Message: </label>
       <input type="text" onChange={(e) => {
        setMessage(e.target.value);
       }}></input>

       
       <label> Name: </label>
       <input type="text" onChange={(e) => {
        setName(e.target.value);
       }}></input>

       <button id="b" onClick={ Submit }> Post </button>
       </form> 
        
        );
};

export default Message;