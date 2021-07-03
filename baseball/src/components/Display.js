import React from 'react'

const Display = (props) => {
    return (
        <div>
            <h3>Display</h3>
            <p><span data-testid='ball'>{props.count.balls}</span>balls </p>
            <p><span data-testid='strike'>{props.count.strikes}</span> strikes</p>
        </div>
    )
}
export default Display