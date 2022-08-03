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
      <Card img = 'https://s2.coinmarketcap.com/static/cloud/img/TrendingIcon.png?_=309fd9c' header = 'Trending'/>
      <Card img = 'https://s2.coinmarketcap.com/static/cloud/img/AddIcon.png?_=309fd9c' header = 'Recently Added'/>
      <Card img = 'https://s2.coinmarketcap.com/static/cloud/img/AddIcon.png?_=309fd9c' header = 'Recently Added'/>
      </div>
    </div>
  )
}
