import React from 'react';
import './App.css';
import NavBar from '../components/NavBar' ; 
import Logo from '../components/Logo';
import ImageLink from '../components/ImageLink';
import Greeting from '../components/Greeting';
import Particles from 'react-particles-js';
import FaceRecognizer from '../components/FaceRecognizer';
import SignInForm from '../components/SignIn';
import Register from '../components/Register';

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

const intialstate = {
  input: "",
  imageURL: "",
  box: {
  },
  guess: "",
  page: 'signin',
  user: {
    id: "",
    name: "",
    email: "", 
    entries: 0,
    joined: "" 
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
      guess: "",
      page: 'signin',
      user: {
        id: "",
        name: "",
        email: "", 
        entries: 0,
        joined: "" 
      }
    }
  }

  

  CalculateFaceLocation = (data) => {

    this.OnGuess(this.Predict(data));
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

  Predict = (data) => {
    let res = data.outputs[0].data.regions[0].data.face.identity.concepts[0].name;
    let guess = res.split(" ");
    let fname = guess[0].charAt(0).toUpperCase() + guess[0].slice(1)
    let lname = guess[1].charAt(0).toUpperCase() + guess[1].slice(1);
    return fname + " " + lname;
  }

  OnGuess = (guess) =>{
    console.log(guess);
    this.setState({
      guess : guess
    })
  }

  DisplayFaceBox = (box) => {
    this.setState({box:box})
  }

  OnSignOut = () => {
    this.setState(intialstate); 
  }

  OnInputChange = (event) => {
    this.setState({
      input: event.target.value
    });

  }

  OnSubmit = () => {
    this.setState({imageURL: this.state.input});
      fetch('https://calm-ocean-65123.herokuapp.com/imageurl', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          input: this.state.input
        })
      })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch('https://calm-ocean-65123.herokuapp.com/entries', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count}))
            })
            .catch(console.log)

        }
        this.DisplayFaceBox(this.CalculateFaceLocation(response))
      })
      .catch(err => console.log(err));
  }

  OnPageChange = (route) => {
    this.setState({
      page: route
    })
  }

  LoadUser = (userinfo) => {
    this.setState({user:{
        id: userinfo.id,
        name: userinfo.name,
        email: userinfo.email, 
        entries: userinfo.entries,
        joined: userinfo.joined 
    }})
  }

  render(){

    if (this.state.page === "home"){
    return(
    <div className = "App">
      <Particles className ="seethru" params={ParticleOptions}/>
      <NavBar OnSignOutFxn = {this.OnSignOut} OnPageChangeFxn = {this.OnPageChange}/>
      <Logo/>
      <Greeting name = {this.state.user.name} numentries = {this.state.user.entries}/>
      <ImageLink className = "center" OnSubmitFxn = {this.OnSubmit} OnInputChangeFxn = {this.OnInputChange}/>
      <FaceRecognizer className= "center boundingbox" guess = {this.state.guess} outline = {this.state.box} link = {this.state.imageURL}/> 
      </div>)
      }
      
   if (this.state.page === "signin"){
     return(
    <div className="App">
    <Particles className ="seethru" params={ParticleOptions}/>
    <Logo/>
    <SignInForm LoadUserFxn = {this.LoadUser} OnPageChangeFxn ={this.OnPageChange}/>
    </div>
    )
    }
    
    if (this.state.page === "register"){
    return(
    <div className="App">
    <Particles className ="seethru" params={ParticleOptions}/>
    <Logo/>
    <Register LoadUserFxn = {this.LoadUser} OnPageChangeFxn ={this.OnPageChange}/>
    </div>
    )
    }
  }
}

export default App;
