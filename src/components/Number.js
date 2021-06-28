import React from 'react';
import "../assests/css/App.css";

const Number = ({ token, onTokenSelected }) => {
    const { value, selected } = token;
    return (
        <button
            id={value} className={selected ? 'button:active' : 'button'} onClick={() => onTokenSelected(token)}> {value}
        </button>
    )
}

export default Number;