import React, { Component } from 'react';

export class EventsAndState extends Component {
    constructor(){
        super();
        this.state = {
            inputText: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
    //    console.log('Heree...')
        this.setState({
            inputText: ''
        })
    }

    // handleClick = () => {
    //     //    console.log('Heree...')
    //         this.setState({
    //             inputText: ''
    //         })
    //     }

    handleChange(e){
        console.log(this.state.inputText) //Yields error cuz the this is refering to the handleChange, solution is in line 9 for this to work, or 21 for alternate method (arrow func)
        // console.dir(e.target)
        // this.state.inputText: e.target.value BAD WAY!! 
        this.setState({
            inputText: e.target.value
        })
    }

    // handleChange = (e) => {
    //     console.log(this.state.inputText) //Works cuz of arrow function. Another way t do this is above in line 9
    //     console.log(e.target) 
    // }

    handleSubmit = (e) => {
        console.log('Submitted input!')
        this.setState({
            inputText: 'State is fine'
        })
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <h4>{this.state.inputText}</h4>
                <form onSubmit= {this.handleSubmit}>
                    <button onClick = {this.handleClick}>Click Me</button>
                    <input onChange = {this.handleChange} type="text" placeholder="Enter text" />
                </form>
                {/* <button onClick = {this.handleClick}>Click Me</button>
                <input onChange={this.handleChange} type="text" placeholder="Enter text" /> */}
            </div>
        )
    }
}

//Everytime state changes, render is called again

export default EventsAndState;
