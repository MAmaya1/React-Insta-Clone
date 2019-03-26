import React from 'react';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <h1><i className="fab fa-instagram"></i> InstaPic</h1>
            <input className="search-input" placeholder="Search"/>
            <div className="top-icons">
                <i className="far fa-compass"></i><i className="far fa-user"></i><i className="far fa-heart"></i>
            </div>
        </div>
    )
}

export default SearchBar;