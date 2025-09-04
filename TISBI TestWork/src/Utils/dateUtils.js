export const getDeclinedMonth = (date) => {
    const month = date.getMonth();
    const day = date.getDate();

    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];

    return months[month];
};

// Или более универсальная функция
export const formatDateWithDeclension = (date) => {
    if (!date) return '18 апреля';

    const day = date.getDate();
    const month = date.getMonth();

    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];

    return `${day} ${months[month]}`;
};