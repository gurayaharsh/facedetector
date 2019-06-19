import React from 'react';
import 'tachyons';

const SignInForm = (props) => {
    
return(
<aricle className ="br2 ba dark-gray b--black-10 mv4 w-25 center shadow-5">
<main className="pa4 black-80">
  <div className="measure">
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
      </div>
    </fieldset>
    <div className="lh-copy mt3">
      <input onClick = {() => props.OnPageChangeFxn('home')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign In"/>
    </div>
    <div className="lh-copy mt3">
      <input onClick = {() => props.OnPageChangeFxn('register')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"/>
    </div>
  </div>
</main>
</aricle>

);
}

export default SignInForm;