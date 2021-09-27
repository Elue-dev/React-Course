import React from 'react'
import '../Components/main.css'

function Card(props) {
    return (
        <div >
            <h5> Name: {props.data.course}</h5>
            <h5> Course:  {props.data.instructor}</h5>
            <h5>Image: <img src= {props.data.image}/></h5>
            <br/>
        </div>
    )
}

export default Card
