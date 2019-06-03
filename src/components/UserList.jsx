import React, {Component} from 'react';
import users from '../data/users.json';
import User from './User.jsx';


export default class Users extends Component {
  render() {
    return (
      <div className="users">
        <h1 className="users__title">Список пользователей</h1>
        <div className="users-list">
          {users.map( (user, i) => {
            return <User 
              key={i}
              user={user}
              name={user.name} 
              username={user.username}
              email={user.email}
              phone={user.phone}
              website={user.website}
              city={user.address.city}
              street={user.address.street}
              work={user.company.name}
              slogan={user.company.catchPhrase}
            />
          })}
        </div>
      </div>
    )
  }
}
