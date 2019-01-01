import React from 'react'
import Tick from '../Tick'

const formatName = (name) => {
    if (name) {
        return name.firstName + ' ' + name.lastName
    } else {
        return 'Stranger'
    }
}

const name = {
    firstName: 'Manuel',
    lastName: 'Salgado'
}

const HelloUniverse = (props) => {
    return (
        <>
            <h1>{props.title}</h1>
            <p>Hello, {formatName()}</p>
            <Tick />
        </>
    )
}

export default HelloUniverse