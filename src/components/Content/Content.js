import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EventsContainer from '../Navigation/EventsNav/EventsContainer';
import UsersContainer from '../Navigation/Users/UsersContainer';
import s from './Content.module.css';
import MyMsgsContainer from './MyMsgs/MyMsgsContainer';

const Content = (props) => {
  // Just an exemple of theother method
  let myMsgs = <Route path="/MyMsgs" element={<MyMsgsContainer />} />;
  return (
    <div className={s.Content}>
      <Routes>
        <Route path="/Friends" element={<UsersContainer />} />
        {myMsgs}
      </Routes>
      <EventsContainer />
    </div>
  );
};

export default Content;
