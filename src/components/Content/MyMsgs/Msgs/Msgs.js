import React from 'react';
import s from './Msgs.module.css';

export const Msgs = (props) => {
  return (
    <div className={s.Msg}>
      <p className={s.msgTxt}>{props.text}</p>
      <p className={s.time}>{props.time}</p>
    </div>
  );
};
