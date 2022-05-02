import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    'API-KEY': '89e45cc4-a7b2-4ec6-95c2-842d8cade3ec',
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((respons) => respons.data);
  },
  getUsersFollow(id) {
    return instance.post(`follow/${id}`,{}).then((respons) => respons.data);
  },
  getUsersUnfollow(id) {
    return instance.delete(`follow/${id}`).then((respons) => respons.data);
  },
  getProfile(id) {
    return instance.get(`profile/${id}`).then((respons) => respons.data)
  },
  getMyAuthent() {
    return instance.get(`auth/me`).then((respons) => respons.data)
  }
  
};

// axios
// .delete(
//   `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
//   {
//     withCredentials: true,
//     headers: {
//       'API-KEY': '89e45cc4-a7b2-4ec6-95c2-842d8cade3ec',
//     },
//   }
// )
// .then((response) => {
//   if (response.data.resultCode === 0) {
//     props.unfollow(u.id);
//   }
// });
