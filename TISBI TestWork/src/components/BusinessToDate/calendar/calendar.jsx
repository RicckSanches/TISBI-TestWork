import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.scss'

const CalendarComponent = ({ onDateSelect }) => {
    const [date, setDate] = useState(new Date());

    const formatMonthYear = (locale, date) => {
        const formatter = new Intl.DateTimeFormat('ru-RU', {
            month: 'long',
            year: 'numeric'
        });

        let text = formatter.format(date);


        text = text.replace(' г.', '') || text.replace('Г', '');

        return text;
    };
    const handleDateChange = (newDate) => {
        setDate(newDate);
        onDateSelect(newDate); // Вызываем функцию из пропсов
    };

    return (
        <Calendar
            onChange={handleDateChange}
            value={date}
            locale="ru-RU"
            formatMonthYear={formatMonthYear}
        />
    );
};

export default CalendarComponent;
