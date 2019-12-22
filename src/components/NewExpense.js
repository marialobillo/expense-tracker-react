import React,{Component} from 'react';

class NewExpense extends Component{
    state = {
        expense: {
            type: '',
            name: '',
            date: '',
            amount: 0, 
        }
    }

    handleChange = e => {
        //console.log(e.target.name + ': ' + e.target.value);

        this.setState({
            expense : {
                ...this.state.expense,
                [e.target.name] : e.target.value
            }
        });
    } 

    handleSubmit = e => {
        e.preventDefault();

        // get the state values
        const { type, name, date, amount} = this.state.expense;

        // early exist
        if(type === '' || name === '' || date ==== '' || amount === ''){
            return;
        }        

        // generate an object 
        const newExpense = {...this.state.expense};
        newEpense.id = Date.now();

        // passing the info to the parent
        this.props.createNewExpense(newExpense);
    }
    render(){
        return (
            <div className="">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                       
                            <label>Type:</label>
                        <select 
                            className="form-control" 
                            name="type"
                            onChange={this.handleChange}
                            value={this.state.expense.type}
                            >
                            <option value="chooseOne">Choose one...</option>
                            <option value="card">Card</option>
                            <option value="cash">Cash</option>
                            <option value="cryptocoin">Cryptocoin</option>
                            <option value="other">Other</option>
                        </select>
                        <span>Name:</span>
                        <input 
                            className="form-control"
                            placeholder="Expense Name" 
                            type="text" 
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.expense.name}    
                        />
                    </div>

                    <div className="form-group row">
                        <span>Date:</span>
                        <input 
                            className="form-control" 
                            type="date" 
                            name="date" 
                            onChange={this.handleChange}
                            value={this.state.expense.date}
                        />
                    </div>
                    <div className="form-group row">
                        <span>Amount:</span>
                        <input 
                            className="form-control" 
                            type="text" 
                            placeholder="Expense Amount"
                            name="amount" 
                            onChange={this.handleChange}  
                            value={this.state.expense.amount}  
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-block btn-success">Add Expense</button>
                </form>
            </div>
        );
    }
}

export default NewExpense;