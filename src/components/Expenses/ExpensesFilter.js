import { useState } from 'react';
import './ExpensesFilter.css'

const ExpensesFilter = (props) => {

    //const [filterInput, setFilter] = useState('');

    const handleFilterChange = (year) => {
        //setFilter(year);
        props.onFilterSelect(year);
    }

    return (
            <div className='expenses-filter__control'>
            <label >Select an Year</label>
            <select name="filterYear" value={props.selected} onChange={(event) => handleFilterChange(event.target.value)}>
                <option value='2020'>2020</option>
                <option value='2021'>2021</option>
                <option value='2022'>2022</option>
                <option value='2023'>2023</option>
            </select>
          </div>
    )

}

export default ExpensesFilter;