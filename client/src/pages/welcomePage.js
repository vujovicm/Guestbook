import React from "react";
import { useNavigate } from 'react-router-dom';


const Welcome = () => {

    let navigate = useNavigate();
    const goToMessagePage = () => {
        let path= "/message";
        navigate(path);
    }; 
    
    return (
        <>
        <h1> Guestbook </h1>
        <h3> See what people wrote about us and leave a message.</h3>

        <button onClick= { goToMessagePage }> Leave a message </button></>
    );
};

export default Welcome;