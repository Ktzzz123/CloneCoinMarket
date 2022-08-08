import React from 'react';
import AdvertiseBar from '../components/AdvertiseBar';
import CoinMarket from '../components/CoinMarket';
import TodayCoinBar from '../components/TodayCoinBar';

function Homepage(props) {
    return (
        <div className='m-auto'>
        <AdvertiseBar />
        <TodayCoinBar/>
        <CoinMarket/>
        </div>
    );
}

export default Homepage;