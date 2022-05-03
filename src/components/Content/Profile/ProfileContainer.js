import React from 'react';
import { connect } from 'react-redux';
import {
  onChangeTextAC,
  addPostAC,
  setUserProfile,
  profileThunk,
} from '../../../redux/post-ev-reducer';
import Profile from './Profile';
import withAuthRedirect from '../../../hoc/withAuthRedirect';
import withRouter from '../../../hoc/withRouter';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId
    this.props.profileThunk(userId)
    // if (!userId) {userId = 23641}
  }
  render() {
    return <Profile {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  return {
    //this data is in the 'post-ev-reducer'
    newPostTxt: state.eventsData.newPostTxt,
    profile: state.eventsData.profile,
  };
};


export default connect(mapStateToProps, {
  onChangeTextAC,
  addPostAC,
  setUserProfile,
  profileThunk
})(withAuthRedirect(withRouter(ProfileContainer)));
// 