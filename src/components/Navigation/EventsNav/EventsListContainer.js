import { connect } from 'react-redux';
import { EventsList } from './EventsList';

let mapStateToProps = (state) => {
  return {
    eventsList: state.eventsData.eventsList,
  };
};

const EventsListContainer = connect(mapStateToProps)(EventsList);

export default EventsListContainer;
