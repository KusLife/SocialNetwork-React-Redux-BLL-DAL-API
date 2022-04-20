import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC } from '../../../redux/users-reducer';
import Users from './UsersC';


const mapStateToProps = (state) => {
  return {
    users: state.usersData.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    }
   
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;