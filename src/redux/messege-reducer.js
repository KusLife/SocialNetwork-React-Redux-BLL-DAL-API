export const addMsgActionCreater = () => ({ type: ADD_MSG });
export const updateNewMsgTxtActionCreater = (text) => ({
  type: UPDATE_NEW_MSG_TXT,
  updateMsgTxt: text,
});
const ADD_MSG = 'ADD_MSG';
const UPDATE_NEW_MSG_TXT = 'UPDATE-NEW-MSG-TXT';

const messageReducer = (state, action) => {
  switch(action.type) {
    case ADD_MSG:
      let newMsgItem = {
        id: 6,
        time: '15:53',
        text: state.newMsgTxt,
      };
      state.msgsList.push(newMsgItem);
      state.newMsgTxt = '';
      return state;
    case UPDATE_NEW_MSG_TXT:
      state.newMsgTxt = action.updateMsgTxt;
      return state
    default:
      return state
  };

// SECOND METHOD 
  // if (action.type === ADD_MSG) {
  //   let newMsgItem = {
  //     id: 6,
  //     time: '15:53',
  //     text: state.newMsgTxt,
  //   };
  //   state.msgsData.push(newMsgItem);
  //   state.newMsgTxt = '';
  // } else if (action.type === UPDATE_NEW_MSG_TXT) {
  //   state.newMsgTxt = action.updateMsgTxt;
  // }
  // return state
}

export default messageReducer;
