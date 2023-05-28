import React from "react";

const Message = () => {
    return (
       <>
       <h1> Leave a message here </h1>
       <label> Message: </label>
       <input type="text"></input>

       
       <label> Name: </label>
       <input type="text"></input>

       <button onClick="this.disabled=true"> Post </button>
       {/* add onClick attr function for status below and disable after click
       and add send */}

       </> 
        
        );
};

export default Message;