import React from "react";
import './date.scss';

function Date({ selectedDate }) {
    // Функция для форматирования даты со склонением
    const formatDateWithDeclension = (date) => {
        if (!date) return '18 апреля'; // Значение по умолчанию

        const day = date.getDate();
        const month = date.getMonth();

        // Месяцы в родительном падеже
        const months = [
            'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
            'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
        ];

        return `${day} ${months[month]}`;
    };

    return (
        <div className="date">
            <h1>Мероприятия на <section>{formatDateWithDeclension(selectedDate)}</section></h1>
        </div>
    );
}

export default Date;