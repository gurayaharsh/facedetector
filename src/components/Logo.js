import React from "react";
import 'tachyons'; 
import Img from './LogoImg.png' ;

const Logo = () => {
    return <div>
        <p className = "f1 tc">Face Detector</p>
        <img className = "w-10 h-10 " src = {Img}></img></div>;
}

export default Logo; 