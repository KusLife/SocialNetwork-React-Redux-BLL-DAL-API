import React from 'react';
import { connect } from 'react-redux';
import {
  setUserProfileAC,
  statusThunk,
  updateStatusThunk,
  profileThunk,
  myProfileThunk,
  savePhotoThunk,
  saveProfileInfoThunk
} from '../../../redux/post-ev-reducer';
import Profile from './Profile';
import withAuthRedirect from '../../../hoc/withAuthRedirect';
import withRouter from '../../../hoc/withRouter';
import { useEffect } from 'react';


const ProfileContainer = (props) => {

  function refreshProfile() {
    let userId = props.router.params.userId;
    let myId = props.myId

    props.profileThunk(userId);
    props.myProfileThunk(myId);
    props.statusThunk(myId);
  }

  useEffect( () => {
    refreshProfile()
  }, [])


  {
    return <Profile {...props}
    isOwner={props.myId}/>;
  }
}

const mapStateToProps = (state) => {
  return {
    myProfile: state.eventsData.myProfile,
    profile: state.eventsData.profile,
    status: state.eventsData.status,
    myId: state.auth.id,
    errorMessage: state.eventsData.errorMessage
  };
};
//this data is in the 'post-ev-reducer'

export default connect(mapStateToProps, {
  setUserProfileAC,
  statusThunk,
  updateStatusThunk,
  profileThunk,
  myProfileThunk,
  savePhotoThunk,
  saveProfileInfoThunk

})(withRouter(withAuthRedirect(ProfileContainer)));