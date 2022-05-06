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
  //Curly brackets in 'post' are not necessary if we use 'axios.create'
  getUsersFollow(id) {
    return instance.post(`follow/${id}`,{})
  },
  getUsersUnfollow(id) {
    return instance.delete(`follow/${id}`)
  },
  //This is just an exeple of longer type but the same logic
  getProfile(id) {
    return instance.get(`profile/${id}`).then((respons) => respons.data)
  },
  getMyAuthent() {
    return instance.get(`auth/me`)
  },
  getMyProfile(myId) {
    // debugger
    return instance.get(`profile/${myId}`).then((respons) => respons.data)
  }
};
