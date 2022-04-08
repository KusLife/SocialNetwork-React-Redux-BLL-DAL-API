import { connect } from 'react-redux';
import {
  addPotsEventActionCreater,
  updateTextActionCreater,
} from '../../../redux/post-ev-reducer';
import { Profile } from './Profile';

const mapStateToProps = (state) => {
  return {
    newPostTxt: state.eventsData.newPostTxt,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPotsEventActionCreater());
    },
    onChangeText: (text) => {
      dispatch(updateTextActionCreater(text));
    },
  };
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;
