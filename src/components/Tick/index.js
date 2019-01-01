import React from 'react'

const Tick = () => {
    const time = new Date().toLocaleTimeString()
    return (
        <div>
            <h2>{time}</h2>
        </div>
    )
}

export default Tick