import { profileAPI, usersAPI } from '../api/api';

const ADD_POST_EV = 'ADD_POST_EV';
const UPDATE_NEW_POST_TXT = 'UPDATE_NEW_POST_TXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_MY_PROFILE = 'SET_MY_PROFILE';
const SET_STATUS = 'SET_STATUS'
// const UPDATE_STATUS = 'UPDATE_STATUS'

let initialState = {
  newPostTxt: 'Gime all ur LOVE!',
  eventsList: [
    { key: '', id: 1, data: '2.21.22', ev: 'Meating with Teammembers' },
    { key: '', id: 2, data: '8.3.22', ev: "Women's day" },
    { key: '', id: 3, data: '15.3.22', ev: 'First fast for peace' },
    { key: '', id: 4, data: '4.4.22', ev: 'Glamoure show' },
    { key: '', id: 5, data: '3.5.22', ev: 'Queen and King' },
  ],
  profile: null,
  myProfile: null,
  status: '',
};

const postEvReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_EV:
      let newPostEvItem = {
        key: '',
        id: 6,
        data: '11.5.22',
        ev: state.newPostTxt,
      };
      return {
        eventsList: [...state.eventsList, newPostEvItem],
        newPostTxt: '',
      };
    case UPDATE_NEW_POST_TXT: {
      return { ...state, newPostTxt: action.updateTxt };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_MY_PROFILE : {
      return { ...state, myProfile: action.myProfile}
    }
    case SET_STATUS : {
      return { ...state, status: action.status}
    }
    // case UPDATE_STATUS : {
    //   return { ...state, status: action.status}
    // }
    default:
      return state;
  }
};

// Action Creators
export const addPostAC = () => ({ type: ADD_POST_EV });
export const onChangeTextAC = (text) => ({
  type: UPDATE_NEW_POST_TXT,
  updateTxt: text,
});
export const setUserProfileAC = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setMyProfileAC = (myProfile) => ({
  type: SET_MY_PROFILE, 
  myProfile
})
export const setStatusAC = (status) => ({
  type: SET_STATUS,
  status
}) 
// export const updateStatusAC = (status) => ({
//   type: UPDATE_STATUS,
//   status
// })



// Thunks
export const profileThunk = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId).then((data) => {
      dispatch(setUserProfileAC(data));
    });
  };
};

export const myProfileThunk = (myId) => {
  return (dispatch) => {
    usersAPI.getMyProfile(myId).then((data) => {
      dispatch(setMyProfileAC(data))
    } )
  } 
}

export const statusThunk = (id) => {
  return (dispatch) => {
    profileAPI.getStatus(id).then((data) => {
      dispatch(setStatusAC(data))
    })
  }
}

export const updateStatusThunk = (status) => {
  return (dispatch) => {
    profileAPI.getUpdatedStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setStatusAC(status))
      }
    })
  }
}

export default postEvReducer;
