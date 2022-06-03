import React from 'react';
import Pagenator from '../../../../common/Pagenator/Pagenator';
import User from './User';


let Users = (props) => {
  return (
    <div>
      <Pagenator
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChange={props.onPageChange}
      />
      <User
        users={props.users}
        isButtonDisable={props.isButtonDisable}
        unfollowThunk={props.unfollowThunk}
        followThunk={props.followThunk}
      />
    </div>
  );
};

export default Users;
