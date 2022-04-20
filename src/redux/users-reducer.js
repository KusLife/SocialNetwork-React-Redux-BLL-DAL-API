const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users:[ ]
}
// let initialState = {
//   users: [
//     {
//       id: 1,
//       followed: false,
//       avatar: <img src="" alt="" />,
//       name: 'Evhen',
//       status: '3D Modeling',
//       location: { country: 'Ukraine', city: 'Kiev' },
//     },
//     {
//       id: 2,
//       followed: true,
//       avatar: <img src="" alt="" />,
//       name: 'Denis',
//       status: 'UI Desiner',
//       location: { country: 'Ukraine', city: 'Kharkiv' },
//     },
//     {
//       id: 3,
//       followed: false,
//       avatar: <img src="" alt="" />,
//       name: 'Pavel',
//       status: 'IT-school Teatcher',
//       location: { country: 'Ukraine', city: 'Odessa' },
//     },
//     {
//       id: 4,
//       followed: false,
//       avatar: <img src="" alt="" />,
//       name: 'Nikita',
//       status: 'AI Engenear',
//       location: { country: 'Ukraine', city: 'Kiev' },
//     },
//   ],
// };

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }
    default:
      return state;
  }
};



export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
