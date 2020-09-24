import React from 'react';

const UserOutput = (props) => {
  return (
    <div className='outputs-wrapper'>
      <p>
        <small><i>User card #{props.userIndex + 1}</i></small>
      </p>
      <p>
        Name: <strong>{props.username}</strong>
        {props.children}
      </p>
    </div>
  );
};

export default UserOutput;