import { connect } from 'react-redux';
import  Events  from './Events';


let mapStateToProps = (state) => {
  return {
    eventsList: state.eventsData.eventsList
  };
};

const EventsContainer = connect(mapStateToProps)(Events);

export default EventsContainer;
