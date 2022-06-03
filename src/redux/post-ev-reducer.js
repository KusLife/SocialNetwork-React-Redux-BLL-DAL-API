import { profileAPI, usersAPI } from '../api/api';

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_MY_PROFILE = 'SET_MY_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
  eventsList: [
    { key: '', id: 1, data: '2.21.22', ev: 'Meating with Teammembers' },
    { key: '', id: 2, data: '8.3.22', ev: "Women's day" },
    { key: '', id: 3, data: '15.3.22', ev: 'First fast for peace' },
    { key: '', id: 4, data: '4.4.22', ev: 'Glamoure show' },
    { key: '', id: 5, data: '3.5.22', ev: 'Queen and King' },
  ],
  profile: null,
  myProfile: null,
};

const postEvReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPostEvItem = {
        key: '',
        id: 6,
        data: '11.5.22',
        ev: action.newPost,
      };
      return {
        eventsList: [...state.eventsList, newPostEvItem],
      };

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_MY_PROFILE: {
      return { ...state, myProfile: action.myProfile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    case DELETE_POST: {
      return {
        ...state,
        eventsList: state.eventsList.filter((p) => p.id !== action.postId),
      };
    }
    default:
      return state;
  }
};

// Action Creators
export const addPostAC = (newPost) => ({ type: ADD_POST, newPost });

export const setUserProfileAC = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setMyProfileAC = (myProfile) => ({
  type: SET_MY_PROFILE,
  myProfile,
});
export const setStatusAC = (status) => ({
  type: SET_STATUS,
  status,
});
export const delitPostAC = (postId) => ({ type: DELETE_POST, postId });

// Thunk with async await
export const profileThunk = (userId) => async (dispatch) => {
  let data = await usersAPI.getProfile(userId);
  dispatch(setUserProfileAC(data));
};

export const myProfileThunk = (myId) => async (dispatch) => {
  let data = await usersAPI.getMyProfile(myId);
  dispatch(setMyProfileAC(data));
};

// A Thunk with 'then' using in code
export const statusThunk = (id) => (dispatch) => {
  profileAPI.getStatus(id).then((data) => {
    dispatch(setStatusAC(data));
  });
};

// A Thunk using 'then' in code
export const updateStatusThunk = (status) => async (dispatch) => {
  let data = await profileAPI.getUpdatedStatus(status);

  if (data.resultCode === 0) {
    dispatch(setStatusAC(status));
  }
};

export default postEvReducer;
