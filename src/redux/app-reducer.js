// import { authAPI } from '../api/api';
import { myAuthent } from './auth-reducer';

const INITIALAZED_APP = 'INITIALAZED_APP';

const initialState = {
  isAppInitialazed: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALAZED_APP:
      return {
        ...state,
        isAppInitialazed: true,
      };
    default:
      return state;
  }
};

const initialazeAppAC = () => ({
  type: INITIALAZED_APP,
});

export const initialazeAppThunk = () => (dispatch) => {
  let promise = dispatch(myAuthent());
  Promise.all([promise]).then(() => {
    dispatch(initialazeAppAC());
  });
};

export default appReducer;
