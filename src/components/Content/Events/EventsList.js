import React from 'react';
import { Link } from 'react-router-dom';
import s from './Events.module.css';

export const EventsList = (props) => {
  let eventNums = props.eventsList.map((ev) => (
    <div>
      <Link to={'/events/' + ev.id}>{ev.data}</Link>
    </div>
  ));
  return <div className={s.item}>{eventNums}</div>;
};
