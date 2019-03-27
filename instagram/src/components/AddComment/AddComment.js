import React from 'react';
import PropTypes from 'prop-types';


const AddComment = props => {
    return (
        <form className="add-comment">
            <input 
                value={props.inputValue}
                placeholder="Add a comment..."
                onChange={props.updateInputValue}
            />
            <button onClick={props.addNewComment}>...</button>
        </form>
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