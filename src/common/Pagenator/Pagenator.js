import React from 'react';
import s from './Pagenator.module.css';

let Pagenator = ({ totalUsersCount, pageSize, currentPage, onPageChange }) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={s.pagesNumber}>
      {pages.map((p) => {
        return (
          <span
            className={currentPage === p && s.selectedPage}
            onClick={() => {
              onPageChange(p);
            }}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};

export default Pagenator;