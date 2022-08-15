import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import StaticStore from '../../../utils/StaticStore/index'
export default function Card({listCoin = []}) {
  const [data,setData] = useState(listCoin)
  
 
     useEffect(()=>{
      setTimeout(()=>{
        console.log('useEffect')
      // console.log(listCoin)
      let dataTempt = []
      Object.values(listCoin).map((coin)=>{
        let temp2 = []
        Object.values(StaticStore.StructureData).map((info)=>{
          if(coin.symbol === info.key){
            
             dataTempt = {
              ...coin,
              ohlcv: info.ohlcv
            }
            console.log("dataTempt",dataTempt)
            temp2 = temp2.concat(dataTempt)
          
          }
        })
        setData(temp2)
        console.log(temp2)
        
      })

      },2000)

     },[])

  return (
    <div className='w-1/3 h-80 bg-white rounded-3xl shadow-sm m-5 p-5'>
        <div className='flex justify-between'>

        
        <div className='flex items-center'>Treding
        <i class="bi bi-fire text-orange-600"></i>

        </div>
        <div className='text-blue-800 cursor-pointer'>More {'>>'}</div>
        </div>
        <div className=''>
          {
           
           <ItemCard coin = {data}/>
           
          }           
        </div>


    </div>
  )
}
