import React from 'react';
import "../assests/css/App.css";
import Number from './Number';

const NumberSection = ({ numbers,  NumSelect, ClearClick, OnCashOutputButtonClicked, CashButtonEnabled, RandomClick }) => {

    return (
        <div className="NumberSection">
            <p>** Select 5 Numbers to play **</p>
            <div>
                {
                    numbers.map((t, i) => <Number key={i} token={t} onTokenSelected={NumSelect} />)
                }
                <div className="mt-3">
                    <button disabled={!CashButtonEnabled} onClick={OnCashOutputButtonClicked} >Cash Out</button>
                    <button  onClick={RandomClick}>Random Selection</button>
                    <button  onClick={ClearClick}>Reset </button>
                </div>
            </div>
        </div>
    )

}

export default NumberSection;