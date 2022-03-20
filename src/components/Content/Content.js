import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Events } from '../Navigation/EventsNav/Events';
import s from './Content.module.css';
import { MyMsgs } from './MyMsgs/MyMsgs';
import { Profile } from './Profile/Profile';

export const Content = (props) => {
  let eventsMap = props.store.getState().eventsData.map((e) => (
    <Route path={'/Events/' + e.id} element={<Events ev={e.ev} />} />
  ));
  // Why it doesn't work in this way??????
  // let eventsMap = <Route path={'/Events/' + props.state.eventsData.id} element={<Events ev={props.state.eventsData.ev} />} />

  let myMsgs = (
    <Route path="/MyMsgs" element={<MyMsgs store={props.store} />} />
  );

  return (
    <div className={s.Content}>
      <Profile 
      dispatch={props.dispatch}
      store={props.store}
      //  addPotsEv={props.dispatch.addPotsEv}
      //  newPostTxt={props.dispatch.newPostTxt}
      //  updateNewPostTxt={props.dispatch.updateNewPostTxt}
      />

      <Routes>
        {myMsgs}
        {eventsMap}
      </Routes>
    </div>
  );
};
