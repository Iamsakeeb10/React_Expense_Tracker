import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const [showExpense, setExpense] = useState(false);

  const saveExpenseData = (enteredExpenseData) => {

    const enteredData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }

    props.onExpenses(enteredData);
    setExpense(false);

  }

  const startEditingHandler = () => {
    setExpense(true);
  }

  const cancelEditingHandler = () => {
    setExpense(false);
  }





  return (
    <div className='new-expense'>
      {!showExpense && (
          <button onClick={startEditingHandler}>Add New Expense</button>
      )}

      {showExpense && (
         <ExpenseForm onCancel = {cancelEditingHandler} onSaveExpenseData = {saveExpenseData}/>
      )}
     
    

    </div>
  )
}

export default NewExpense;