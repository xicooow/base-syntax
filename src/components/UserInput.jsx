import React from 'react';

const UserInput = (props) => {
  return (
    <input className='custom-inputs' placeholder='Change me...' onChange={props.changeUsername} value={props.username} />
  );
};

export default UserInput;