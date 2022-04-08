import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Events } from '../Navigation/EventsNav/Events';
import s from './Content.module.css';
import ProfileContainer from './Profile/ProfileContainer';
import MyMsgsContainer from './MyMsgs/MyMsgsContainer';


const Content = (props) => {
  let eventsMap = props.eventsList.map((e) => (
      <Route path={'/Events/' + e.id} element={<Events ev={e.ev} />} />
    ));
  let myMsgs = <Route path="/MyMsgs" element={<MyMsgsContainer />} />;
  return (
    <div className={s.Content}>
      <ProfileContainer />
      <Routes>
        {myMsgs}
        {eventsMap}
      </Routes>
    </div>
  );
};


export default Content