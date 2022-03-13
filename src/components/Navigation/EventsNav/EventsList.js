import React from 'react';
import { Link } from 'react-router-dom';
import s from '../Navigation.module.css';

export const EventsList = (props) => {
  let eventNums = props.eventsData.map((ev) => (
    <div>
      <Link to={'/Events/' + ev.id }>{ev.data}</Link>
    </div>
  ));

  return <div className={s.item}>{eventNums}</div>;
};
