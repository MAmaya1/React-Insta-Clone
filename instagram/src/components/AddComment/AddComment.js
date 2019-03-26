import React from 'react';
import PropTypes from 'prop-types';


const AddComment = props => {
    return (
        <div className="add-comment">
            <input 
                value={props.inputValue}
                placeholder="Add a comment..."
                onChange={props.updateInputValue}
            />
            <button onClick={props.addNewComment}>...</button>
        </div>
    )
}

// Prop Types

AddComment.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string
}

export default AddComment;