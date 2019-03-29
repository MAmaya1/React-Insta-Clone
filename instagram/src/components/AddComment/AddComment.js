import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

// Styled Components

const CommentForm = styled.form`
    display: flex;
    border-top: 1px solid lightgrey;
    padding: 10px 0;
`
const CommentInput = styled.input`
    border: none;
    padding: 8px;
    width: 100%;

    @media (max-width: 500px) {
        padding: 25px;
    }
`

const AddCommentBtn = styled.button`
    border: none;
    background: white;
    padding: 0 8px;
    font-size: 1.4rem;
    font-weight: bold;
    cursor: pointer;

    @media (max-width: 500px) {
        font-size: 3rem;
    }
`

// AddComment Component

const AddComment = props => {
    return (
        <CommentForm>
            <CommentInput 
                value={props.inputValue}
                placeholder="Add a comment..."
                onChange={props.updateInputValue}
            />
            <AddCommentBtn onClick={props.addNewComment}>...</AddCommentBtn>
        </CommentForm>
    )
}

// Prop Types

AddComment.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    updateInputValue: PropTypes.func,
    onClick: PropTypes.func
}

export default AddComment;