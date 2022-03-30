import React from 'react';
import {
  addMessageActionCreater,
  updateMessageActionCreater,
} from '../../../redux/messege-reducer';
import StoreContext from '../../../storeContext';
import { MyMsgs } from './MyMsgs';

const MyMsgsContainer = () => {
  return (
    <div>
      <StoreContext.Consumer>
        {(store) => {
          let addMsgTxt = () => {
            store.dispatch(addMessageActionCreater());
          };
          let onChangeMsgTxt = (text) => {
            store.dispatch(updateMessageActionCreater(text));
          };
          let state = store.getState();
          return (
            <MyMsgs
              addMsgTxt={addMsgTxt}
              state={state}
              onChangeMsgTxt={onChangeMsgTxt}
            />
          );
        }}
      </StoreContext.Consumer>
    </div>
  );
};

export default MyMsgsContainer;
