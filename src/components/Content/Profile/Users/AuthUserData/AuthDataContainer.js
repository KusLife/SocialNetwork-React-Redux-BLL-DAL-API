import React from 'react';
import AuthUserData from './AuthUserData';
import { connect } from 'react-redux';
import { authUserDataAC, myAuthent } from '../../../../../redux/auth-reducer';
// import { usersAPI } from '../../../../../api/api';

class AuthDataContainer extends React.Component {
  componentDidMount() {
    this.props.myAuthent()

    // usersAPI.getMyAuthent().then((respons) => {
    //     if (respons.data.resultCode === 0) {
    //       let { id, email, login } = respons.data.data;
    //       this.props.authUserDataAC(id, email, login);
    //     }
    //   });
  }

  render() {
    return <AuthUserData {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { authUserDataAC, myAuthent })(AuthDataContainer);
