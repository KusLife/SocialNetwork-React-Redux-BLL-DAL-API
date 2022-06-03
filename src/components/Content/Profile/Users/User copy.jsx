import React from 'react';
import { Link } from 'react-router-dom';
import ketty from '../../../../pic/ketty.jpg';
import s from './Users.module.css';

let User = (users, isButtonDisable, unfollowThunk, followThunk) => {
  return (
    <div>
      {users.map((u) => (
        <div key={u.id} className={s.Users}>
          <span>
            <div className={s.AvaInf}>
              <Link to={'/profile/' + u.id}>
                <img
                  alt="profile"
                  src={u.photos.small != null ? u.photos.small : ketty}
                />
              </Link>
            </div>
          </span>

          <span>
            <div>{u.name}</div>
            <div>Status {u.status}</div>
          </span>
          <span>
            {/* <div>{'u.location.country'}</div>
            <div>{'u.location.city'}</div> */}
          </span>

          <span>
            <div>
              {u.followed ? (
                <button
                  disabled={isButtonDisable.some((id) => id === u.id)}
                  onClick={() => {
                    unfollowThunk(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={isButtonDisable.some((id) => id === u.id)}
                  onClick={() => {
                    followThunk(u.id);
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
};

export default User;
