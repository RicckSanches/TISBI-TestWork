import React from "react";
import Star from "./Star.png";
import SearchIcon from "./Search.png";
import './search.scss'

function Search() {
    return (
        <div className="search">
            <div className="BlockName">
                <h1>Блок с поиском</h1>
                <div className="stars">
                <img src={Star} alt={"stars"} id="star1" />
                <img src={Star} alt={"stars"}/>
                <img src={Star} alt={"stars"}/>
                </div>
            </div>
            <form className="SearchBlock" >

                <div className="SearchInput">
                    <img src={SearchIcon} alt="SearchIcon"/>
                    <input
                        className="SearchInput"
                        placeholder={"Товары, услуги..."}
                        >
                    </input>
                </div>

                <button className="SearchButton" type={"submit"}>
                    Поиск
                </button>

            </form>
        </div>
    )
}

export default Search;