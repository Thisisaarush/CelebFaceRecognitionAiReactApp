import React from 'react';
import logo from './logo.png';
import Tilt from 'react-parallax-tilt';

const Logo = () => {
  return (
    <div>
      <Tilt style={{height: '150px', width: '150px'}}>
          <div  style={{height: '110px', width: '110px', padding: '20px', marginTop: '-35px', marginLeft: '25px', boxShadow: '0 2px 10px 2px rgba(0, 0, 0, 0.2)', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '7px'}}>
            <img style={{height: '100px', width: '100px'}} src={logo} alt='logo' />
          </div>
      </Tilt>
    </div>
  );
}

export default Logo;