import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Events } from '../Navigation/EventsNav/Events';
import s from './Content.module.css';
// import { MyMsgs } from './MyMsgs/MyMsgs';
// import { Profile } from './Profile/Profile';
import ProfileContainer from './Profile/ProfileContainer';
import MyMsgsContainer from './MyMsgs/MyMsgsContainer'

export const Content = (props) => {
  let eventsMap = props.store.getState().eventsData.eventsList.map((e) => (
    <Route path={'/Events/' + e.id} element={<Events ev={e.ev} />} />
  ));
  let myMsgs = (
    <Route path="/MyMsgs" element={<MyMsgsContainer store={props.store}  />} />
  );
  return (
    <div className={s.Content}>
      <ProfileContainer store={props.store} />
      <Routes>
        {myMsgs}
        {eventsMap}
      </Routes>
    </div>
  );
};
