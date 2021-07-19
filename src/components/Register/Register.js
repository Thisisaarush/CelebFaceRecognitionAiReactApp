import React from 'react';
import './Register.css';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  onNameChange = (event) => {
    this.setState({'name': event.target.value});
  }

  onEmailChange = (event) => {
    this.setState({'email': event.target.value});
  }

  onPasswordChange = (event) => {
    this.setState({'password': event.target.value});
  }

  onButtonRegister = () => {
    fetch('https://pure-gorge-23737.herokuapp.com/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
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
        <div className='register-container'>
          <h1>Register</h1>
          <label htmlFor='name'>Name</label>
          <input onChange={this.onNameChange} id='name' type='name' placeholder='Enter Your Name ' />
          <label htmlFor='email'>Email</label>
          <input onChange={this.onEmailChange} id='email' type='email' placeholder='Enter Your Email ' />
          <label htmlFor='password'>Password</label>
          <input onChange={this.onPasswordChange} id='password' type='Password' placeholder='Enter Your Password' />
          <button id='register1' onClick={this.onButtonRegister}>Register</button>
          <button id='signin1' onClick={() => onRouteChange('signin')}>Signin</button>
        </div>
      </div>
    );

  }
}

export default Register;