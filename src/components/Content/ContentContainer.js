import { connect } from "react-redux";
import  Content  from "./Content";



const mapStateToProps = (state) => {
  return {
    eventsList: state.eventsData.eventsList
  }
}

const ContentContainer = connect(mapStateToProps)(Content);

export default ContentContainer;
