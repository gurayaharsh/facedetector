import React from "react";
import 'tachyons'; 
import Img from './LogoImg.jpg' ;

const Logo = () => {
    return <div>
        <p className = "f1 white b tc">Celebrity Identifier</p>
        <img className = "w-10 h-10 " src = {Img}></img></div>;
}

export default Logo; 