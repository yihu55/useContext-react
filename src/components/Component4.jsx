import React,{useContext} from 'react'
// import {nameContext} from '../App'

export default function Component4(props){
    //  const name=useContext(nameContext)

    return (
        <div>
            <h1>comp4</h1>
            <p>{props.name}</p>
            {/* {/* {name}*} */}
        </div>
    )
}
