import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import s from './Navigation.module.css';
import EventsListContainer from './EventsNav/EventsListContainer';

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
          {/* Later on I'd like to make this txt removeble in search txtarea*/}
          <textarea ref={searchItem} cols="30" rows="2">
            Type here
          </textarea>
          <button onClick={searchBar}>Search</button>
        </div>

        <div>
          <Link to="/News" className={(s.item, s.active)}>
            News
          </Link>
        </div>
        <div className={s.item}>
          <Link to="/MyMsgs">Messages</Link>
        </div>
        <div className={s.item}>
          <Link to="/EventsList">Events</Link>
        </div>
        <div className={s.item}>
          <Link to="/Help">Help</Link>
        </div>
        <div className={s.item}>
          <Link to="/About">About us</Link>
        </div>

        <Routes>
          <Route path="/EventsList" element={<EventsListContainer />} />
        </Routes>
      </div>
    </>
  );
};
