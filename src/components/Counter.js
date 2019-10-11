import React from "react";
import 'tachyons';


const Counter = (props) => {
    return <div>
        <p className = "white f4"> Hello {props.name}. Number of Entries: {props.numentries} </p>
        </div>
}

export default Counter; 
