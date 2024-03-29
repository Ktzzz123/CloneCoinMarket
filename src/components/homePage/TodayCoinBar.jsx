import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import StaticStore from '../../utils/StaticStore'
import Card from './todayCoinBar/Card'

const trendingCoin = [{ symbol: 'BTC' }, { symbol: 'ADA' }, { symbol: 'DOGE' }]
export default function TodayCoinBar() {
    const content = 1.07
    const percent = 0.27
    // console.log(StaticStore)
    const [listCoin, setListCoin] = useState(trendingCoin)

    useEffect(() => {
        // setInterval(() => {
        //     let temp = []
        //     const listData = listCoin.map((symb) => {
        //         // console.log(listCoin)
        //         // console.log( StaticStore.SymbolInfo[symb?.symbol])
        //         temp = temp.concat(StaticStore.SymbolInfo[symb?.symbol])
        //     })
        //     // console.log(temp)
        //     setListCoin(temp)
        // }, 2000)
        // console.log(listCoin)
        // console.log(StaticStore)
    }, [])
    
    return (
        <div>
        
            <div className='flex'>
                <Card listCoin={listCoin} />
            </div>
        </div>
    )
}
