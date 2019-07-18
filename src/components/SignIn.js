import React from 'react';
import 'tachyons';

class SignInForm extends React.Component {
constructor(props){
  super();
  this.state = {
    email: "",
    password: ""
  }
}
OnEmailChange = (event)=>{
  this.setState({email: event.target.value})
}

OnPasswordChange = (event)=>{
  this.setState({password: event.target.value})
}

OnSubmit = () => {
  fetch('https://calm-ocean-65123.herokuapp.com/signin',{
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      email: this.state.email, 
      password: this.state.password
    })
  }).then(response => response.json()).then(user=>{
    if (user.id) {
      this.props.LoadUserFxn(user)
      this.props.OnPageChangeFxn('home');
    }
    else {window.alert("unable to authenticate!");}
  })
}
  render(){
  
  return(
    <article className ="br2 ba dark-gray b--black-10 mv4 w-25 center shadow-5">
    <main className="pa4 black-80">
      <div className="measure">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f4 fw6 ph0 mh0">Sign In</legend>
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
          <input onClick = {this.OnSubmit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign In"/>
        </div>
        <div className="lh-copy mt3">
          <input onClick = {() => this.props.OnPageChangeFxn('register')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"/>
        </div>
      </div>
    </main>
    </article>
    
    );
  }

}

export default SignInForm;