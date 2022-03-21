// import { getQueriesForElement } from '@testing-library/dom';
import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value
    };

    handleIncrement = ()=>{
        this.setState({
            value: this.state.value +1
        });
    }

    // handleDelete = ()=>{

    // }

    render() { 
        return (
        <div>
            <h4>Counter  #{this.props.id}</h4>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>Increment</button>
            <button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button>            
        </div>);
    }

    getBadgeClasses() {
        let classes = 'badge badge-primary m-2 bg-';
        classes += (this.state.value === 0 ? 'warning' : 'primary');
        return classes;
    }

    formatCount(){
        const {value} = this.state;
        return value === 0? 'Zero':value;
    }
}
 
export default Counter;