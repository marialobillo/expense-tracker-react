import React,{Component} from 'react';

class NewExpense extends Component{

    render(){
        return (
            <div className="">
                <form>
                    <div className="form-group">
                        <select className="form-control">
                        <option value="chooseOne">Choose one...</option>
                        <option value="card">Card</option>
                        <option value="cash">Cash</option>
                        <option value="cryptocoin">Cryptocoin</option>
                        <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <span for="name">Name:</span>
                        <input className="form-control" type="text" id="name" />
                    </div>

                    <div className="form-group">
                        <span for="date">Date:</span>
                        <input className="form-control" type="date" id="date" />
                    </div>
                    <div className="form-group">
                        <span for="amount">Amount:</span>
                        <input className="form-control" type="text" id="amount" />
                    </div>
                    <button type="submit" className="btn btn-block btn-success">Add Expense</button>
                </form>
            </div>
        );
    }
}

export default NewExpense;