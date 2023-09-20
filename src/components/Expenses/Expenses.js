import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses({props}){

    const [filteredYear, setFilteredYear] = useState('2020')
    const [shownData, setShownData] = useState(props)

    // const findData = props.filter(item => {
    //     const toDate = new Date(item.date).getFullYear().toString();
    //     console.log(toDate);
    //     return toDate == '2023'
    // });

    // console.log(findData)
   
    //Derived / Computed state
    // let filterInfoText = '2019, 2021 & 2022'
    // if (filteredYear === '2019'){
    //     filterInfoText = '2020, 2021 & 2022'
    // } else if (filteredYear === '2021') {
    //     filterInfoText = '2019, 2020 & 2022'
    // } else {
    //     filterInfoText = '2019, 2020 & 2021'
    // }

    const showFilterSelection = (selectedYear) => {
        setFilteredYear(selectedYear)
        setShownData((findData) => {
            return props.filter(item => {
            const toDate = new Date(item.date).getFullYear().toString();
            return toDate == selectedYear 
            })
        })
      }

    return(
        <>
        <Card className="expenses">
        {/* ForDerived: <p style={{color:'white'}}>Data of years of {filterInfoText} is hidden</p> */}
        <Card className='expenses-filter'><ExpensesFilter selected={filteredYear} onFilterSelect={showFilterSelection} /></Card>
        {/* {shownData.length === 0 && <p>No expenses found</p>} */}
        {/* {shownData.length > 0 && shownData.map((item) => <ExpenseItem props={item} key={item.id} />)} */}
        {/* {expsenseContent} */}
        <ExpensesList items={shownData} />
        </Card>
        </>
    )
}

export default Expenses;