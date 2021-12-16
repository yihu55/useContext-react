import React from 'react'
import Component2 from './Component2'

export default function Component1(props) {
    return (
        <div>
            <h1>comp1</h1>
            <Component2 name={props.name}/>
        </div>
    )
}
