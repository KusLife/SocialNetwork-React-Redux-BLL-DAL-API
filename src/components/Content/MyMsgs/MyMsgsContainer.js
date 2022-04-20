import {
  addMessageActionCreater,
  updateMessageActionCreater,
} from '../../../redux/messege-reducer';
import { MyMsgs } from './MyMsgs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    msgsList: state.msgsData.msgsList,
    newMsgTxt: state.msgsData.newMsgTxt,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMsgTxt: () => {
      dispatch(addMessageActionCreater());
    },
    onChangeMsgTxt: (text) => {
      dispatch(updateMessageActionCreater(text));
    },
  };
};

const MyMsgsContainer = connect(mapStateToProps, mapDispatchToProps)(MyMsgs);

export default MyMsgsContainer;