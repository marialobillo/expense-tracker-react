import React, {Component} from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NewExpense from './components/NewExpense';

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

        <div className="row">

        </div>
      </div>
    );
  }
}

export default App;
