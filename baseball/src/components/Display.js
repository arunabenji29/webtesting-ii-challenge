import React from 'react'

const Display = (props) => {
    return (
        <div>
            <h3>Display</h3>
            <p>{props.count.balls} balls at {props.count.strikes} strikes</p>
        </div>
    )
}
export default Display