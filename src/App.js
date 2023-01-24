import './App.css';
import UserList from './components/UserList';
import SearchBar from './components/SearchBar';
import { useState } from 'react';


function App() {
const initialState =[{id: 1, name: "De Rouck Thomas"}, {id: 2,name: 'Théo Blanc'}]
const [users, setUsers] = useState(initialState);

const addUser = (user) => {
  let newUsers = [...users];
  newUsers.push(user);
  setUsers(newUsers);

}

const deleteUser = (id) => {

  let newUsers = [...users];

  let index = newUsers.findIndex((user) => user.id === id)

  newUsers.splice(index, 1);

  setUsers(newUsers);

}

  return (
    <div className='body'>
    <div className="App container">
      <SearchBar addUser={addUser} />
      <UserList users={users} deleteUser= {deleteUser} />
    </div>
  </div>
  );
}

export default App;
