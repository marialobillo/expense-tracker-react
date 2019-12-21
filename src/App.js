import React, {Component} from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NewExpense from './components/NewExpense';

class App extends Component{

  render(){
    return(
      <div className="">
        
          <Header title="Expense Tracker App" />

        <div className="row">
          <div className="col-md-10 mx-auto">
            <NewExpense />
          </div>
        </div>

        <div className="row">

        </div>
      </div>
    );
  }
}

export default App;
