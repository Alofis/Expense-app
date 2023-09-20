import './ExpenseForm.css'
import NewExpense from './NewExpense';

const ExpenseForm = (props) => {
    // comminicate UP between components with props + execute the prop.fn inside chield comp
    // Lifting the state up
    const saveExpenseData = (entedeExpenseData) => {
        const expenseData = {
            ...entedeExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData);
        props.onAddExpense(expenseData);
    }
 
    return  <div className='new-expense'>
                <NewExpense onSaveExpenseData={saveExpenseData} />
            </div>
}

export default ExpenseForm;