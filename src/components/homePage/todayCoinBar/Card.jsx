import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import StaticStore from '../../../utils/StaticStore/index'
import { methodCall } from '../../../utils/request'

export default function Card({ listCoin = [] }) {
    const [dataCoin, setDataCoin] = useState([])

    useEffect(() => {
        const dataCoinTempt = Promise.all(
            listCoin.map(async (coin) => {
                const { result, success } = await methodCall({
                    method: 'cmc_crypto_info',
                    params: [coin.symbol],
                })
                return {
                    info: result || {},
                }
            })
        )
        console.log(dataCoinTempt, 'dataCoinTempt')
    }, [listCoin])

    // const dataCoinTempt = listCoin.map(async (coin) => {
    // })
    // console.log('dataCoinTempt', Promise.all[dataCoinTempt])
    // setDataCoin(Promise.all[dataCoinTempt])

    return (
        <div className='w-1/3 h-80 bg-white rounded-3xl shadow-sm m-5 p-5'>
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    Treding
                    <i class='bi bi-fire text-orange-600'></i>
                </div>
                <div className='text-blue-800 cursor-pointer'>More {'>>'}</div>
            </div>
            <div className=''>
                {/* {dataCoin.map((coin) => (
                    <ItemCard key={Math.random()} coin={coin} />
                ))} */}
            </div>
        </div>
    )
}
