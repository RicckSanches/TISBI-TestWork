import React, { useState } from 'react';
import './form.scss';

import Yandex from './Yandex.png'
import Vk from './vk.png'

const ApplicationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        gender: '',
        selection: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Данные формы:', formData);

    };

    return (
        <div className="forBack">
            <div className="application-form">
                <h1 className="form-title"><i>Подача заявки</i> </h1>

                <form onSubmit={handleSubmit}>
                    {/* Поле Имя */}
                    <div className="form-group">
                        <label htmlFor="name" className="form-label"></label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="form-input"
                            placeholder="Имя"
                            required
                        />
                    </div>

                    {/* Поле Почта */}
                    <div className="form-group">
                        <label htmlFor="email" className="form-label"></label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="form-input"
                            placeholder="Почта"
                            required
                        />
                    </div>

                    {/* Радиокнопки Пол */}
                    <div className="form-group" id="radio">
                        <span className="form-label">Пол:</span>
                        <div className="radio-group">
                            <label className="radio-label">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={formData.gender === 'male'}
                                    onChange={handleInputChange}
                                    className="radio-input"
                                />
                                <span className="radio-custom"></span>
                                Мужской
                            </label>

                            <label className="radio-label">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={formData.gender === 'female'}
                                    onChange={handleInputChange}
                                    className="radio-input"
                                />
                                <span className="radio-custom"></span>
                                Женский
                            </label>
                        </div>
                    </div>

                    {/* Выпадающий список */}
                    <div className="form-group" id="select">
                        <label htmlFor="selection" className="form-label">Выберите</label>
                        <select
                            id="selection"
                            name="selection"
                            value={formData.selection}
                            onChange={handleInputChange}
                            className="form-select"
                            required
                        >
                            <option value="">Выбор</option>
                            <option value="option1">Вариант 1</option>
                            <option value="option2">Вариант 2</option>
                            <option value="option3">Вариант 3</option>
                        </select>
                    </div>


                    {/* Кнопка отправки */}
                    <button type="submit" className="submit-button">
                        Подать заявку
                    </button>

                    {/* Разделительная линия */}
                    <div className="form-divider"></div>

                    {/* Дополнительные опции */}
                    <div className="APIbtn-container">
                        <button type="submit" className="submit-btn" id="yandex"><img src={Yandex} alt={"yandex"}/></button>
                        <button type="submit" className="submit-btn" id="vk"><img src={Vk} alt={"vk"}/> </button>
                    </div>


                </form>
            </div>
        </div>

    );
};

export default ApplicationForm;