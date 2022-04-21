import axios from 'axios';
import React from 'react';
import ketty from '../../../pic/ketty.jpg';
import s from './Users.module.css';

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setUsersTotalCount(response.data.totalCount);
      });
  }

  onPageChange = (pagesNumber) => {
    this.props.setCurrentPage(pagesNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pagesNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

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
                className={this.props.currentPage === p && s.selectedPage}
                onClick={() => {
                  this.onPageChange(p);
                }}
              >
                {p}
              </span>
            );
          })}
        </div>

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
