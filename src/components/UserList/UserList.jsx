import React, {Component} from 'react';
import users from '../../data/users.json';
import User from './User';
import s from './User.module.css';


export default class Users extends Component {
  render() {
    return (
      <div className={s.users}>
        <h1 className={s.usersTitle}>Список пользователей</h1>
        <div className={s.usersList}>
          {users.map( (user, i) => {
            return <User 
              key={user.id}
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
