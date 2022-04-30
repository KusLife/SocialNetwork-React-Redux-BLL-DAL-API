import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EventsContainer from '../Events/EventsContainer';
import UsersContainer from '../Profile/Users/UsersContainer';
import s from './Content.module.css';
import MyMsgsContainer from '../MyMsgs/MyMsgsContainer';
import ProfileContainer from '../Profile/ProfileContainer';

const Content = () => {
  return (
    <div className={s.Content}>
      <Routes>
        <Route path="profile/:userId"element={<ProfileContainer />} />
        <Route path="users" element={<UsersContainer />} />
        <Route path="myMsgs" element={<MyMsgsContainer />} />;
      </Routes>
      <EventsContainer />
    </div>
  );
};

export default Content;
