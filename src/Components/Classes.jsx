import React, { Component } from 'react'

export class Classes extends Component {
    //constructor can be called which will run first when something is added
    constructor(){
        super(); //calls constructor function of the parent class
        console.log('constructor ran...')
    }
    render() {
        return (
            //In classes you have to add the 'this' keyword because unlinke functional
            //components, you don't add props in the bracket cuz classes don't take parameters, only methods

            <div >
                <h5> Name: {this.props.data.course}</h5>
                <h5> Course:  {this.props.data.instructor}</h5>
                <h5>Image: <img src= {this.props.data.image}/></h5>
                <br/>
            </div>
        )
    }
}

export default Classes

