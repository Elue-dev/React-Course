import React, { Component } from 'react'

export class Form extends Component {
    constructor(){
        super()
        this.state = {
            name: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    changeName = (e) => {
        console.log(e.target.value)
        this.setState({
            name: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit= {this.handleSubmit}>
                    <input onChange={this.changeName} value={this.state.name} type="text" placeholder="Enter Name" id="name"/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Form
