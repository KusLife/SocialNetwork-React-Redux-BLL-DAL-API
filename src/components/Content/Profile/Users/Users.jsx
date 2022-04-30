// import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { usersAPI } from '../../../../api/api';
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
              {u.followed ? (
                <button
                  onClick={() => {
                    usersAPI.getUsersUnfollow(u.id).then((data) => {
                      if (data.resultCode === 0) {
                        props.unfollow(u.id);
                      }
                    });
                    // axios
                    //   .delete(
                    //     `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                    //     {
                    //       withCredentials: true,
                    //       headers: {
                    //         'API-KEY': '89e45cc4-a7b2-4ec6-95c2-842d8cade3ec',
                    //       },
                    //     }
                    //   ).then((response) => {
                    //     if (response.data.resultCode === 0) {
                    //       props.unfollow(u.id);
                    //     }
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    usersAPI.getUsersFollow(u.id).then((data) => {
                      if (data.resultCode === 0) {
                        props.follow(u.id);
                      }
                    });
                    // axios
                    //   .post(
                    //     `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                    //     {},
                    //     {
                    //       withCredentials: true,
                    //       headers: {
                    //         'API-KEY': '89e45cc4-a7b2-4ec6-95c2-842d8cade3ec',
                    //       },
                    //     }
                    //   )
                    //   .then((response) => {
                    //     if (response.data.resultCode === 0) {
                    //       props.follow(u.id);
                    //     }
                    //   });
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

export default Users;
