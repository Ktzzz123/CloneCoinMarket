import React from 'react'

export default function ItemCard(props) {
    const checkPercent=(percent)=>{
        if({percent }>0)
        return true
        else 
        return false
    }
  return (
    <div className='flex justify-between'>
        <div>
        <div>{props.num}</div>
        <div>{props.name}</div>
        <div>{props.tagName}</div>
        </div>
        <div >{props.percent}</div>
    </div>
  )
}
