import React from 'react'

const Card = (props) => {
    return (

        console.log(props),
            <div className='card'>
                <img src="https://plus.unsplash.com/premium_photo-1762560039194-ddc15f00b18e?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile" />
                <h1>{props.user},{props.age}</h1>
                <p>Learning React is fun!</p>
                <button className='button'>View Profile</button>
            </div>

       
    )
}

export default Card
