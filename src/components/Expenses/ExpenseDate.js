import "./ExpenseDate.css"

function ExpenseDate(props){
    const month = new Date(props.date).toLocaleString('default', { month: 'long' });
    const day = new Date(props.date).toLocaleString('default', { day: "numeric" });
    const year = new Date(props.date).getFullYear();
    
    return (
        <div className="expense-date">
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    )
}

export default ExpenseDate;