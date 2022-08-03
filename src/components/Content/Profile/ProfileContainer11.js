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


class ProfileContainer extends React.Component {

  
  refreshProfile() {
    let userId = this.props.router.params.userId;
    let myId = this.props.myId;
    
    this.props.profileThunk(userId);
    this.props.myProfileThunk(myId);
    this.props.statusThunk(myId);
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps, prevState) {
     console.log('did update works')
    if ( this.props.router.params.userId !== prevProps.router.params.userId || this.props.myId !== prevProps.myId
    ) {this.refreshProfile()}
    console.log('after reupdate')
  }

  render() {
    return <Profile {...this.props}
    isOwner={this.props.myId}/>;
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
  savePhotoThunk,
  saveProfileInfoThunk

})(withRouter(withAuthRedirect(ProfileContainer)));