//GITHUB HOSTING URL==> https://aartiamlani.github.io/react-lottery/
import React, { useState } from 'react';
import "./assests/css/App.css";
import lottery from "./assests/img/lottery.jpg"
import Header from './components/Header';
import NumberSection from './components/NumberSection';
import MoneyInput from './components/MoneyInput';
import Output from './components/Output';

const SELECTION_COUNT_ALLOWED = 5;
const NUMBERS_ALLOWED = 20;

function App() {
  const [Amount, setCash] = useState(0);
  const [numbers, setnumbers] = useState([...defaultNumbers]);
  const [CashButtonEnabled, setCashEnabled] = useState(false);

  //Random button
  const RandomClick = () => {
    setnumbers(randomNumbers(numbers));
    ResetMoney(true);
  }
  //random only 5 display
  const randomNumbers = (allTokens) => {
    const RANDOM_NUMBER_COUNT = 5;
    const randomNumbers = [];
    while (randomNumbers.length < RANDOM_NUMBER_COUNT) {
      let r = Math.floor(Math.random() * NUMBERS_ALLOWED) + 1;
      if (randomNumbers.indexOf(r) === -1) randomNumbers.push(r);
    }
    return allTokens.map(({ value }) => ({
      value,
      selected: randomNumbers.includes(value)
    }));
  }
  //Number Select unselect 
  const NumSelect = (token) => {
    if (!token.selected) {
      if (canSelectTokens(numbers)) {
        const updatedTokens = toggleSelection(token, numbers);
        setnumbers(updatedTokens);
        if (!canSelectTokens(numbers)) {
          setCashEnabled(true);
        }
      } else {
        alert('Maximun 5 number can be selected ! U Exceed the count Sry!!');
      }
    } else {
      const updatedTokens = toggleSelection(token, numbers);
      setnumbers(updatedTokens);
      ResetMoney();
    }
  }
  const toggleSelection = (token, tokens = []) => {
    const { value, selected } = token;
    const updatedTokens = [...tokens];
    const Num = updatedTokens.find(t => t.value === value);
    Num.selected = !selected;
    return updatedTokens;
  }
  //validation on selection max5
  const canSelectTokens = (tokens = []) => {
    return tokens.filter(t => t.selected).length < SELECTION_COUNT_ALLOWED;
  }

  //RESET SCREEN
  const ResetClick = () => {
    const defaults = numbers.map(t => ({
      ...t,
      selected: false
    }))
    setnumbers(defaults);
    ResetMoney();
  }
  //Clear money
  const ResetMoney = (enableCash = false) => {
    setCash(0);
    setCashEnabled(enableCash);
  }
  //cashout
  const OnCashButtonPressed = (value = 0) => {
    if (CashButtonEnabled) {
      const UpdateMoney = Amount + value;
      setCash(UpdateMoney);
    } else {
      alert('Please select 5 buttons before cashing out!.');
    }
  }
  //alert with cashout click..
  const OnCashOutputButtonClicked = () => {
    const selectedNumbers = numbers.filter(t => t.selected).map(t => t.value).join('/ ');
    alert(`BEST OF LUCK Ur Numbers are : ${selectedNumbers}  ,U Cashed Out at $${Amount} And Results will be declared this Tuesday !!!`);
  }
  return (
    <div className="container">
      <Header />
      <div className="row">
        <img className="lottery" src={lottery} alt="lotteryImg" />
        <NumberSection numbers={numbers} NumSelect={NumSelect} ClearClick={ResetClick} CashButtonEnabled={CashButtonEnabled} OnCashOutputButtonClicked={OnCashOutputButtonClicked}  RandomClick={RandomClick} />
        <MoneyInput CashButtonEnabled={CashButtonEnabled} OnCashButtonPressed={OnCashButtonPressed} />
        <Output tokens={numbers.filter(t => t.selected)} Amount={Amount} />
      </div>
    </div>
  );  
}
//Numbers display
const defaultNumbers = [...Array(NUMBERS_ALLOWED).keys()].map(v => ({
  value: v + 1,
  selected: false
}));
export default App;