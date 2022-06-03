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
import {
  slctCurrentPage,
  slctIsButtonDisable,
  slctIsFetching,
  slctPageSize,
  slctTotalUsersCount,
  slctUsers,
} from '../../../../redux/users-selectors';

class UsersContainer extends React.Component {
  componentDidMount() {
    const { currentPage, pageSize, getUsersThunkCreator } = this.props;
    getUsersThunkCreator(currentPage, pageSize);
  }

  onPageChange = (pageNumber) => {
    const { getUsersThunkCreator, pageSize } = this.props;
    getUsersThunkCreator(pageNumber, pageSize);
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
})(compose(UsersContainer));
