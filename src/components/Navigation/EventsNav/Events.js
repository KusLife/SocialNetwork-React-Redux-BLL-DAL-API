import React from 'react';
import s from './Events.module.css';


export const Events = (props) => {
  return (
    <div className={s.wraperEv}>
      <div className={s.Ev_Item}>
      <h1>{props.ev}</h1>
        <p>Duis laborum nisi officia excepteur incididunt minim anim exercitation eiusmod proident ut consequat. Velit laboris cillum anim proident est sint duis pariatur laboris aliqua nulla id laborum. Mollit fugiat elit reprehenderit enim adipisicing Lorem veniam anim.</p>
      </div>
    </div>
  );
};
