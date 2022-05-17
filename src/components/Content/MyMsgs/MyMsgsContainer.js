import { sendMessageAC } from '../../../redux/messege-reducer';
import { MyMsgs } from './MyMsgs';
import { connect } from 'react-redux';
import withAuthRedirect from '../../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
  return {
    msgsList: state.msgsData.msgsList,
    newMsgTxt: state.msgsData.newMsgTxt,
  };
};

// Extra code for better readind and understanding
// but I put the AC straight making same varieble
// let mapDispatchToProps = (dispatch) => {
//   return {
//     sendMessage: (values) => {
//       dispatch(sendMessageAC(values.newMessage));
//     },
//   };
// };

const MyMsgsContainer = connect(
  mapStateToProps,
  {sendMessageAC}
)(withAuthRedirect(MyMsgs));

export default MyMsgsContainer;
