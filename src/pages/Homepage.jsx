import React, { useEffect, useState } from 'react';
import AdvertiseBar from '../components/homePage/AdvertiseBar';
import CoinMarket from '../components/homePage/CoinMarket';
import TodayCoinBar from '../components/homePage/TodayCoinBar';


function Homepage(props) {

    
    return (
        <div className='m-auto'>
        <AdvertiseBar />
        <TodayCoinBar/>
        <CoinMarket />
        </div>
    );
}

export default Homepage;