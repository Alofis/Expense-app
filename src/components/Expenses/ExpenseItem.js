import '../Expenses/ExpenseItem.css'
import ExpenseDate from '../Expenses/ExpenseDate';
import Card from '../UI/Card';
import { useState } from 'react';

function ExpenseItem({title, date, amount}){

    const [newTitle, setNewTitle] = useState(title);

    const clickHandler = () => {
        setNewTitle('Clicked!')
        console.log(title);
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={date} />
            <div className='expense-item__description'>
                <h2>{newTitle}</h2>
                <div className='expense-item__price'>{"$" + amount}</div>
                {/* <button onClick={() => {console.log("clicked!")}}>click me</button> */}
                <button onClick={clickHandler}>Click me</button>
            </div>
        </Card>
        )
}

export default ExpenseItem;