import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLink from './components/ImageLink/ImageLink';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Rank from './components/Rank/Rank';


const initialState = {
  input: '',
  imageUrl: '',
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    rank: 0,
    joined: ''
  }
}


class App extends React.Component  {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      rank: data.rank,
      joined: data.joined
    }});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonClick = (e) => {
    if (this.state.input) {
      this.setState({imageUrl: this.state.input});
      
      fetch('https://pure-gorge-23737.herokuapp.com/imageUrl', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify
          ({
            input: this.state.input
          })
        })
        .then(response => response.json())
        .then (response => {
          if (response) {
            fetch('https://pure-gorge-23737.herokuapp.com/image', {
              method: 'put',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify
              ({
              id: this.state.user.id
              })
            })

          .then(response => response.json())
          .then(count => {
            this.setState(Object.assign(this.state.user, {rank: count}))
          })
          .catch(console.log);
        }

        const face = document.getElementById('name');
        const faceName = response.outputs[0].data.regions[0].data.concepts[0].name;
        face.textContent = faceName;
      })
      .catch(err => console.log(err));
    }
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState);
    } else if (route === 'home') {
      this.setState({isSignedIn: true});
    }
      this.setState({route: route});
  }


  render () {
    return (
      <div>
        <Particles className='particles' 
          params={{
            "particles": {
                "number": {
                    "value": 60
                },
                "size": {
                    "value": 3
                }
            }
          }}
        />

      { 
        this.state.route === 'home'
        ? <div>
            <Navigation onRouteChange={this.onRouteChange}/>
            <Logo />
            <Rank name={this.state.user.name} rank={this.state.user.rank}  />
            <ImageLink onButtonClick={this.onButtonClick} onInputChange={this.onInputChange} />
            <FaceRecognition  imageUrl={this.state.imageUrl} /> 
          </div>
        : (
          this.state.route === 'signin'
          ? <Signin onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
          : <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
          )
      }
      </div>
    );
  }
}

export default App;
