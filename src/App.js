import React from 'react';
import './App.css';
import InputBox from './component/InputBox';

function App() {
  const [deposit, setDeposit] = React.useState(0);
  const [totalAmount, setTotalAmount] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);
  const [atmOption, setAtmOption] = React.useState('');
  const [submitEnable, setSubmitEnable] = React.useState(false);
  const [balanceAmount, setBalanceAmount] = React.useState(0);
  const balanceState = "Your current balance is $";
  const noteToDoAction = "Please select your option and enter the amount";
  const noteToEnterLess = "You are trying to withdraw more than your balance amount";
  const noteToEnterPositive = "Negative valued amounts are not accepted";
  var balanceDisplay = balanceState + balanceAmount;
  const [note, setNote] = React.useState("Select any option to proceed...")
 
  


  const handleAmountChange = (event) => {
    console.log("Amount entered", event.target.value);
    if((event.target.value) <= 0) {
      
      setNote(noteToEnterPositive);
      return setSubmitEnable(false);
    }
    if(atmOption === "Withdraw" && Number(event.target.value) > totalAmount){
      setSubmitEnable(false);
      setNote(noteToEnterLess);
     
    }
    else{

      setSubmitEnable(true);
    }
    setDeposit(Number(event.target.value));
    console.log("Submit Enabled:",submitEnable)
  };

  const handleFormSubmit = (event) => {
    let newTotal = isDeposit ? totalAmount + deposit : totalAmount - deposit;
    setTotalAmount(newTotal);
    setSubmitEnable(false);
    setNote(noteToDoAction);
    setBalanceAmount(newTotal);
    balanceDisplay = balanceState + balanceAmount;
    console.log("The Balance Amount:",newTotal)
    event.preventDefault();
  };

  const handleSelectChange = (event) => {
    console.log(event.target.value);
    setAtmOption(event.target.value);
    if (event.target.value === 'Deposit') {
      setIsDeposit(true);
    } else {
      setIsDeposit(false);
    }

  };
  return (
    <div className="App">
      
      <form onSubmit = {handleFormSubmit}>
        
        <h2 id = "note"> {note} </h2>
        <select id = "select-option" onChange = {(e) => handleSelectChange(e)}>
          <option id="select-null" value = ""></option>
          <option id="select-deposit" value = "Deposit">Deposit</option>
          <option id="select-withdraw" value = "Withdraw">Withdraw</option>
        </select>
        <h2 id = "balance-display">{balanceDisplay}</h2>
        {atmOption && (
          <InputBox
            onChange={handleAmountChange}
            isDeposit={isDeposit}
            isValid={submitEnable}
          ></InputBox>
          )}
          
      </form>

    </div>
  );
};

export default App;
