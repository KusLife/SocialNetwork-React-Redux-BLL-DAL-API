import React from 'react';
import { connect } from 'react-redux';
import {
  followThunk,
  unfollowThunk,
  getUsersThunkCreator,
} from '../../../../redux/users-reducer';
import Users from './Users';
import PreloaderGif from '../../../../common/preloader/PreloaderGif';
import { compose } from 'redux';
import { slctCurrentPage, slctIsButtonDisable, slctIsFetching, slctPageSize, slctTotalUsersCount, slctUsers } from '../../../../redux/users-selectors';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.currentPage,
      this.props.pageSize
    );
  }

  onPageChange = (pageNumber) => {
    this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <PreloaderGif /> : null}
        <Users
          pageSize={this.props.pageSize}
          totalUsersCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage}
          onPageChange={this.onPageChange}
          users={this.props.users}
          followThunk={this.props.followThunk}
          unfollowThunk={this.props.unfollowThunk}
          setButtonDisable={this.props.setButtonDisable}
          isButtonDisable={this.props.isButtonDisable}
        />
      </>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     users: state.usersData.users,
//     pageSize: state.usersData.pageSize,
//     totalUsersCount: state.usersData.totalUsersCount,
//     currentPage: state.usersData.currentPage,
//     isFetching: state.usersData.isFetching,
//     isButtonDisable: state.usersData.isButtonDisable,
//   };
// };


const mapStateToProps = (state) => {
  return {
    users: slctUsers(state),
    pageSize: slctPageSize(state),
    totalUsersCount: slctTotalUsersCount(state),
    currentPage: slctCurrentPage(state),
    isFetching: slctIsFetching(state),
    isButtonDisable: slctIsButtonDisable(state),
  };
};

export default connect(mapStateToProps, {
  followThunk,
  unfollowThunk,
  getUsersThunkCreator,
})(compose((UsersContainer)))
