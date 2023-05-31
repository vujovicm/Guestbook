import React, { useState } from "react";
import Axios from 'axios';

const Message = () => {

    const [message, setMessage] = useState('');
    const [name, setName] = useState('');

    const Submit = () => {

        const button= document.getElementById("b");
        button.disabled = true;
        
        document.getElementById("status").innerHTML = "sending";

        Axios.post("http://localhost:3001/api/insert",
            {message: message, name: name})
            .then((response) => { 
                const r= response.status;
                if (r>=200 && r<300) { 
                    document.getElementById("status").innerHTML = "success";}
                else if (r>=400) { 
                    document.getElementById("status").innerHTML = "failed";}
                
            })
            .catch(err => console.log(err))
        ;

    }


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

       <div>
       <button id="b" onClick={ Submit }> Post </button>
       <div id="status">  </div></div>
       </form> 
        
        );
};

export default Message;