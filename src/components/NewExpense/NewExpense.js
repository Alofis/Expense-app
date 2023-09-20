import { useState } from 'react';
import './NewExpense.css';
import './ExpenseForm.css'

const NewExpense = (props) => {

    const [enteredTitle, setTitle] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('')

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
        // Safer way to ensure that you always operate on the LATEST state snapshot
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value
        //     }
        // })
    };

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredAmount: event.target.value
        //     }
        // })
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredDate: event.target.value
        //     }
        // })
    }

    const inputChangeHandler = (name, value) => {
        if (name === 'title') {
            setTitle(value)
        } else if (name === 'amount') {
            setAmount(value)
        } else if (name === 'date') {
            setDate(value)
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();
        
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: enteredDate
        }
        //send the data to the parent comp
        // Lifting the state up
        props.onSaveExpenseData(expenseData);

        setTitle('');
        setAmount('');
        setDate('');
    }

    return <form onSubmit={submitHandler}>
      
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input name='title' type='text' value={enteredTitle} onChange={(event) => inputChangeHandler(event.target.name, event.target.value)}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input name='amount' type='number' min='0.01' step='0.01' value={enteredAmount} onChange={(event) => inputChangeHandler(event.target.name, event.target.value)}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input name='date' type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={(event) => inputChangeHandler(event.target.name, event.target.value)}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add expense</button>
            </div>

    </form>   
}

export default NewExpense;  