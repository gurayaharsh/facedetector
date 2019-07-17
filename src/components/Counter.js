import React from "react";
import 'tachyons';


const Counter = (props) => {
    return <div>
        <p className = "white f4"> Hello {props.name}, you've got {props.numentries} entries </p>
        </div>
}

export default Counter; 