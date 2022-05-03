import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  onChangeTextAC,
  addPostAC,
  setUserProfile,
  profileThunk,
} from '../../../redux/post-ev-reducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.profileThunk(this.props.router.params.userId)
  }
  render() {
    return <Profile {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  return {
    newPostTxt: state.eventsData.newPostTxt,
    profile: state.eventsData.profile,
  };
};

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}

export default connect(mapStateToProps, {
  onChangeTextAC,
  addPostAC,
  setUserProfile,
  profileThunk
})(withRouter(ProfileContainer));
