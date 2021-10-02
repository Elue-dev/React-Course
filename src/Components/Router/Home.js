import React from 'react'

function Home({ title, description }) { //Alternative way of doing props
    return (
        <div>
            <h1>{title}</h1> 
            <br/>
            <h4>{description}</h4>
            
        </div>
    )
}

export default Home
