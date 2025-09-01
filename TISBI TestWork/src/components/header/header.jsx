import React from 'react'
import './header.scss'
import Logo from './Logo.png'

function Header() {
    return (
        <header className="header">
            <img className="mainLogo" src={Logo} alt="Логотип"/>
            <nav className="navList">
                <ul>
                    <li><a href="#">Пункт 1</a></li>
                    <li><a href="#">Пункт 2</a></li>
                    <li><a href="#">Пункт 3</a></li>
                    <li><a href="#">Пункт 4</a></li>
                </ul>
            </nav>
            <div className="headerNum"><strong>+7 (800) 999-99-99</strong></div>
        </header>
    )
}

export default Header;