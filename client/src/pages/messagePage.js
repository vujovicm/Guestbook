import React from "react";

const Message = () => {
    return (
       <>
       <label> Message: </label>
       <input type="text"></input>

       
       <label> Name: </label>
       <input type="text"></input>

       <button onClick="this.disabled=true"> Post </button>
       {/* add onClick attr function for status and add send */}

       </> 
        
        );
};

export default Message;