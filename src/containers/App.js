import React from 'react';
import './App.css';
import NavBar from '../components/NavBar' ; 
import Logo from '../components/Logo';
import ImageLink from '../components/ImageLink';
import Counter from '../components/Counter';
import Particles from 'react-particles-js';

const ParticleOptions = {
  particles: {
    value: 300,
    density: {
      enable: true,
      value_area: 500
    }
}
} 

function App() {
  return (
    <div className="App">
     <Particles className ="seethru" params={ParticleOptions}/>
     <NavBar/>
     <Logo/>
     <Counter/>
     <ImageLink/>
    </div>
  );
}

export default App;
