import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import s from './Navigation.module.css';
import EventsListContainer from '../Content/EventsPage/EventsListContainer';
import AuthDataContainer from '../Content/Profile/Users/AuthUserData/AuthDataContainer';

export const Navigation = () => {
  let searchItem = React.createRef();

  let searchBar = () => {
    let request = searchItem.current.value;
    alert(request);
  };

  return (
    <>
      <div className={s.Navigation}>
        <div>
          {/* Later on I'd like to make this txt removeble in search txtarea
          And I wanna to hide this part as a slider  */}
          <textarea value="" ref={searchItem} cols="30" rows="2">
            Type here
          </textarea>
          <button onClick={searchBar}>Search</button>
        </div>

        <div className={(s.item, s.active)}>
          <Link  to="/profile/*">Profile</Link>
        </div>
        <div className={s.item}>
          <Link to="/users">Users</Link>
        </div>
        <div className={s.item}>
          <Link to="/myMsgs">Messages</Link>
        </div>
        <div className={s.item}>
          <Link to="/eventsList">Events</Link>
        </div>
        <div className={s.item}>
          <Link to="/help">Help</Link>
        </div>
        <div className={s.item}>
          <Link to="/about">About us</Link>
        </div>
        <div className={(s.item, s.login)}>
          <AuthDataContainer />
        </div>

        <Routes>
          <Route path="/eventsList/*" element={<EventsListContainer />} />
        </Routes>
      </div>
    </>
  );
};
