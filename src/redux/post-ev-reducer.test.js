import postEvReducer, { addPostAC, delitPostAC } from './post-ev-reducer';
// 1. Test data
let state = {
  eventsList: [
    { key: '', id: 1, data: '2.21.22', ev: 'Meating with Teammembers' },
    { key: '', id: 2, data: '8.3.22', ev: "Women's day" },
    { key: '', id: 3, data: '15.3.22', ev: 'First fast for peace' },
    { key: '', id: 4, data: '4.4.22', ev: 'Glamoure show' },
    { key: '', id: 5, data: '3.5.22', ev: 'Queen and King' },
  ],
};

// tests of existing files
it('State should be incremented', () => {
  // 2. Action
  let action = addPostAC('LAlalaal');
  let newState = postEvReducer(state, action);

  // 3. Result expect
  expect(newState.eventsList.length).toBe(6);
});

it('data should be correct', () => {
  // 2. Action
  let action = addPostAC('LAlalaal');
  let newState = postEvReducer(state, action);

  // 3. Result expect
  expect(newState.eventsList[5].ev).toBe('LAlalaal');
});

it('post should be delited', () => {
  let action = delitPostAC(1)
  let newState = postEvReducer(state, action)


  expect(newState.eventsList.length).toBe(4)
})