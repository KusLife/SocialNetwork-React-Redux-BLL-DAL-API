import React from 'react';
import { connect } from 'react-redux';
import {
  onChangeTextAC,
  addPostAC,
  setUserProfileAC,
  statusThunk,
  updateStatusThunk,
  profileThunk,
  myProfileThunk,
} from '../../../redux/post-ev-reducer';
import Profile from './Profile';
import withAuthRedirect from '../../../hoc/withAuthRedirect';
import withRouter from '../../../hoc/withRouter';
// import { compose } from 'redux';
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    // if (!userId ) {
    //   userId = 23641
    // }
    let myId = 23641
    // let myId = 23761
    
    this.props.profileThunk(userId);
    this.props.myProfileThunk(myId);
    this.props.statusThunk(myId)

    

  }
  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    newPostTxt: state.eventsData.newPostTxt,
    profile: state.eventsData.profile,
    myProfile: state.eventsData.myProfile,
    status: state.eventsData.status,
  };
};
//this data is in the 'post-ev-reducer'

export default connect(mapStateToProps, {
  onChangeTextAC,
  addPostAC,
  setUserProfileAC,
  statusThunk,
  updateStatusThunk,
  profileThunk,
  myProfileThunk,
})(withAuthRedirect(withRouter(ProfileContainer)));
//
