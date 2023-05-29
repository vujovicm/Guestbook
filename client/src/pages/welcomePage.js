import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

const Welcome = () => {

    const [list, setList] = useState([]);

    let navigate = useNavigate();
    const goToMessagePage = () => {
        let path= "/message";
        navigate(path);
    }; 

    useEffect(() => {
        Axios.get("http://localhost:3001/api/get").then((response) => {
            setList(response.data);
        })
    }, []);
    
    return (
        <>
        <h1> Guestbook </h1>
        <h3> See what people wrote about us and leave a message.</h3>

        <button onClick= { goToMessagePage }> Leave a message </button>
        
        
        {list.map((val) => {
            return(
                <div> 
                ID: {val.id} | 
                Message: {val.message} |
                Name: {val.name}
                </div>
            )
        })}
       
       </>
    );
};

export default Welcome;