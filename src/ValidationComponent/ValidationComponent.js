import React from 'react';

const validationComponent = (props) => {
    let validateText = (text) => text.length >= 5 ? "Text long enough" : "Text too short";

    return (
        <div>
            <p>{validateText(props.text)}</p>
        </div>
    )
};

export default validationComponent;