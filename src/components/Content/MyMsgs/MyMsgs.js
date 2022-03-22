import React from 'react';
import { Msgs } from './Msgs/Msgs';
import s from './MyMsgs.module.css';
import { Respons } from '../Respons/Respons';
import {
  addMsgActionCreater,
  updateNewMsgTxtActionCreater,
} from '../../../redux/messege-reducer';

export const MyMsgs = (props) => {
  let MsgElements = props.store
    .getState()
    .msgsData.msgsList.map((it) => <Msgs id={it.id} text={it.text} time={it.time} />);

  let newMsg = React.createRef();
  let addMsg = () => {
    props.store.dispatch(addMsgActionCreater());
  };
  let onChangeMsg = () => {
    let text = newMsg.current.value;
    props.store.dispatch(updateNewMsgTxtActionCreater(text));
  };
  return (
    <div className={s.Msgs}>
      {MsgElements}

      <Respons />

      <div></div>
      <textarea
        onChange={onChangeMsg}
        ref={newMsg}
        value={props.store.getState().msgsData.newMsgTxt}
      />
      <button onClick={addMsg}>Post</button>
    </div>
  );
};
