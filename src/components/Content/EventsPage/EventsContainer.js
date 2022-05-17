import { connect } from 'react-redux';
import Events from './Events';
import { addPostAC } from '../../../redux/post-ev-reducer'

let mapStateToProps = (state) => {
  return {
    eventsList: state.eventsData.eventsList,
  };
};

const EventsContainer = connect(mapStateToProps, {addPostAC})(Events);

export default EventsContainer;
