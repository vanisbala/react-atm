import React from 'react'

const InputBox = ({onChange,isDeposit,isValid}) => {
    const choice = ['Depositing...', 'Withdrawing...'];
    console.log(`ATM isDeposit: ${isDeposit}`);
    return (
        <label className="label huge">
        <h3> {choice[Number(!isDeposit)]}</h3>
        <input id="number-input" type="number" width="200" onChange={onChange}></input>
        <input id="submit-input" type="submit" disabled={!isValid} width="200" value="Submit" ></input>
      </label>
    );
};

export default InputBox
