import EventTags from '../Event-component/EventTags.jsx';
import EventDescription from '../Event-component/EventDescription.jsx';
import EventActions from '../Event-component/EventActions.jsx';
import eventData from "./eventData.jsx";
import './EventCard.scss';

const EventCard = ({ tags, title, onWrite, onDetails }) => (
    <div className="event-card">
        <EventTags tags={eventData.tags} />
        <EventDescription title={eventData.title} />
        <EventActions onWrite={eventData.onWrite} onDetails={eventData.onDetails} />
    </div>


);
export default EventCard;