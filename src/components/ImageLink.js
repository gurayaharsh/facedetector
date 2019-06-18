import React from "react";
import 'tachyons';


const ImageLink = () => {
    return <div>
        <p className = "f1 tc">Face Detector</p>
        <p className = "f4 tc"> Insert an image link</p>
        
        <div className = "form pa4 br3 shadow-5 w-50 center">
            <input type = "text" className = "w-70 f4 pa2" type = "text"></input>
            <button className = "w-30 grow f4 link ph3 pv2 dib white bg-light-purple">Detect</button>
        </div>

        </div>
}

export default ImageLink; 