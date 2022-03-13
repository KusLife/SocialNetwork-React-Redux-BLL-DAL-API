import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Events } from '../Navigation/EventsNav/Events';
import s from './Content.module.css';
import { MyMsgs } from './MyMsgs/MyMsgs';
import { Profile } from './Profile/Profile';

export const Content = (props) => {
  let eventsMap = props.state.eventsData.map((e) => (
    <Route path={'/Events/' + e.id} element={<Events ev={e.ev} />} />
  ));
  let myMsgs = (
    <Route path="/MyMsgs" element={<MyMsgs state={props.state} />} />
  );

  return (
    <div className={s.Content}>
      <Profile  addPotsEv={props.addPotsEv}/>

      <Routes>
        {myMsgs}
        {eventsMap}
      </Routes>
    </div>
  );
};
