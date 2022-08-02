import React from 'react'
import Num from './header/Num'

export default function Header() {
  return (
    <div>

    <div className='bg-white flex justify-between'>
        <div className='flex'>
            <div className='flex'>Cryptos: <Num content = '20.240'/>
            </div>
            <div className='flex'>Exchanges:
                <Num content = '499'/>
            </div>
            <div className='flex'>Market Cap:
                <Num content = '1,052,769,066,640.602'/>
            </div>
            <div className='flex'>24h Vol:
                <Num content = '76,060,831,770.75'/>
            </div>
            <div className='flex'>Dominance: 
                <Num content = 'BTC: 41.5% ETH: 18.3%'/>
            </div>
            <div className='flex'>ETH Gas: 
                <Num content = '9 Gwei'/>
            </div>
        </div>
        <div className='flex'>
            <div>English</div>
            <div>USD</div>
            <i class="gg-moon"></i>
            <img src='https://s2.coinmarketcap.com/static/cloud/img/loyalty-program/diamond-icon.svg'/>
            <button >Login</button>
            <button>Sign up</button>
        </div>
        
    </div>
    <div className='bg-black h-1'/>


    <div className='flex justify-between'>
        <div className='flex text-center content-center'>
            <img src='https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_1.svg?_=948d22e'/>
            <div>Cryptocurrencies</div>
            <div>Exchanges</div>
            <div>Community</div>
            <div>Products</div>
            <div>Learn</div>
        </div>
        <div>
            <div className='flex'>
                <div className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                </svg>
                Watchlist</div>

                <div className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 24 24" class="sc-1prm8qw-0 eFjnQR">
                    <path d="M13.8182 2H13V11H22V10.1818C22 5.68182 18.3182 2 13.8182 2Z" fill="#A6B0C3"></path>
                    <path d="M11.35 5H10.5C5.825 5 2 8.825 2 13.5C2 18.175 5.825 22 10.5 22C15.175 22 19 18.175 19 13.5V12.65H11.35V5Z" fill="#A6B0C3"></path>
                </svg>
                    Portfolio
                </div>
                <div className='bg-slate-400 rounded-lg w-3'> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    /
                    {/* <input className='bg-slate-400'/> */}
                </div>
            </div>
        </div>
    </div>
    </div>
    
  )
}
