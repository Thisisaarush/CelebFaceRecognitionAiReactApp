import React from 'react';
import './Signin.css';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signinemail: '',
      signinpassword: ''
    }
  } 

  onEmailChange = (event) => {
    this.setState({'signinemail': event.target.value});
  }

  onPasswordChange = (event) => {
    this.setState({'signinpassword': event.target.value});
  }

  onButtonSignin = () => {
    fetch('https://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signinemail,
        password: this.state.signinpassword
      })
    })
    .then(response => response.json())
    .then(user => {
      if (user) {
        this.props.loadUser(user);
        this.props.onRouteChange('home');
      }
    })
  }


  render() {
    const { onRouteChange } = this.props;
    return (
      <div className='container'>
        <div className='signin-container'>
          <h1>Sign In</h1>
          <label htmlFor='email'>Email</label>
          <input onChange={this.onEmailChange} id='email' type='email' placeholder='Enter Your Email ' />
          <label htmlFor='password'>Password</label>
          <input onChange={this.onPasswordChange} id='password' type='Password' placeholder='Enter Your Password' />
          <button id='signin' onClick={this.onButtonSignin}>Sign In</button>
          <button id='register' onClick={() => onRouteChange('register')}>Register</button>
        </div>
      </div>
    );
  }
}

export default Signin;