import React from 'react';

const Rank = ({ name, rank }) => {
  return (
    <div style={{fontSize: '34px', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '60px', marginTop: '-35px', flexDirection: 'column'}}>
        {'Celebrity Face Recognition AI'}
        <p>{`${name}, You have submitted ${rank} Images.`}</p>
    </div>
  );
}

export default Rank;