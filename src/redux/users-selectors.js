export let slctUsers = (state) => {
    return state.usersData.users
}

export let slctPageSize = (state) => {
    return  state.usersData.pageSize
}

export let slctTotalUsersCount = (state) => {
    return  state.usersData.totalUsersCount
}

export let slctCurrentPage = (state) => {
    return  state.usersData.currentPage
}

export let slctIsFetching = (state) => {
    return  state.usersData.isFetching
}

export let slctIsButtonDisable = (state) => {
    return  state.usersData.isButtonDisable
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