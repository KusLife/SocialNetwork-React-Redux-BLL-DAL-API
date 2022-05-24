import React from 'react';
import { connect } from 'react-redux';
import {
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
    let myId = this.props.myId

    this.props.profileThunk(userId);
    this.props.myProfileThunk(myId);
    this.props.statusThunk(myId);
  }
  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    myProfile: state.eventsData.myProfile,
    profile: state.eventsData.profile,
    status: state.eventsData.status,
    myId: state.auth.id,
  };
};
//this data is in the 'post-ev-reducer'

export default connect(mapStateToProps, {
  setUserProfileAC,
  statusThunk,
  updateStatusThunk,
  profileThunk,
  myProfileThunk,
})(withRouter(withAuthRedirect(ProfileContainer)));