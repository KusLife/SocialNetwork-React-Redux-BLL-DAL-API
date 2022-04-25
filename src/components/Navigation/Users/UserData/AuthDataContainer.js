import React from 'react';
import UserData from './UserData';
import axios from 'axios';
import { connect } from 'react-redux';
import { authUserDataAC } from '../../../../redux/auth-reducer';

class AuthDataContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          debugger;
          let { id, email, login } = response.data.data;
          this.props.authUserDataAC(id, email, login);
        }
      });
  }

  render() {
    return <UserData {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { authUserDataAC })(AuthDataContainer);
