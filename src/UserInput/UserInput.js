import React from 'react';

const userOutput = (props) => {
    const labelStyle = {
        marginRight : '10px',
        color: 'Blue'
    };

    return (
        <div>
            <label style={labelStyle} htmlFor="userName"> Input first user name:</label>
            <input name="userName" type="text" value={props.userName} onChange={props.onChange}/>
        </div>
    )
};

export default userOutput;