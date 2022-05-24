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

const MyMsgsContainer = connect(
  mapStateToProps,
  {sendMessageAC}
)(MyMsgs);

export default withAuthRedirect(MyMsgsContainer);
