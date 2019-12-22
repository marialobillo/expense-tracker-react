import React from 'react';

const Expense = ({ expense }) => (
    <tr>
        <td>{expense.type}</td>
        <td>{expense.name}</td>
        <td>{expense.date}</td>
        <td>${expense.amount}</td>
        <td>
            <button className="btn btn-danger">
                Delete
            </button>
        </td>
    </tr>
);

export default Expense;
