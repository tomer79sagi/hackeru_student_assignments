import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [action, setAction] = useState(null);

  useEffect(() => {
    fetch('https://www.melivecode.com/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  const handleAddUser = () => {
    alert("A new user has been added");
    const newUser = {
      id: users.length + 1,
      fname: 'Name',
      lname: 'Last Name',
      email: 'randomexample@gmail.com',
      avatar: 'https://www.melivecode.com/users/cat.png',
    };
    setUsers([...users, newUser]);
    setSelectedUser(newUser);
    setAction('edit');
  };

  const handleEditUser = (user) => {
    alert(" The edit field is below the list");
    setSelectedUser(user);
    setAction('edit');
    
  };

  const handleDeleteUser = (user) => {
    const updatedUsers = users.filter((u) => u.id !== user.id);
    setUsers(updatedUsers);
    setSelectedUser(null);
    setAction(null);
    alert(" User will be deleted");
  };

  const handleSaveUser = (user) => {
    const updatedUsers = users.map((u) => (u.id === user.id ? user : u));
    setUsers(updatedUsers);
    setSelectedUser(null);
    setAction(null);
  };

  const handleCancelEdit = () => {
    setSelectedUser(null);
    setAction(null);
  };

  return (
    <div >
      <h1>React Project User-List (CRM) </h1>
      <button onClick={handleAddUser}>Add User</button>
      <table>
        <thead >
          <tr>
            <th>ID</th>
            <th >Avatar</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <img className="user-avatar" src={user.avatar} alt={`${user.fname} ${user.lname}`} />
              </td>
              <td>{user.fname}</td>
              <td>{user.lname}</td>
              <td>{user.username}</td>
              <td>
                <button onClick={() => handleEditUser(user)}>Edit</button>
                <button onClick={() => handleDeleteUser(user)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {action === 'edit' && (
        <UserForm user={selectedUser} onSave={handleSaveUser} onCancel={handleCancelEdit} />
      )}
    </div>
  );
}

function UserForm({ user, onSave, onCancel }) {
  const [firstName, setFirstName] = useState(user.fname);
  const [lastName, setLastName] = useState(user.lname);
  const [email, setEmail] = useState(user.username);
  const [avatar, setAvatar] = useState(user.avatar);

  const handleSave = (event) => {
    event.preventDefault();
    const updatedUser = { ...user, fname: firstName, lname: lastName, username : email, avatar };
    onSave(updatedUser);
  };

  return (
    <form onSubmit={handleSave}>
      <h2>{user.id ? `Edit User ${user.id}` : 'Add User'}
      </h2>
      <div>
        <label htmlFor="first-name">First Name:</label>
        <input
          id="first-name"
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="last-name">Last Name:</label>
        <input
          id="last-name"
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="avatar">Avatar URL:</label>
        <input
          id="avatar"
          type="text"
          value={avatar}
          onChange={(event) => setAvatar(event.target.value)}
        />
      </div>
      <div>
        <button type="submit">{user.id ? 'Save' : 'Add'}</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default App;