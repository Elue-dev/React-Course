import React, {useState} from 'react'

function FuncState() {

    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(0)
    const [counter3, setCounter3] = useState(0)
    const [counter4, setCounter4] = useState(0)

    function handleClick(){
        setCounter(counter + 1)
    }

    function handleClick2(){
        setCounter2(counter2 + 2)
    }

    function handleClick3(){
        setCounter3(counter3 + 3)
    }

    function handleClick4(){
        setCounter4(counter4 + 4)
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick = {handleClick}>Add 1</button>
            <br/>

            <h1>{counter2}</h1>
            <button onClick = {handleClick2}>Add 2</button>
            <br/>

            <h1>{counter3}</h1>
            <button onClick = {handleClick3}>Add 3</button>
            <br/>

            <h1>{counter4}</h1>
            <button onClick = {handleClick4}>Add 4</button>
        </div>
    )
}

export default FuncState

