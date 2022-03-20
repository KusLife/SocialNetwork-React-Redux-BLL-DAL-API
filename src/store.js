let store = {
  _state: {
    eventsData: [
      { key: '', id: 1, data: '2.21.22', ev: 'Meating with Teammembers' },
      { key: '', id: 2, data: '8.3.22', ev: "Women's day" },
      { key: '', id: 3, data: '15.3.22', ev: 'First fast for peace' },
      { key: '', id: 4, data: '4.4.22', ev: 'Glamoure show' },
      { key: '', id: 5, data: '3.5.22', ev: 'Queen and King' },
    ],
    newPostTxt: 'Gime all ur LOVE!',
    textMsg: [
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
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscriber(observer) {
    this._callSubscriber = observer;
  },

  _addPotsEv() {
    let newPostEv = {
      key: '',
      id: 6,
      data: '11.5.22',
      ev: this._state.newPostTxt,
    };
    this._state.eventsData.push(newPostEv);
    this._callSubscriber(this._state);
    this.getState().newPostTxt=''
  },
  _updateNewPostTxt(updateTxt) {
    this._state.newPostTxt = updateTxt;
    this._callSubscriber(this._state);
  },
  

  dispatch(action) {
    if (action.type === 'ADD-POST-EV') {
      this._addPotsEv()
    } else if (action.type === 'UPDATE-NEW-POST-TXT') {
      this._updateNewPostTxt(action.updateTxt)
    }
  },
};

window.store = store;
export default store;
