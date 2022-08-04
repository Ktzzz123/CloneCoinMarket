import React from 'react'
import Card from './todayCoinBar/Card'



export default function TodayCoinBar() {
  const content = 1.07;
  const percent = 0.27
  return (
    <div >
      <h1 className='font-bold text-3xl'>Today's Cryptocurrency Prices by Market Cap</h1>
      <text>The global crypto market cap is ${content}, a {percent}% increase over the last day. </text>
      <a>Read more</a>
      <div className='flex'>
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
      <Card img = 'https://s2.coinmarketcap.com/static/cloud/img/TrendingIcon.png?_=309fd9c' header = 'Trending' 
      name1='optimism' name2 = 'PancakeSwap' name3 = 'Saudi Shiba Inu' nameTag1 ='OP' nameTag2='CAKE' nameTag3='SAUDISHIB'
      percent1='17.07' percent2='2.40' percent3='175.25' img1='	https://s2.coinmarketcap.com/static/img/coins/64x64/11840.png'
      img2 = 'https://s2.coinmarketcap.com/static/img/coins/64x64/7186.png' img3='	https://s2.coinmarketcap.com/static/img/coins/64x64/21061.png'
      
      />
      
      </div>
    </div>
  )
}
