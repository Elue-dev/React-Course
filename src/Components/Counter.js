import React, { Component } from 'react'
import '../Components/main.css'

export class Counter extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    // handleClick2 = () => {
    //     this.setState({
    //         count: this.state.count + 2
    //     })
    // }

    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick = {this.handleClick}>Click to add 1</button>
                <br/>
                {/* <h2>{this.state.count}</h2>
                <button onClick = {this.handleClick2}>Click to add 2</button> */}
            </div>
        )
    }
}

export default Counter;

