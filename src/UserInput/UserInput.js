import React from 'react';

const userInput = (props) => {
    const labelStyle = {
        marginRight : '10px',
        color: 'Blue'
    };

    return (
        <div>
            <label style={labelStyle} htmlFor="userInput"> Input your text:</label>
            <input name="userInput"
             type="text" 
             onChange={props.onChange}
             value={props.text} />
            <p>String length is {props.text.length}</p>
        </div>
    )
};

export default userInput;