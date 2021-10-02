import React, { Component } from 'react'
import FlashCard from './FlashCard'
import QuizBar from './QuizBar'

export class MainApp extends Component {
    constructor(){
        super()
        this.state = {
            cardStyle: 'Random'
        }
    }

    userChoice = (cardStyle) => {
        this.setState({
            cardStyle: cardStyle
        })
    }

    render() {
        console.log(this.state.cardStyle)
        return (
            <div className="App align-items-center justify-content-center d-flex">
                <div className="container">
                    <QuizBar userChoice = {this.userChoice}/>
                    <FlashCard/>
                </div>
            </div>
        )
    }
}

export default MainApp
