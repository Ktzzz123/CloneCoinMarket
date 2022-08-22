import React from 'react'

export default function Input(props) {
  return (
    <input 
    className="border rounded-xl w-full h-20 placeholder:p-10"
    
    placeholder={props.placeholder}
    type={props.type}
    ref={props.refer}
    name={props.name}
    ></input>
  )
}
