import React, { useState } from 'react';
import s from './Pagenator.module.css';
import cn from 'classnames'

let Pagenator = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChange,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={s.pagesNumber}>
      {portionNumber > 1 && (
        <button className={s.prev_btn}
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          PREV
        </button>
      )}

      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <span
              className={ cn({ [s.selectedPage]: currentPage === p}, s.pageNumber )}
              key={p}
              onClick={(e) => {
                onPageChange(p);
              }}
            >
              {p}
            </span>
          );
        })}
        { portionCount > portionNumber && 
        <button className={s.next_btn} onClick={ () => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}
    </div>
  );
};

export default Pagenator;
