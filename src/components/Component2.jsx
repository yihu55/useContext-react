import React from 'react'
import Component3 from './Component3'

export default function Component2(props) {
    return (
        <div>
            <h1>comp2</h1>
            <Component3 name={props.name}/>
        </div>
    )
}
