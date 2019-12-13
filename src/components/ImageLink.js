import React from "react";
import 'tachyons';


const ImageLink = (props) => {
    return <div>
        
        <div className = "ba bw1pa4 br3 shadow-5 w-50 center">
            <input onChange = {props.OnInputChangeFxn} className = "w-70 f4 pa2" type = "text" placeholder = "insert an image link"></input>
            <button onClick = {props.OnSubmitFxn} className = "w-30 grow f4 link ph3 pv2 dib white bg-light-purple">Detect</button>
        </div>

        </div>
}

export default ImageLink; 
