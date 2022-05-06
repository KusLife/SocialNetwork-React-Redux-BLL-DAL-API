import React from 'react';
import { connect } from 'react-redux';
import {
  onChangeTextAC,
  addPostAC,
  setUserProfile,
  profileThunk,
  myProfileThunk,
} from '../../../redux/post-ev-reducer';
import Profile from './Profile';
import withAuthRedirect from '../../../hoc/withAuthRedirect';
import withRouter from '../../../hoc/withRouter';
// import { compose } from 'redux';
class ProfileContainer extends React.Component {
  componentDidMount() {
    let myId = 23641
    this.props.myProfileThunk(myId);

    let userId = this.props.router.params.userId;
    this.props.profileThunk(userId);

    

  }
  render() {
    // debugger;
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  // debugger;
  return {
    newPostTxt: state.eventsData.newPostTxt,
    profile: state.eventsData.profile,
    myProfile: state.eventsData.myProfile,
  };
};
//this data is in the 'post-ev-reducer'

export default connect(mapStateToProps, {
  onChangeTextAC,
  addPostAC,
  setUserProfile,
  profileThunk,
  myProfileThunk,
})(withAuthRedirect(withRouter(ProfileContainer)));
//
