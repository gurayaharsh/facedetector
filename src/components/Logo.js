import React from "react";
import 'tachyons'; 
import LogoImg from './LogoImg.png' ;

const Logo = () => {
    return <div><img className = "w-10 h-10 " src = {LogoImg}></img></div>;
}

export default Logo; 