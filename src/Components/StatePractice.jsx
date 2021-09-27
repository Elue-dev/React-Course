import React, { Component } from 'react'

export class StatePractice extends Component {
    constructor(){
        super();
        this.state = {
            message: 'Waiting for input focus...',
            imageWidth: ''
        }
    }

    handleFocus = () => {
        this.setState({
            message: 'Input focused!!!'
        })
    }

    handleEnter = () => {
        this.setState({
            message: 'Changed on hover!!!'
        })
    }

    imageLoad = (e) => {
        console.dir(e.target) //check for the width from the image attributes in the console (256)
        if(e.target.width > 100){
            console.log('Your image is large!')
    }
}

    render() {
        return (
            <div>
                <input onFocus = {this.handleFocus} type="text" />
                <h3 onMouseEnter = {this.handleEnter}>{this.state.message}</h3>
                <img onLoad = {this.imageLoad} src="logo192.png"/>
            </div>
        )
    }
}

export default StatePractice
