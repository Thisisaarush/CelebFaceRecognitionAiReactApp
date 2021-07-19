import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange }) => {
  return (
    <div>
      <p className='navigation' onClick={() => onRouteChange('signin')}>Sign Out</p>
    </div>
  );
}

export default Navigation;