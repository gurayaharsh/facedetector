import React from 'react';
import 'tachyons';

class Register extends React.Component{
  
constructor(props){
    super();
    this.state = {
      email: "",
      password: "",
      name: ""
    }
  }
  OnEmailChange = (event)=>{
    this.setState({email: event.target.value})
  }
  
  OnPasswordChange = (event)=>{
    this.setState({password: event.target.value})
  }

  OnNameChange = (event)=>{
    this.setState({name: event.target.value})
  }

  OnSubmit = () => {
    fetch('http://localhost:3000/register',{
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email, 
        password: this.state.password
      })
    }).then(response => response.json()).then(user=>{
      if (user.id) {
        this.props.LoadUserFxn(user);
        this.props.OnPageChangeFxn('home');
      }
    })
  }


render(){
return(
<article className ="br2 ba dark-gray b--black-10 mv4 w-25 center shadow-5">
<main className="pa4 black-80">
  <div className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph0 mh0">Register</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
        <input onChange = {this.OnNameChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input onChange = {this.OnEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input onChange = {this.OnPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
      </div>
    </fieldset>
    <div className="lh-copy mt3">
      <input onClick ={this.OnSubmit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Submit"/>
    </div>
    <div className="lh-copy mt3">
      <input onClick = {() => this.props.OnPageChangeFxn('signin')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Cancel"/>
    </div>
  </div>
</main>
</article>
)}

}

export default Register; 