import React from 'react';
import { Link } from 'react-router-dom';
import s from '../Navigation.module.css';
import StoreContext from '../../../storeContext';

export const EventsList = () => {
  return (
     
    <StoreContext.Consumer>
      {(store) => {
        let eventNums = store.getState().eventsData.eventsList.map((ev) => (
          <div>
            <Link to={'/Events/' + ev.id}>{ev.data}</Link>
          </div>
        ));
        return <div className={s.item}>{eventNums}</div>;
      }}
    </StoreContext.Consumer>
   
  );
};
