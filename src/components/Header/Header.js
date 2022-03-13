import React from 'react';
import handHart from '../../pic/handHart.png';
import s from './Header.module.css';


export const Header = () => {
  return (
  <div className={s.Header}>
        <div className={s.slideBox}>
          <div className={s.slideEl}>
            <p>Love LOve LOVE</p>
            <img src={handHart} />
          </div>
          <div className={s.slideEl}>
            <p>Eat EaT EAT</p>
            <img src={handHart} />
          </div>
          <div className={s.slideEl}>
            <p>Sex sEx SEX</p>
            <img src={handHart} />
          </div>
        </div>
      </div>
  );
}


