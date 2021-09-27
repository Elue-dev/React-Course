import React, { Component } from 'react';

export class SimpleEvents extends Component {

    handleClick(){
       console.log('Heree...')
    }

    handleChange(){
        console.log('User changed the input...')
    }

    handleSubmit(e){
        console.log('Submitted input!')
        e.preventDefault()
    }

    render() {
        return (
            <div>
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

export default SimpleEvents;
