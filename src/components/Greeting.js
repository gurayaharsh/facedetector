import React from "react";
import 'tachyons';


const Greeting = (props) => {
    return <p className = "white b f3"> Welcome {props.name} ! You have {props.numentries} submission(s)</p>

}

export default Greeting; 
