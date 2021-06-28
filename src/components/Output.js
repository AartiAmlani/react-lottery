import React from 'react';
import "../assests/css/App.css";

const Output = ({ tokens = [], Amount = 0 }) => {
    const selectedNums = tokens.length > 0 ? <p> {tokens.map(t => <li key={t.value}>{t.value}</li>)}</p> : <p> </p>
    return (
        <div className="Output">
            <p>** U Selected **</p>
            {selectedNums}
            <p>** Total Amount: ${Amount} **</p>
        </div>
    );
}

export default Output;