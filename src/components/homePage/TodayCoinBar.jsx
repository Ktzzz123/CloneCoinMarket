import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import StaticStore from '../../utils/StaticStore';
import Card from './todayCoinBar/Card'



export default function TodayCoinBar() {
  const content = 1.07;
  const percent = 0.27
  // console.log(StaticStore)
  const [listCoin,setListCoin] = useState([
    

  ]);
  

  let listTrendingSymbol = ['BTC','ADA','DOGE']
  // class ListCoin  {
  //   'BTC' = {}
  //   'ADA' = {}
  //   'DOGE' = {}
  // }

  useEffect(()=>{
    console.log('SymbolInfo',StaticStore.SymbolInfo)
    if(listCoin.length === 0){
      console.log('true')
      listTrendingSymbol.map((symbol) => {
        Object.values(StaticStore.SymbolInfo).map((s)=>{
          console.log(s)
        })
      })
      
      
    }else{
      console.log('false')
    }
    // console.log(listCoin)
  },[])
  return (
    <div >
      <h1 className='font-bold text-3xl'>Today's Cryptocurrency Prices by Market Cap</h1>
      <div>The global crypto market cap is ${content}, a {percent}% increase over the last day. </div>
      <a>Read more</a>
      <div className='flex'>
      
      <Card 
      
      />
      <Card img = 'https://s2.coinmarketcap.com/static/cloud/img/TrendingIcon.png?_=309fd9c' header = 'Trending' 
      name1='optimism' name2 = 'PancakeSwap' name3 = 'Saudi Shiba Inu' nameTag1 ='OP' nameTag2='CAKE' nameTag3='SAUDISHIB'
      percent1='17.07' percent2='2.40' percent3='175.25' img1='	https://s2.coinmarketcap.com/static/img/coins/64x64/11840.png'
      img2 = 'https://s2.coinmarketcap.com/static/img/coins/64x64/7186.png' img3='	https://s2.coinmarketcap.com/static/img/coins/64x64/21061.png'
      
      />
      <Card img = 'https://s2.coinmarketcap.com/static/cloud/img/TrendingIcon.png?_=309fd9c' header = 'Trending' 
      name1='optimism' name2 = 'PancakeSwap' name3 = 'Saudi Shiba Inu' nameTag1 ='OP' nameTag2='CAKE' nameTag3='SAUDISHIB'
      percent1='17.07' percent2='2.40' percent3='175.25' img1='	https://s2.coinmarketcap.com/static/img/coins/64x64/11840.png'
      img2 = 'https://s2.coinmarketcap.com/static/img/coins/64x64/7186.png' img3='	https://s2.coinmarketcap.com/static/img/coins/64x64/21061.png'
      
      />
      
      </div>
    </div>
  )
}
