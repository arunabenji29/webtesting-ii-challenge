import React from 'react'

const Dashboard = (props) => {

    const strikeHandle = (event) => {
        event.preventDefault()
        props.strike()
    }

    const ballHandle = (event) => {
        event.preventDefault()
        props.ball()
    }

    const foulHandle = (event) => {
        event.preventDefault()
        props.foul()
    }

    const hitHandle = (event) => {
        event.preventDefault()
        props.hit()
    }

    return (
        <div>
            <h3>Dashboard</h3>
            <button onClick={strikeHandle}>Strike</button>
            <button onClick={ballHandle}>Ball</button>
            <button onClick={foulHandle}>Foul</button>
            <button onClick={hitHandle}>Hit</button> 
        </div>
    )
}
export default Dashboard