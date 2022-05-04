import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProfileContainer from '../Profile/ProfileContainer';
import UsersContainer from '../Profile/Users/UsersContainer';
import MyMsgsContainer from '../MyMsgs/MyMsgsContainer';
import EventsContainer from '../EventsPage/EventsContainer';
import Login from '../../Login/Login';
import s from './Content.module.css';

const Content = () => {
  return (
    <div className={s.Content}>
      <Routes>
        <Route path="profile/:userId" element={<ProfileContainer />} />;
        <Route path="users" element={<UsersContainer />} />;
        <Route path="myMsgs" element={<MyMsgsContainer />} />;
        <Route path="login" element={<Login />} />;
        {/* <Route path="events" element={ <EventsContainer />} />; */}
      </Routes>
      <EventsContainer />
    </div>
  );
};

export default Content;
