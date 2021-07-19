import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: '20px'}}>
      <span id='name' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '550px', height: '50px', fontSize: '22px', textTransform: 'capitalize', textAlign: 'center', marginBottom: '0px', userSelect: 'text'}}></span>
      <img style={{width: '550px', height: 'auto', borderRadius: '7px'}} src={imageUrl} alt='' />
    </div>
  );
}

export default FaceRecognition;