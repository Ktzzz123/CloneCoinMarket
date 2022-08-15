import React from 'react'
import ItemCard from './ItemCard'
export default function Card(props) {
  return (
    <div className='w-1/3 h-80 bg-white rounded-3xl shadow-sm m-5 p-5'>
        <div className='flex justify-between'>

        
        <div className='flex items-center'>{props.header}
        <img className='h-12' src={props.img}/></div>
        <div className='text-blue-800 cursor-pointer'>More {'>>'}</div>
        </div>


        <div className=''>
            <ItemCard num ='1' n={props.name1}  
            nt={props.nameTag1} p={props.percent1}
            img={props.img1}
            />
            <ItemCard n={props.name2} img={props.img2} nt={props.nameTag2} p={props.percent2} num ='2'/>
            <ItemCard n={props.name3} img={props.img3} nt={props.nameTag3} p={props.percent3}  num ='3'/>

        </div>


    </div>
  )
}
