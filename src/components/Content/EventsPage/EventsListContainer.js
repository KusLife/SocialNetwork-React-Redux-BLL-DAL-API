import { connect } from 'react-redux';
import withAuthRedirect from '../../../hoc/withAuthRedirect';
import { EventsList } from './EventsList';

let mapStateToProps = (state) => {
  return {
    eventsList: state.eventsData.eventsList,
  };
};

// const EventsListContainer = connect(mapStateToProps)(EventsList);
const EventsListContainer = connect(mapStateToProps)(withAuthRedirect(EventsList));

export default EventsListContainer;
