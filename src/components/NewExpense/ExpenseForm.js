import { useState } from 'react';
import './ExpenseForm.css'
import NewExpense from './NewExpense';

const ExpenseForm = (props) => {
    const [addExpenseForm, setAddExpenseForm] = useState(false)
    // comminicate UP between components with props + execute the prop.fn inside chield comp
    // Lifting the state up
    const saveExpenseData = (entedeExpenseData) => {
        const expenseData = {
            ...entedeExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData);
        props.onAddExpense(expenseData);
        setAddExpenseForm(false);
    }

    const showAddExpenseForm = () => {
        setAddExpenseForm(true);
    }

    const hideAddExpenseForm = () => {
        setAddExpenseForm(false);
    }
 
    return  <div className='new-expense'>
                {!addExpenseForm && <button onClick={showAddExpenseForm}>Add a new Expense</button>}
                {addExpenseForm && <NewExpense onSaveExpenseData={saveExpenseData} onCancel={hideAddExpenseForm}/>}
            </div>
}

export default ExpenseForm;