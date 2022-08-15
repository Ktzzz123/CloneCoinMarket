import React from 'react'

export default function ItemCard({coin}) {
    const checkPercent=(percent)=>{
        if({percent }>0)
        return true
        else 
        return false
    }
   

  return (
    <div className='cursor-pointer flex justify-between py-5'>
      {/* {console.log(coin)} */}
        <div className='flex'>
        <div className='px-5'>{coin.id}</div>
        <img className='w-8 h-auto' src={coin.logo} alt={coin.name}/>
        <div className='px-5'>{coin.name}</div>
        <div className='text-slate-400'>{coin.symbol}</div>
        </div>
        <div className='text-green-500'>{coin?.ohlcv?.["1DAY"]?.price_open}%</div>
    </div>
  )
}
