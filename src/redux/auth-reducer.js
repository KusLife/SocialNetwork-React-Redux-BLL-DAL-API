import { usersAPI } from "../api/api";



const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

export const authUserDataAC = (id, email, login) => ({
  type: SET_USER_DATA,
  data: { id, email, login },
});


export const myAuthent = () => {
  return (dispatch) => {usersAPI.getMyAuthent().then((respons) => {
  if (respons.data.resultCode === 0) {
    let { id, email, login } = respons.data.data;
    dispatch(authUserDataAC(id, email, login));
  }
});
}}

export default authUserReducer;
