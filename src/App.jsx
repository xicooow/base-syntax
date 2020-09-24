import React, { useState } from 'react';
import UserOutput from './components/UserOutput';
import UserInput from './components/UserInput';

const App = () => {
  const initialUsers = [
    { name: '<sample name>' }
  ];

  const [users, setUsers] = useState(initialUsers);

  const changeUsernameHandler = (event, index) => {
    const newName = event.target.value;
    const newUsers = [...users];
    newUsers[index].name = newName;
    setUsers(newUsers);
  };

  const addNewUserHandler = () => {
    setUsers([
      ...users,
      { name: '<sample name>' }
    ]);
  };

  const removeLastUserHandler = () => {
    const newUsers = [...users];
    newUsers.pop();
    setUsers(newUsers);
  };

  const hasUsers = () => !!users.length;

  const mapUsers = (user, index) => {
    return (
      <UserOutput key={index} userIndex={index} username={user.name}>
        <UserInput key={index + 1} username={user.name} changeUsername={(event) => changeUsernameHandler(event, index)} />
      </UserOutput>
    );
  };

  const renderUsersOutput = () => {
    if (!hasUsers()) {
      return (
        <h2>No users available to list</h2>
      );
    }

    return users.map(mapUsers);
  };

  return (
    <div className='App'>
      <div className='flex-container'>
        {renderUsersOutput()}
      </div>
      <div className='buttons-wrapper'>
        <button className='default' onClick={removeLastUserHandler} disabled={!hasUsers()}>Remove last user card</button>
        <button className='default primary' onClick={addNewUserHandler}>Add new user card</button>
      </div>
    </div>
  );
};

export default App;