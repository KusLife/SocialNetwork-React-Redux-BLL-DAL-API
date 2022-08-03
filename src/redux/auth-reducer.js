// import { type } from '@testing-library/user-event/dist/type';
import { authAPI, getCaptchaAPI } from '../api/api';

const SET_USER_DATA = 'UNIK_KEY_FOR/SET_USER_DATA';
const GET_CAPTCHA_URL = 'UNIK_KEY_FOR/GET_CHAPTHCA_URL';

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  messageError: '',
  captchaURL: null,
};

const authUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL:
      
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const authUserDataAC = (id, email, login, isAuth, messageError) => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth, messageError },
});

const captchaAC = (captchaURL) => ({
  type: GET_CAPTCHA_URL,
  payload: { captchaURL },
});

export const captchaThunk = () => async (dispatch) => {
  let respons = await getCaptchaAPI.getCaptchaURL();
  let captchaURL = respons.data.url;
  dispatch(captchaAC(captchaURL))
};

export const myAuthent = () => async (dispatch) => {
  let respons = await authAPI.getMyAuthent();
  if (respons.data.resultCode === 0) {
    let { id, email, login } = respons.data.data;
    dispatch(authUserDataAC(id, email, login, true));
  }
};


export const loginThunk = (email, password, rememberMe, captcha) => async (dispatch) => {
  let respons = await authAPI.getLogin(email, password, rememberMe, captcha);
  if (respons.data.resultCode === 0) {
    dispatch(myAuthent());
  } else {
    if (respons.data.resultCode === 10) {
      dispatch(captchaThunk())
    }
    dispatch(authUserDataAC(null, null, null, false, respons.data.messages));
  }
};

export const logoutThunk = () => async (dispatch) => {
  let respons = await authAPI.getLogout();
  if (respons.data.resultCode === 0) {
    dispatch(myAuthent(null, null, null, false));
  }
};

export default authUserReducer;
