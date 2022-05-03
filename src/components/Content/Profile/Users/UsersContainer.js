import React from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import {
  // follow,
  followThunk,
  unfollowThunk,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching,
  setButtonDisable,
  getUsersThunkCreator,
} from '../../../../redux/users-reducer';
import Users from './Users';
import PreloaderGif from '../../../../common/preloader/PreloaderGif';
// import { usersAPI } from '../../../../api/api';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.currentPage,
      this.props.pageSize
    );
    // this.props.setIsFetching(true);

    // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
    //     this.props.setUsers(data.items);
    //     this.props.setTotalUsersCount(data.totalCount);
    //     this.props.setIsFetching(false);
    //   });
  }

  onPageChange = (pageNumber) => {
    this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);

    // this.props.setIsFetching(true);
    // this.props.setCurrentPage(pageNumber);

    // usersAPI.getUsers(pagesNumber, this.props.pageSize).then((data) => {
    //     this.props.setUsers(data.items);
    //     this.props.setIsFetching(false);
    //   });
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
          // follow={this.props.follow}
          followThunk={this.props.followThunk}
          unfollowThunk={this.props.unfollowThunk}
          // unfollow={this.props.unfollow}
          setButtonDisable={this.props.setButtonDisable}
          isButtonDisable={this.props.isButtonDisable}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersData.users,
    pageSize: state.usersData.pageSize,
    totalUsersCount: state.usersData.totalUsersCount,
    currentPage: state.usersData.currentPage,
    isFetching: state.usersData.isFetching,
    isButtonDisable: state.usersData.isButtonDisable,
  };
};

export default connect(mapStateToProps, {
  // follow,
  followThunk,
  unfollowThunk,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching,
  setButtonDisable,
  getUsersThunkCreator,
})(UsersContainer);
