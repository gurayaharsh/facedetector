import React from 'react';
import './App.css';
import NavBar from '../components/NavBar' ; 
import Logo from '../components/Logo';
import ImageLink from '../components/ImageLink';
import Counter from '../components/Counter';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognizer from '../components/FaceRecognizer';
import SignInForm from '../components/SignIn';
import Register from '../components/Register';

const app = new Clarifai.App({
  apiKey: '3dabb3c6ec5141b7ba4885f1636c9016'
}); 
const ParticleOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      input: "",
      imageURL: "",
      box: {
      },
      page: 'signin'
    }
  }

  CalculateFaceLocation = (data) => {

    let face = data.outputs[0].data.regions[0].region_info.bounding_box;
    let image = document.getElementById("inputimage");
    let imagewidth = Number(image.width);
    let imageheight = Number(image.height);

    return({
      leftcol : face.left_col*imagewidth,
      toprow : face.top_row * imageheight,
      rightcol : imagewidth - (face.right_col*imagewidth),
      bottomrow : imageheight -(face.bottom_row*imagewidth)
    }) 
  }

  DisplayFaceBox = (box) => {
    this.setState({box:box})
  }

  OnInputChange = (event) => {
    this.setState({
      input: event.target.value
    });

  }

  OnSubmit = () => {
    this.setState({
      imageURL : this.state.input
    });

    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then((response) => this.DisplayFaceBox(this.CalculateFaceLocation(response))).catch(err => console.log(err));

  }

  OnPageChange = (route) => {
    this.setState({
      page: route
    })
  }

  render(){

    if (this.state.page === "home"){
    return(
    <div className = "App">
      <Particles className ="seethru" params={ParticleOptions}/>
      <NavBar OnPageChangeFxn = {this.OnPageChange}/>
      <Logo/>
      <Counter/>
      <ImageLink className = "center" OnSubmitFxn = {this.OnSubmit} OnInputChangeFxn = {this.OnInputChange}/>
      <FaceRecognizer className= "center boundingbox" outline = {this.state.box} link = {this.state.imageURL} /> 
      </div>)
      }
      
   if (this.state.page === "signin"){
     return(
    <div className="App">
    <Particles className ="seethru" params={ParticleOptions}/>
    <SignInForm OnPageChangeFxn ={this.OnPageChange}/>
    </div>
    )
    }
    
    if (this.state.page === "register"){
    return(
    <div className="App">
    <Particles className ="seethru" params={ParticleOptions}/>
    <Register OnPageChangeFxn ={this.OnPageChange}/>
    </div>
    )
    }
  }
}

export default App;
