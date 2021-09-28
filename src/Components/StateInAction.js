import React, { Component } from 'react';
import '../Components/main.css';

export class StateInAction extends Component {
    constructor(){
        super();
        this.state = {
            text : 'State In Action...'
        }
        setTimeout(()=> { //Makes state above change after 2 seconds
            // DON'T DO THIS
            this.state.text = 'State Changed!!!'
            //It's okay in the constructor when you are initiaizing.
            //This is because react needs to do a whole bunch of stuffs when the state changes
            //so instead of doing it ourselvess, we leave it to react.
            this.setState({
                text: 'State Changed!!!'
            })
        },2000)
    }
    render(props) {
        return (
            <div>
                <h4>{this.state.text} - {this.props.name}</h4>
            </div>
        )
    }
}

export default StateInAction

