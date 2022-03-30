import React from 'react';
import {
  addMessageActionCreater,
  updateMessageActionCreater,
} from '../../../redux/messege-reducer';
import { MyMsgs } from './MyMsgs';

const MyMsgsContainer = (props) => {
  let addMsgTxt = () => {
    props.store.dispatch(addMessageActionCreater());
  };
  let onChangeMsgTxt = (text) => {
    props.store.dispatch(updateMessageActionCreater(text));
  };
  let state = props.store.getState()
  return (
    <div>
     
     < MyMsgs addMsgTxt={addMsgTxt} state={state} onChangeMsgTxt={onChangeMsgTxt} />

    
    </div>
  );
};

export default MyMsgsContainer
