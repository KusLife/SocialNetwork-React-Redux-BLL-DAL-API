import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  messageError: '',
};

const authUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const authUserDataAC = (id, email, login, isAuth, messageError) => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth, messageError },
});

export const myAuthent = () => {
  return (dispatch) => {
    authAPI.getMyAuthent().then((respons) => {
      if (respons.data.resultCode === 0) {
        let { id, email, login } = respons.data.data;
        dispatch(authUserDataAC(id, email, login, true));
      }
    });
  };
};

export const loginThunk = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.getLogin(email, password, rememberMe).then((respons) => {
      if (respons.data.resultCode === 0) {
        dispatch(myAuthent());
      } else {
        dispatch(
          authUserDataAC(null, null, null, false, respons.data.messages)
        );
      }
    });
  };
};

export const logoutThunk = () => {
  return (dispatch) => {
    authAPI.getLogout().then((respons) => {
      if (respons.data.resultCode === 0) {
        dispatch(myAuthent(null, null, null, false));
      }
    });
  };
};

export default authUserReducer;
