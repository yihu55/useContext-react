import React,{useContext} from 'react'
import Component4 from './Component4'
import { nameContext } from '../App'

export default function Component3(props) {
    const {myName,setMyName}=useContext(nameContext)
    return (
        <div>
            <h1>comp3</h1>
            <Component4 name={props.name}/>
            <p onClick={e=>setMyName("Anna")}>{myName}</p>
        </div>
    )
}
