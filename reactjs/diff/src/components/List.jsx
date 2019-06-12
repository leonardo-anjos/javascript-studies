import React, { Component } from 'react';
import { api } from '../services/api';
import './List.css';
import { detailedDiff } from 'deep-object-diff';

export class List extends Component {
  
  state = {
    users: []
  }

  render() {
    const { users } = this.state;
    
    if (users === []) {
      console.log('users list empty!');
      return(
        <div>Users List is empty!</div>
      );  
    }

    for (let i = 0; i < users.length; i++) {
      for (let j = 1; j < users.length; j++) {
        if ((j - i) === 1) {
          // console.log(users[i] ,users[j]);
          console.log(i, j, detailedDiff(users[j], users[i]));
        }
      }
    }

    return(
      <div className="users-list">
        {users.map(user => (
          <article key={user.version}>
            <strong>name: {user.name}</strong>
            <p>nickname: {user.nicknames}</p>
          </article>
        ))}
      </div>
    );

  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const response = await api.get('/history');
    this.setState({ users: response.data }); 
  };
  
}