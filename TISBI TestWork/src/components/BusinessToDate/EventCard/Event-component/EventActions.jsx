import React from "react";
import EventCards from "../Cards/EventCard.jsx";



const EventActions = () => {
    const onWrite = () => {
        console.log('Написали!')
    }
    const onDetails = () => {
        console.log('Детали!')
    }
    return(
        <div className="event-actions">
            <button className="btn-primary" onClick={onWrite}>
                Написать
            </button>
            <button className="btn-secondary" onClick={onDetails}>
                Подробнее →
            </button>
        </div>
    )
}



export default EventActions;