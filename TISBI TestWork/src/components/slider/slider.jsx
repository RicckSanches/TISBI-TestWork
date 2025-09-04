import React, { useState } from 'react';
import { CgShapeRhombus } from "react-icons/cg";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

import './slider.scss';

import sliderImage from './img/image-list.png'



function Slider() {
    const [changeSlide, setChangeSlide] = useState(0);


    const slider = [
        {

            id: 1,
            image: sliderImage,
            title:'Слайд 1',
            description: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей.'

        },
        {
            id: 2,
            image: sliderImage,
            title: 'Слайд 2',
            description: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей.'

        },
        {
            id: 3,
            image: sliderImage,
            title: 'Слайд 3',
            description: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей.'
        },
        {
            id: 4,
            image: sliderImage,
            title: 'Слайд 4',
            description: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей.'
        },
        {
            id: 5,
            image: sliderImage,
            title: 'Слайд 5',
            description: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей.'
        }
    ];

    const nextSLide = () => {
        setChangeSlide((prev) => {
            if(prev === slider.length - 1) {
                return 0;
            } else {
                return prev + 1;
            }
        })
    };
    const prevSlide = () => {
        setChangeSlide((prev) => {
            if(prev === 0) {
                return slider.length - 1;
            } else {
                return prev - 1;
            }
        })
    };

    const goToSlide = (index) => {
        setChangeSlide(index);
    };


    return (
        <div className="slider-container">
            <div className="slider_img">
                <img
                    src={slider[changeSlide].image}
                    alt={slider[changeSlide].title}
                    className="slider-image"
                />

                <div className="sliderButtons">
                    <div className="img-buttons">
                        <button className="prev-btn" type="button" onClick={prevSlide}> <SlArrowLeft /></button>
                        <button className="next-btn" type="button" onClick={nextSLide}><SlArrowRight /></button>
                    </div>
                    <div className="img-indicators">
                        {slider.map((slide, index) => (
                            <button
                                className={`img-btn ${index === changeSlide ? 'active' : ''}`}
                                key={slide.id}
                                onClick={() => goToSlide(index)}
                            >
                                <CgShapeRhombus />
                            </button>
                        ))}
                    </div>
                </div>



            </div>
            <div className="slider_content">
                <h2>{slider[changeSlide].title}</h2>
                <p>{slider[changeSlide].description}</p>
                <button className="content-btn" type="active" onClick=''>Кнопка</button>

            </div>
        </div>
    )
}
export default Slider;