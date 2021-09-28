import React, {useState} from 'react'

function StateInFunctions() {

    const [counter, setCounter] = useState(0)

    function incrementCount(){
        setCounter(counter + 2)
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick= {incrementCount}>Click to add 2</button>
        </div>
    )
}

export default StateInFunctions
