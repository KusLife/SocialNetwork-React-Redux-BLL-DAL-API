export const addPotsEvActionCreater = () => ({ type: ADD_POST_EV });
export const updateNewPostTxtActionCreater = (text) => ({
  type: UPDATE_NEW_POST_TXT,
  updateTxt: text,
});
const ADD_POST_EV = 'ADD-POST-EV';
const UPDATE_NEW_POST_TXT = 'UPDATE-NEW-POST-TXT';

const postEvReducer = (state, action) => {
  switch(action.type) {
    case ADD_POST_EV:
      let newPostEvItem = {
        key: '',
        id: 6,
        data: '11.5.22',
        ev: state.newPostTxt,
      };
      state.eventsList.push(newPostEvItem);
      state.newPostTxt = '';
      return state
    case UPDATE_NEW_POST_TXT:
      state.newPostTxt = action.updateTxt;
      return state
    default:
      return state
  }
// SECOND VARIANT
  // if (action.type === ADD_POST_EV) {
  //   let newPostEvItem = {
  //     key: '',
  //     id: 6,
  //     data: '11.5.22',
  //     ev: state.newPostTxt,
  //   };
  //   state.eventsData.push(newPostEvItem);
  //   state.newPostTxt = '';
  // } else if (action.type === UPDATE_NEW_POST_TXT) {
  //   state.newPostTxt = action.updateTxt;
  // }
  // return state;
};

export default postEvReducer;
