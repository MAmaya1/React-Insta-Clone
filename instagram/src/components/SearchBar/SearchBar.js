import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components'

// Styled Component

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    text-align: center;
    border-bottom: 1px solid lightgrey;
    position: relative;

    .fa-instagram {
        font-size: 2.5rem;
        padding: 0 10px;
        border-right: 1px solid black;
    }

    h1 {
        font-size: 2.5rem;
    }
`

const SearchInput = styled.input`
    padding: 5px 8px;
`

const TopIcons = styled.div`
    display: flex;
    justify-content: space-evenly;
    font-size: 1.2rem;
    width: 197px;
`

const LogOutBtn = styled.button`
    right: 0;
    bottom: 0;
    padding: 5px;
    position: absolute;
    background: white;
    border: none;
    cursor: pointer;

    &:hover {
        background: rgb(230, 230, 230);
    border-radius: 5px;
    transition: all 200ms ease;
    }
`

// SearchBar Component

const SearchBar = props => {
    return (
        <Header>
            <h1><i className="fab fa-instagram"></i> InstaPic</h1>
            <SearchInput
                className="search-input" 
                placeholder="Search"
                onChange={props.updateSearchValue}
            />
            <TopIcons>
                <i className="far fa-compass"></i>
                <i className="far fa-user"></i>
                <i className="far fa-heart"></i>
            </TopIcons>
            <LogOutBtn
                onClick={() => {
                    localStorage.clear();
                    window.location.reload();
                }}>Log Out</LogOutBtn>
        </Header>
    )
}

// Prop Types

SearchBar.propTypes = {
    updateSearchValue: PropTypes.func
}

export default SearchBar;