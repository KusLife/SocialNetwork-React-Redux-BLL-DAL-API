import React from 'react';
import { Msgs } from './Msgs/Msgs';
import s from './MyMsgs.module.css';
import { Respons } from '../Respons/Respons';

export const MyMsgs = (props) => {
  let MsgElements = props.state.textMsg.map((it) => (
    <Msgs id={it.id} text={it.text} time={it.time} />
  ));

  return (
    <div className={s.Msgs}>
      {MsgElements}

      <Respons />
    </div>
  );
};
