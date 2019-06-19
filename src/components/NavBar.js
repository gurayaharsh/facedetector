import React from "react";
import 'tachyons'; 

const NavBar = (props) => {
    return <nav className = "f3 link dim black underline pa3 pointer tr"> 
    <p onClick ={() => props.OnPageChangeFxn('signin')}>Sign Out</p>
    </nav>;
}

export default NavBar; 