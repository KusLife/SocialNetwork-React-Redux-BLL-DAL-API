import React from 'react';
import { Link } from 'react-router-dom';
import ketty from '../../../../pic/ketty.jpg';
import s from './Users.module.css';

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div className={s.pagesNumber}>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && s.selectedPage}
              onClick={() => {
                props.onPageChange(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>

      {props.users.map((u) => (
        <div key={u.id} className={s.Users}>
          <span>
            <div className={s.AvaInf}>
              <Link to={'/profile/' + u.id}>
                <img
                  alt=""
                  src={u.photos.small != null ? u.photos.small : ketty}
                />
              </Link>
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
              {u.followed 
                ? (<button
                  disabled={props.isButtonDisable.some((id) => id === u.id)}
                  onClick={() => {
                    props.unfollowThunk(u.id);
                  }}>Unfollow</button>) 
                : (<button
                  disabled={props.isButtonDisable.some((id) => id === u.id)}
                  onClick={() => {
                    props.followThunk(u.id);
                  }}>Follow</button>)}
            </div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
