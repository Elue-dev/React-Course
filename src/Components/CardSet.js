import React, { Component } from 'react'
import '../Components/main.css'

export class CardSet extends Component {
    constructor(){
        super();

        this.state = {
            chosenCards: []
        }
    }

    // saveCourse = (e) => {
    //     console.log('User clicked a card!')
    // }

    saveCourse = (index) => {
        console.log(index)
        // this.state.chosenCards.push(this.props.cards[index]) this is the kind of thing we want to achieve but this is a No No in React
        const copyOfCards = [...this.state.chosenCards] 
        // const copyOfCards = this.state.chosenCards.slice()
        copyOfCards.push(this.props.cards[index])
        this.setState({
            chosenCards: copyOfCards
        })
    }


    render() {
        console.log(this.state.chosenCards)

        const savedCards = this.state.chosenCards.map((card, i) => {
            return(
                <div>
                    <h5 key={i}> <span>Course:</span> {card.course} </h5>
                    <h5 key={i}> <span>Teacher:</span> {card.instructor} </h5>
                    <br/>
                </div>
            )
        })

        const cardList = this.props.cards.map((card, index) => {
            return(
                <div className="col s2" key = {index} >
                    <div className="card hoverable small">
                            <div className="card-image">
                                <img src={card.image} />
                            </div>
                            <div className="card-content">
                                <p>{card.course}</p>
                                <p>{card.instructor}</p>
                            </div>
                            <div className="card-action">
                                <a href="#">$9.99</a>
                            </div>
                    </div>
                     {/* <button onClick = {this.saveCourse} className = "btn waves-light waves-effect">Save</button> */}
                     {/* the problem with the above is that we won't know which card was clicked, to know, we do this */}
                     <button onClick = {()=> this.saveCourse(index)} className = "btn waves-light waves-effect">Save</button>
                </div>	
            )
        })
        return (
            <div>
                {cardList}
                {savedCards}
            </div>
        )
    }
}

export default CardSet

// https://github.com/robertbunch/reactFromTheBeginning