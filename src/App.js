import React, {Component} from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NewExpense from './components/NewExpense';
import ExpenseList from './components/ExpenseList';

class App extends Component{
  state = {
    expenses: []
  }

  createNewExpense = data => {
    console.log(data);

    // copy the current state
    const expenses = [...this.state.expenses, data];
    // update the state and add the new expense 
    this.setState({
      expenses
    });
  }

  render(){
    return(
      <div className="">
        
          <Header title="Expense Tracker App" />

        <div className="row">
          <div className="col-md-10 mx-auto">
            <NewExpense createNewExpense={this.createNewExpense} />
          </div>
        </div>

        <div className="mt-5 col-md-10 mx-auto">
            <ExpenseList expenses={this.state.expenses}/>
        </div>
      </div>
    );
  }
}

export default App;
