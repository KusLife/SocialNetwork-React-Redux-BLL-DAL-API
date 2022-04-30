import React from 'react';
import { Msgs } from './Msgs/Msgs';
import s from './MyMsgs.module.css';
import { Respons } from './Msgs/Respons/Respons';
// import storeContext from '../../../storeContext'


export const MyMsgs = (props) => {
  let MsgElements = props.msgsList.map((it) => (
    <Msgs id={it.id} text={it.text} time={it.time} />
  ));

  let newMsg = React.createRef();
  let addMsg = () => {
    props.addMsgTxt();
  };
  let onChangeMsg = () => {
    let text = newMsg.current.value;
    props.onChangeMsgTxt(text);
  };
  return (
    <div className={s.Msgs}>
      {MsgElements}

      <Respons />

      <div></div>
      <textarea
        onChange={onChangeMsg}
        ref={newMsg}
        value={props.newMsgTxt}
      />
      <button onClick={addMsg}>Post</button>
    </div>
  );
};
