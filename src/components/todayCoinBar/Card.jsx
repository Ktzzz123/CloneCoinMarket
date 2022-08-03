import React from 'react'
import ItemCard from './ItemCard'

export default function Card(props) {
  return (
      
        <div className='w-1/3 h-80 rounded-3xl m-5 bg-white shadow-sm'>
            <img src={props.img} loading="lazy"></img>
            <div>{props.header}</div>
            <ItemCard num = '1' name = {props.name1} tagName = {props.tagName1} percent = {props.percent1}/>
            <ItemCard num = '2' name = {props.name1} tagName = {props.tagName1} percent = {props.percent1}/>
            <ItemCard num = '3' name = {props.name1} tagName = {props.tagName1} percent = {props.percent1}/>
           
            
        </div>  
   
  )
}
