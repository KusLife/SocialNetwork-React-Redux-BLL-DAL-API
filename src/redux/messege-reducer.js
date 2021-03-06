const ADD_MSG = 'ADD_MSG';

let initialState = {
  msgsList: [
    { id: 1, time: '10:19', text: 'Hey' },
    { id: 2, time: '10:20', text: 'Are u fine? Where you have been?' },
    {
      id: 3,
      time: '10:23',
      text: 'Tempor fugiat officia amet dolor. Nisi irure laboris in ullamco cupidatat adipisicing eiusmod laborum. Esse Lorem cillum occaecat pariatur. Excepteur consequat enim enim non exercitation nulla non velit. Pariatur Lorem laborum anim tempor do nulla ex magna. Sunt exercitation ullamco Lorem aliquip minim elit incididunt. Aliqua dolore sunt nostrud proident ipsum ullamco in est.',
    },
    { id: 4, time: '10:25', text: 'Is your mom okay?' },
    { id: 5, time: '11:02', text: 'As for  me , am well:)' },
  ],
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MSG:
      let newMsgItem = {
        id: 6,
        time: '15:53',
        text: action.newMessage,
      };
      return {
        msgsList: [...state.msgsList, newMsgItem],
      }; 
      default:
      return state;
  }
};

export const sendMessageAC = (newMessage) => ({ type: ADD_MSG , newMessage});


export default messageReducer;
