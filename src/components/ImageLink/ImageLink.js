import React from 'react';
import './ImageLink.css';

const ImageLink = ({ onButtonClick, onInputChange}) => {
  return (
    <div className='imagelink-container' >
      <div style={{display: 'flex', justifyContent: 'center', margin: '10px'}}>
        <input onChange={onInputChange} className='searchbox' type='search' placeholder='Enter/Paste the link of any Image'/>
        <button type='submit' onClick={onButtonClick}>Detect</button>
      </div>
    </div>
  );
}

export default ImageLink;