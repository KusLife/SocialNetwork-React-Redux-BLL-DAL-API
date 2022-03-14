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
  // Why it doesn't work in this way??????
  // let eventsMap = <Route path={'/Events/' + props.state.eventsData.id} element={<Events ev={props.state.eventsData.ev} />} />

  let myMsgs = (
    <Route path="/MyMsgs" element={<MyMsgs state={props.state} />} />
  );

  return (
    <div className={s.Content}>
      <Profile addPotsEv={props.addPotsEv}
       newPostTxt={props.state.newPostTxt}
       updateNewPostTxt={props.updateNewPostTxt} />

      <Routes>
        {myMsgs}
        {eventsMap}
      </Routes>
    </div>
  );
};
