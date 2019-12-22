import React from 'react';
import Expense from './Expense';


const ExpenseList = ({ expenses }) => (
    <div className="mt-2 py-5">
        <div className="card-body">
            <h2 className="card-title text-center"></h2>
        </div>

        <div className="list-expenses">
            <table className="table">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map(expense => (
                        <Expense 
                            key={expense.id}
                            expense={expense}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);


export default ExpenseList;