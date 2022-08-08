import React from 'react'
import { data } from '../Data'
import DetailsCoinPage from '../pages/DetailsCoinPage'
import Link from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function CoinMarket() {
  const navigate = useNavigate()
  return (
    <div className='mx-6'>
      <div className='items-center flex'>
        <div className='flex items-center bg-slate-200 rounded-xl p-2 m-2' >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
          <div className='px-2'>Watchlist</div>
        </div>
        <div className='flex items-center  bg-slate-200 rounded-xl p-2 m-2'>
          <svg xmlns="http://www.w3.org/2000/svg" height="16px" width="16px" viewBox="0 0 24 24" class="sc-1prm8qw-0 eFjnQR">
            <path d="M13.8182 2H13V11H22V10.1818C22 5.68182 18.3182 2 13.8182 2Z" fill="#A6B0C3"></path>
            <path d="M11.35 5H10.5C5.825 5 2 8.825 2 13.5C2 18.175 5.825 22 10.5 22C15.175 22 19 18.175 19 13.5V12.65H11.35V5Z" fill="#A6B0C3"></path>
          </svg>
          <div className='px-2'>Portfolio</div>
        </div>
        <div className='items-center px-5 bg-blue-100 justify-center text-blue-700 font-bold h-10 rounded-xl'>Cryptocurrencies</div>
        <div className='px-5 font-normal cursor-pointer'>Categories</div>
        <div className='px-5 font-normal cursor-pointer'>DeFi</div>
        <div className='px-5 font-normal cursor-pointer'>NFT</div>
        <div className='px-5 font-normal cursor-pointer'>Metaverse</div>
        <div className='px-5 font-normal cursor-pointer'>Polkadot</div>
        <div className='px-5 font-normal cursor-pointer'>BNB chain</div>
        <div className='px-5 font-normal cursor-pointer'>Solana</div>
        <div className='px-5 font-normal cursor-pointer'>Avalanche</div>
        <div className='px-5 font-normal cursor-pointer text-lg text-slate-600 '>show rows</div>
        <div className='flex bg-slate-200 p-2 mx-1 shadow-sm items-center rounded-lg cursor-pointer'>
          <div>20</div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="14" width="14" viewBox="0 0 24 24" class="sc-16r8icm-0 dWGZqy"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </div>
        <div className='flex bg-slate-200 p-2 mx-1 shadow-sm items-center rounded-lg cursor-pointer '>
          <svg className='pl-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sliders" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z" />
          </svg>
          <div className='px-2'>Filters</div>
        </div>
        <div className='flex bg-slate-200 p-2 mx-1 shadow-sm items-center rounded-lg cursor-pointer'>
          <svg className='' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-ui-checks-grid" viewBox="0 0 16 16">
            <path d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-3zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l2-2z" />
          </svg>
          <div className='px-2'>Customize</div>
        </div>
        <div className='flex bg-slate-200 p-2 mx-1   shadow-sm items-center rounded-lg cursor-pointer'>
          <svg className='bg-white rounded-lg px-px' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
          <svg className='px-px ' xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-border-all" viewBox="0 0 16 16">
            <path d="M0 0h16v16H0V0zm1 1v6.5h6.5V1H1zm7.5 0v6.5H15V1H8.5zM15 8.5H8.5V15H15V8.5zM7.5 15V8.5H1V15h6.5z" />
          </svg>
        </div>
      </div>

      <table className="table-auto mx-5 items-center text-center justify-center">

        <thead>
          <tr className=''>
            <th className='text-right w-16'></th>
            <th className='text-center  w-16'>#</th>
            <th className='text-left w-80'>Name</th>
            <th className='text-right w-36'>Price</th>
            <th className='text-right w-28'>1h %</th>
            <th className='text-right w-28'>24h %</th>
            <th className='text-right w-28'>7d %</th>
            <th className='text-right w-60'>Market Cap</th>
            <th className='text-right w-60'>Volume(24h)</th>
            <th className='text-right w-60'>Circulating Supply</th>
            <th className='text-right w-auto'>Last 7 Days</th>
            <th className='text-right w-12' ></th>
          </tr>
        </thead>
        <tbody>
            {data.map((data) => {
              return <>
              <tr className='items-center text-right cursor-pointer' onClick={()=>{navigate('coin/'+data[1])}}>
                <td className='px-5'> 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                  </svg>
                </td>
                <td className='px-5'> {data.indexOf(data)}</td>


                <td >
                  <div className='flex items-center justify-center m-auto' >

                  <img className='w-10' alt={data[1]} src={data[0]} />
                  <div className='text-center items-center px-5'>{data[1]}</div>
                  
                  <div className='px-5 text-slate-500'>{data[2]}</div>
                  </div>
                  
                </td>


                <td className='px-5'> <div>{data[3]}</div></td>
                <td className='px-5'> {data[4]}</td>
                <td className='px-5'> {data[5]}</td>
                <td className='px-5'> {data[6]}</td>
                <td className='px-5'> {data[7]}</td>
                <td className='px-5'> 

                  <div>{data[8]}</div>
                  <div className='flex items-center justify-end'>
                    <div>{data[9]} </div>
                    <div className='text-slate-500'>{data[2]}</div>
                  </div>
                
                </td>
                <td className='px-5'> {data[10]}</td>
                <td className='px-5'> 
                  <img className='w-72' alt={data[1]} src={data[11]} />
                </td>
                <td>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                </svg>
                </td>
                </tr>
              </>
            })}
        </tbody>
      </table>

    </div>
  )
}
