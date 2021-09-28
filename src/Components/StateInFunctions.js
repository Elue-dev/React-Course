import React, {useState} from 'react'


function StateInFunctions({ name, age, course }) { //Altername way of writing props, instead of passing in props and writing
    //props.name in the h3 in line 16, you destructure like we did here, and in the h3 you just pass the name with doing props.name

    const [counter, setCounter] = useState(0)

    function incrementCount(){
        setCounter(counter + 2)
    }

    return (
        <div>
            {/* <h1>{counter}</h1>
            <button onClick= {incrementCount}>Click to add 2</button> */}
            <h3>{name} is {age} years old and is a {course}</h3>
        </div>
    )
}

export default StateInFunctions
