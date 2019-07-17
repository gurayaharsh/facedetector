import React from "react";
import 'tachyons';


const ImageLink = (props) => {
    return <div>
        <p className = "f4 tc"> Insert an image link below</p>
        
        <div className = "form pa4 br3 shadow-5 w-50 center">
            <input onChange = {props.OnInputChangeFxn} className = "w-70 f4 pa2" type = "text"></input>
            <button onClick = {props.OnSubmitFxn} className = "w-30 grow f4 link ph3 pv2 dib white bg-light-purple">Detect</button>
        </div>

        </div>
}

export default ImageLink; 
