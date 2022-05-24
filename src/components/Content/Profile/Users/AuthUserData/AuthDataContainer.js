import React from 'react';
import AuthUserData from './AuthUserData';
import { connect } from 'react-redux';
import { logoutThunk } from '../../../../../redux/auth-reducer';

class AuthDataContainer extends React.Component {
  render() {
    return <AuthUserData {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});


export default connect(mapStateToProps, { logoutThunk })(
  AuthDataContainer
);
