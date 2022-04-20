import axios from 'axios';
import React from 'react';
import ketty from '../../../pic/ketty.jpg';
import s from './Users.module.css';

class Users extends React.Component {
 constructor(props) {

  super(props)
  
      axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
    
  };
  render() {
    return (
      <div>

        {this.props.users.map((u) => (
          <div key={u.id} className={s.Users}>
            <span>
              <div className={s.AvaInf}>
                <img src={u.photos.small != null ? u.photos.setUsers : ketty} />
              </div>
            </span>

            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              {/* <div>{'u.location.country'}</div>
            <div>{'u.location.city'}</div> */}
            </span>
            <span>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;

// [
//   {
//     id: 1,
//     followed: false,
//     avatar: <img src={ketty}/>,
//     name: 'Evhen',
//     status: '3D Modeling',
//     location: { country: 'Ukraine', city: 'Kiev' },
//   },
//   {
//     id: 2,
//     followed: true,
//     avatar: <img src={ketty}/>,
//     name: 'Denis',
//     status: 'UI Desiner',
//     location: { country: 'Ukraine', city: 'Kharkiv' },
//   },
//   {
//     id: 3,
//     followed: false,
//     avatar: <img src={ketty}/>,
//     name: 'Pavel',
//     status: 'IT-school Teatcher',
//     location: { country: 'Ukraine', city: 'Odessa' },
//   },
//   {
//     id: 4,
//     followed: false,
//     avatar: <img src={ketty}/>,
//     name: 'Nikita',
//     status: 'AI Engenear',
//     location: { country: 'Ukraine', city: 'Kiev' },
//   },
// ]
