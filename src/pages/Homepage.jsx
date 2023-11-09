import React, { useEffect, useState } from 'react';
import AdvertiseBar from '../components/homePage/AdvertiseBar';
import CoinMarket from '../components/homePage/CoinMarket';
import TodayCoinBar from '../components/homePage/TodayCoinBar';
import Header from '../components/homePage/header/Header';
import StaticStore from '../utils/StaticStore';


function Homepage(props) {
  const socket = StaticStore.socket_stream;
  const [listCoins, setListCoins] = useState([]);


  useEffect(() => {
    socket.on(
      socket.emit('method', {
        "method": "cmc_crypto_category",
        "id": 1,
        "params": ["605e2ce9d41eae1066535f7c"]
      }))
    socket.on('method-response', (msg) => {
      if (msg) {
        setListCoins(msg.result.coins)
      }
    })
  }, [socket])

  return (
    <div className='m-auto px-32'>
      <div className='py-8'>
        <AdvertiseBar />

      </div>
      <CoinMarket listCoins={listCoins} />
    </div>
  );
}

export default Homepage;