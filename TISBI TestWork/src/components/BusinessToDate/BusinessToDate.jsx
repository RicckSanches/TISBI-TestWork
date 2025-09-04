import React, { useState } from "react";
import Date from "./string on date/date.jsx";
import CalendarComponent from "./calendar/calendar.jsx";
import EventCard from "./EventCard/Cards/EventCard.jsx";

import './BusinessToDate.scss'

function BusinessToDate() {
    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateSelect = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className="business">
            <Date selectedDate={selectedDate} />
            <div className="CalendarBusinessToDate">
                <CalendarComponent onDateSelect={handleDateSelect} />
                <div className="cards">
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />

                </div>


            </div>

        </div>
    )

}
export default BusinessToDate;