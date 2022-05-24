import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

function withAuthRedirect(Component) {
  const authRedirect = (props) => {
    if (!props.isAuth) return <Navigate to="/login" />;
    return <Component {...props} />;
  };
  let connectedAuthRedirect = connect(mapStateToPropsRedirec)(authRedirect);
  return connectedAuthRedirect;
}

let mapStateToPropsRedirec = (state) => ({ isAuth: state.auth.isAuth });

export default withAuthRedirect;
