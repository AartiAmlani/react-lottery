import React from 'react'
import "../assests/css/App.css";

const MoneyInput = ({OnCashButtonPressed, CashButtonEnabled }) => {
    return (
        <div className="MoneyInput">
            <p>** Press Amount To Cash Out **</p>
             {moneyOptions.map(c => <button disabled={!CashButtonEnabled} onClick={() => OnCashButtonPressed(c)} key={c}>${c}</button>)}
        </div>
    )
}
const moneyOptions=[1,5,10,20];
export default MoneyInput

