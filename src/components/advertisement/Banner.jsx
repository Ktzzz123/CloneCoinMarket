import React from 'react'

export default function Banner(props) {
  return (
    <div className=' py-4 px-4   mx-3 rounded-xl bg-white flex justify-between'>
        <div>
            <div>{props.content}</div>
            <div className='text-3xl'> ${props.value}</div>
            <div>{props.percent}%</div>
        </div>
            <img className='w-1/2' src={props.img}
             alt="price-graph" width="100%" 
             ></img>
    </div>
  )
}
