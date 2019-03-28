import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = props => {
    return (
        <header>
            <h1><i className="fab fa-instagram"></i> InstaPic</h1>
            <input 
                    className="search-input" 
                    placeholder="Search"
                    onChange={props.updateSearchValue}
            />
            <div className="top-icons">
                <i className="far fa-compass"></i>
                <i className="far fa-user"></i>
                <i className="far fa-heart"></i>
            </div>
            <button
                className="log-out-btn"
                onClick={() => {
                    localStorage.clear();
                    window.location.reload();
                }}>Log Out</button>
        </header>
    )
}

// Prop Types

SearchBar.propTypes = {
    updateSearchValue: PropTypes.func
}

export default SearchBar;