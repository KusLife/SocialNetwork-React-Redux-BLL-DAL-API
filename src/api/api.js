import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    'API-KEY': '89e45cc4-a7b2-4ec6-95c2-842d8cade3ec',
  },
});

export const usersAPI = {
  //This is just an exeple of longer type but the same logic
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((respons) => respons.data);
  },
  //Curly brackets in 'post' are not necessary if we use 'axios.create'
  getUsersFollow(id) {
    return instance.post(`follow/${id}`, {});
  },
  getUsersUnfollow(id) {
    return instance.delete(`follow/${id}`);
  },
  // it's simply a link to keep backwords compatibility
  // Obsolete method , plz use "profileAPI"
  getProfile(id) {
    return profileAPI.getProfile(id)
  },
  getMyProfile(myId) {
    return profileAPI.getMyProfile(myId)
  },
};


export const profileAPI = {
  getProfile(id) {
    return instance.get(`profile/${id}`).then((respons) => respons.data);
  },
  // Little difernt spelling of the URI path
  getMyProfile(myId) {
    return instance.get(`profile/` + myId).then((respons) => respons.data);
  },
  getStatus(id) {
    return instance.get(`profile/status/${id}`).then((respons) => respons.data);
  },
  getUpdatedStatus(status) {
    return instance.put(`profile/status/`, {status: status}).then((respons) => respons.data);
  },
}

export const authAPI = {
  getMyAuthent() {
    return instance.get(`auth/me`);
  },
  getLogin(email, password, rememberMe) {
    return instance.post(`auth/login` ,  { email, password, rememberMe });
    // return instance.post(`auth/login` ,  { email: email}, {password: password}, {rememberMe: rememberMe });
  },
  getLogout() {
    return instance.delete(`auth/login`);
  },
};
