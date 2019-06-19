import React from "react";
import 'tachyons'; 

const FaceRecognizer = (props) => {
    return (
    <div className = "center ma">
        <div className =" absolute mt2">
             <img id = "inputimage" className = "middle" width="500px" height ="auto" src = {props.link}/>
             <div className = "boundingbox" style = {{top: props.outline.toprow, right: props.outline.rightcol, 
            left: props.outline.leftcol, bottom: props.outline.bottomrow}}></div>
        </div>
    </div>)
}   

export default FaceRecognizer; 