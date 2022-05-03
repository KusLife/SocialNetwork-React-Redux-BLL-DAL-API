import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EventsContainer from '../Events/EventsContainer';
import UsersContainer from '../Profile/Users/UsersContainer';
import s from './Content.module.css';
import MyMsgsContainer from '../MyMsgs/MyMsgsContainer';
import ProfileContainer from '../Profile/ProfileContainer';
import Login from '../../Login/Login';

const Content = () => {
  return (
    <div className={s.Content}>
      <Routes>
        <Route path="profile/:userId" element={<ProfileContainer />} />
        <Route path="users" element={<UsersContainer />} />
        <Route path="myMsgs" element={<MyMsgsContainer />} />;
        <Route path="login" element={<Login />} />;
        {/* <Route path="events" element={ <EventsContainer />} />; */}
      </Routes>
      <EventsContainer />
    </div>
  );
};

export default Content;
