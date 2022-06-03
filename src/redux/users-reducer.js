import { usersAPI } from '../api/api';
import { updateObjectHellper } from './users-reducer-helper';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';
const IS_FETCHING = 'IS_FETCHING';
const IS_BUTTON_DISABLE = 'IS_BUTTON_DISABLE';

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  isButtonDisable: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectHellper(state.users, action.userId, 'id', {
          followed: true,
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectHellper(state.users, action.userId, 'id', {
          followed: false,
        }),
      };
      
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case IS_BUTTON_DISABLE: {
      return {
        ...state,
        isButtonDisable: action.inProces
          ? [...state.isButtonDisable, action.userId]
          : state.isButtonDisable.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: TOTAL_USERS_COUNT,
  count: totalUsersCount,
});
export const setIsFetching = (isFetching) => ({
  type: IS_FETCHING,
  isFetching,
});

export const setButtonDisable = (inProces, userId) => ({
  type: IS_BUTTON_DISABLE,
  inProces,
  userId,
});

export const getUsersThunkCreator = (pageNumber, currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setIsFetching(true));

    usersAPI.getUsers(pageNumber, currentPage, pageSize).then((data) => {
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
      dispatch(setCurrentPage(pageNumber));
      dispatch(setIsFetching(false));
    });
  };
};

const followUnfollowFlow = (dispatch, id, apiMethod, actionCreator) => {
  dispatch(setButtonDisable(true, id));
  if (apiMethod.data.resultCode === 0) {
    dispatch(actionCreator(id));
  }
  dispatch(setButtonDisable(false, id));
};

export const unfollowThunk = (id) => async (dispatch) => {
  followUnfollowFlow(
    dispatch,
    id,
    await usersAPI.getUsersUnfollow(id),
    unfollow
  );
};

export const followThunk = (id) => async (dispatch) => {
  followUnfollowFlow(dispatch, id, await usersAPI.getUsersFollow(id), follow);
};

export default usersReducer;
