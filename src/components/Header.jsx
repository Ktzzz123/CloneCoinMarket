import React from 'react'
import Num from './header/Num'

export default function Header() {
  return (
    <div className='bg-white'>

    <div className='bg-white flex justify-between'>
        <div className='flex items-center'>
            <div className='flex text-xl mr-10'>Cryptos: <Num content = '20.240'/>
            </div>
            <div className='flex text-xl mr-10'>Exchanges:
                <Num content = '499'/>
            </div>
            <div className='flex text-xl mr-10'>Market Cap:
                <Num content = '$1,052,769,066,640.602'/>
            </div>
            <div className='flex text-xl mr-10'>24h Vol:
                <Num content = '$76,060,831,770.75'/>
            </div>
            <div className='flex text-xl mr-10'>Dominance: 
                <Num content = 'BTC: 41.5% ETH: 18.3%'/>
            </div>
            <div className='flex text-xl mr-10'>ETH Gas: 
                <Num content = '9 Gwei'/>
            </div>
        </div>


        <div className='flex items-center '>
            <div className='mr-5 font-bold'>English</div>
            <div className='mr-5 font-bold'>USD</div>
            <div className='bg-slate-400 w-px'></div>
                <img className='mx-5' src='https://s2.coinmarketcap.com/static/cloud/img/loyalty-program/diamond-icon.svg'/>
            <button className='m-5 p-3 border-solid border-blue-700 rounded-xl' >Login</button>
            <button className='m-5 p-3 bg-blue-700 text-white rounded-xl '>Sign up</button>
        </div>
        
    </div>
    <div className='bg-slate-300  h-px'/>

{/* second header */}

    <div className='flex justify-between  py-4 px-8 h-28    ' >
        <div className='flex '>
            <img className='w-72' src='https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_1.svg?_=948d22e'/>
         
            <div className=' flex items-center justify-center'>
                <div className='px-10 hover:bg-slate-200 h-max'>Cryptocurrencies</div>
                <div className='px-10 hover:bg-slate-200 h-max'>Exchanges</div>
                <div className='px-10 hover:bg-slate-200 h-max'>Community</div>
                <div className='px-10 hover:bg-slate-200 h-max'>Products</div>
                <div className='px-10 hover:bg-slate-200 h-max'>Learn</div>

            </div>
        </div>


        <div className='items-center flex'>
            <div className='flex '>
                <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <div className='px-2'>Watchlist</div>
                </div>

                <div className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 24 24" className="sc-1prm8qw-0 eFjnQR">
                        <path d="M13.8182 2H13V11H22V10.1818C22 5.68182 18.3182 2 13.8182 2Z" fill="#A6B0C3"></path>
                        <path d="M11.35 5H10.5C5.825 5 2 8.825 2 13.5C2 18.175 5.825 22 10.5 22C15.175 22 19 18.175 19 13.5V12.65H11.35V5Z" fill="#A6B0C3"></path>
                    </svg>
                        <div className='px-2'>Portfolio</div>
                </div>
                <div className='bg-slate-300 rounded-lg flex w-96 h-14 items-center justify-between'> 
                    
                    <div className='flex m-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                        <div className='font-bold mx-5 text-slate-600'>Search</div>
                    </div>
                    <div className='bg-slate-400 w-8 text-center rounded text-white mr-3'>/</div>
                        
                    
                </div>
            </div>
        </div>
    </div>
    </div>
    
  )
}
