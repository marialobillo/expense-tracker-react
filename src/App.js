import React, {Component} from 'react';
import './bootstrap.min.css';
import Header from './components/Header';

class App extends Component{

  render(){
    return(
      <div className="container">
        <Header title="Expense Tracker App" />

      </div>
    );
  }
}

export default App;
