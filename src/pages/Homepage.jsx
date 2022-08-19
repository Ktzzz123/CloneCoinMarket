import React, { useEffect, useState } from 'react';
import { getSocket } from '../App';
import AdvertiseBar from '../components/homePage/AdvertiseBar';
import CoinMarket from '../components/homePage/CoinMarket';
import TodayCoinBar from '../components/homePage/TodayCoinBar';


function Homepage(props) {
    const socket = getSocket();
    const [listCoins, setListCoins] = useState([]);


    useEffect(()=>{
        socket.on(
          socket.emit('method',  {
            "method": "cmc_crypto_category",
            "id": 1,
            "params": ["605e2ce9d41eae1066535f7c"]
        }))
        socket.on('method-response',(msg)=>{
          if(msg){
            setListCoins(msg.result.coins)
          }
        })
      },[socket])
    
    return (
        <div className='m-auto'>
        <AdvertiseBar />
        <TodayCoinBar/>
        <CoinMarket listCoins = {listCoins}/>
        </div>
    );
}

export default Homepage;