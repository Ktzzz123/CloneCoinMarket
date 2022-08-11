import React, { useEffect, useState } from "react";
import { data } from "../Data";
import DetailsCoinPage from "../pages/DetailsCoinPage";
import Link from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getSocket } from "../App";
import { io } from "socket.io-client";


const socket = io('http://io.nvdise.space', {
  timeout: 2000,
  secure: true,
  reconnection: false,
  transports: ['websocket'],
  // transports: ['polling'],
})

class MarketSymbolInfo {
  constructor() {
    this.key = '';
    this.trade = {};
    this.ohlcv = {
      "1DAY": {},
      "12HRS": {},
      "1HRS": {},
    };
    this.info = {}
  }
}
let structureData = {};
window.structureData = structureData

let categoriesData = [];
window.categoriesData = categoriesData
  socket.emit("method",
  {
    "method": "cmc_crypto_category",
    "id": 1,
    "params": ["605e2ce9d41eae1066535f7c"]
})

  socket.on('method-response',(data)=>{
   
    let temp = Object.values(data.result.coins)
    temp.map((coin)=>{
      if (!structureData) {
        structureData = new MarketSymbolInfo();
      }
      

      

    })
    
    // console.log(structureData);
    
  })


 socket.on("market-data", (msg) => {
  if (!structureData[msg.symbol_id]) {
    structureData[msg.symbol_id] = new MarketSymbolInfo();
  }
  
  if (msg.type === "trade") {
    structureData[msg.symbol_id]["trade"] = msg;
    
  }
  if (msg.type === "ohlcv") {
    if (msg.period_id === "1DAY") {
      structureData[msg.symbol_id]["ohlcv"]["1DAY"] = msg;
    }
    if (msg.period_id === "12HRS") {
      structureData[msg.symbol_id]["ohlcv"]["12HRS"] = msg;
    }
    if (msg.period_id === "1HRS") {
      structureData[msg.symbol_id]["ohlcv"]["1HRS"] = msg;
    }
    for (var i in structureData){
      if(!structureData.key){
        let temp = structureData[i]['ohlcv']['1DAY'].symbol_id|| structureData[i].trade.symbol_id
        temp = temp.split('_')[2]
       
        structureData[i].key = temp
      }
    }

  }
  // console.log(structureData)  

});
export default function CoinMarket(props) {
  const navigate = useNavigate();
  
  


  useEffect(() => {
    const interval = setInterval(() => {
      updateData()
    }, 3000);
    return()=>{
      clearInterval(interval);
      }
      
  }, []);

  const updateData=()=>{
    const listSymbol = Object.keys(structureData)
    const dataTb = listSymbol.map((key) => {
      return { ...structureData[key] }
    })
    dataTb.map((transaction,index,arr)=>{
      // console.log(transaction)
      let text = transaction.trade.symbol_id
      
      data.map((coin)=>{
        try {
          
          if(text.split('_')[2]===coin[2]){
          coin[3] = transaction.trade.price;
          // console.log(coin[3])
          let temp =((transaction.ohlcv["1HRS"].price_open/transaction.ohlcv["1HRS"].price_close*100)-100).toFixed(2)
            if (isNaN(temp))
            {
              // console.log(typeof(temp))
            }else {
              coin[4] = temp
              // console.log('coin4',coin[4])

            }
            if(temp>0){
              // console.log(transaction.ohlcv["1HRS"].price_open/transaction.ohlcv["1HRS"].price_close*100)
            }

            if(isNaN(((transaction.ohlcv["12HRS"].price_open/transaction.ohlcv["12HRS"].price_close*100)-100).toFixed(2))){
              // console.log('wait for data')
            }else{
              coin[5] = ((transaction.ohlcv["12HRS"].price_open/transaction.ohlcv["12HRS"].price_close*100)-100).toFixed(2)
              // console.log('coin5',coin[5])
            }
            
            if(isNaN(((transaction.ohlcv["1DAY"].price_open/transaction.ohlcv["1DAY"].price_close*100)-100).toFixed(2))){
              // console.log('wait for data')
            }else{
              coin[6] = ((transaction.ohlcv["1DAY"].price_open/transaction.ohlcv["1DAY"].price_close*100)-100).toFixed(2)
              // console.log('coin6',coin[6])
            }



          }
          else{
            // console.log(text.split('_')[2])
          }
        } catch (error) {
          // console.log('wait for data')
        }
      })
      
    })
    
  }

  const isIncrease =(num)=>{
    if(num>0)
    return true 
    else return false
  }

  return (
    <div className="mx-6">
      <div className="items-center flex">
        <div className="flex items-center bg-slate-200 rounded-xl p-2 m-2">
          <i className="bi bi-star"></i>
          <div className="px-2">Watchlist</div>
        </div>
        <div className="flex items-center  bg-slate-200 rounded-xl p-2 m-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16px"
            width="16px"
            viewBox="0 0 24 24"
            className="sc-1prm8qw-0 eFjnQR"
          >
            <path
              d="M13.8182 2H13V11H22V10.1818C22 5.68182 18.3182 2 13.8182 2Z"
              fill="#A6B0C3"
            ></path>
            <path
              d="M11.35 5H10.5C5.825 5 2 8.825 2 13.5C2 18.175 5.825 22 10.5 22C15.175 22 19 18.175 19 13.5V12.65H11.35V5Z"
              fill="#A6B0C3"
            ></path>
          </svg>
          <div className="px-2">Portfolio</div>
        </div>
        <div className="items-center px-5 bg-blue-100 justify-center text-blue-700 font-bold h-10 rounded-xl">
          Cryptocurrencies
        </div>
        <div className="px-5 font-normal cursor-pointer">Categories</div>
        <div className="px-5 font-normal cursor-pointer">DeFi</div>
        <div className="px-5 font-normal cursor-pointer">NFT</div>
        <div className="px-5 font-normal cursor-pointer">Metaverse</div>
        <div className="px-5 font-normal cursor-pointer">Polkadot</div>
        <div className="px-5 font-normal cursor-pointer">BNB chain</div>
        <div className="px-5 font-normal cursor-pointer">Solana</div>
        <div className="px-5 font-normal cursor-pointer">Avalanche</div>
        <div className="px-5 font-normal cursor-pointer text-lg text-slate-600 ">
          show rows
        </div>
        <div className="flex bg-slate-200 p-2 mx-1 shadow-sm items-center rounded-lg cursor-pointer">
          <div>20</div>
          <i className="bi bi-chevron-compact-down"></i>
        </div>
        <div className="flex bg-slate-200 p-2 mx-1 shadow-sm items-center rounded-lg cursor-pointer ">
          <i className="py-2 bi bi-sliders"></i>
          <div className="px-2">Filters</div>
        </div>
        <div className="flex bg-slate-200 p-2 mx-1 shadow-sm items-center rounded-lg cursor-pointer">
          <i className="bi bi-ui-checks-grid"></i>
          <div className="px-2">Customize</div>
        </div>
        <div className="flex bg-slate-200 p-2 mx-1   shadow-sm items-center rounded-lg cursor-pointer">
          <i className="bi bi-list"></i>
          <i className="px-px bi bi-border-all"></i>
        </div>
      </div>

      <table className="table-auto mx-5 items-center text-center justify-center">
        <thead>
          <tr className="">
            <th className="text-right w-16"></th>
            <th className="text-center  w-16">#</th>
            <th className="text-left w-80">Name</th>
            <th className="text-right w-36">Price</th>
            <th className="text-right w-28">1h %</th>
            <th className="text-right w-28">12h %</th>
            <th className="text-right w-28">24h %</th>
            <th className="text-right w-60">Market Cap</th>
            <th className="text-right w-60">Volume(24h)</th>
            <th className="text-right w-60">Circulating Supply</th>
            <th className="text-right w-auto">Last 7 Days</th>
            <th className="text-right w-12"></th>
          </tr>
        </thead>
        

        <tbody>
          {data.map((data, index) => {
            return (
                <tr
                  key={String(index)}
                  className="items-center text-right cursor-pointer"
                  onClick={() => {
                    navigate("coin/" + data[1]);
                  }}
                >
                  <td className="px-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-star"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg>
                  </td>
                  <td className="px-5"> {data.indexOf(data)}</td>

                  <td>
                    <div className="flex items-center justify-center m-auto">
                      <img className="w-10" alt={data[1]} src={data[0]} />
                      <div className="text-center items-center px-5">
                        {data[1]}
                      </div>

                      <div className="px-5 text-slate-500">{data[2]}</div>
                    </div>
                  </td>

                  <td className="px-5">
                    {" "}
                    <div>{data[3]}</div>
                  </td>
                  <td className={isIncrease(data[4])?'text-green-600 px-5':'text-red-600 px-5'} > {data[4]}</td> 
                  <td className={isIncrease(data[5])?'text-green-600 px-5':'text-red-600 px-5'}> {data[5]}</td>
                  <td className={isIncrease(data[6])?'text-green-600 px-5':'text-red-600 px-5'}> {data[6]}</td>
                  <td className="px-5"> {data[7]}</td>
                  <td className="px-5">
                    <div>{data[8]}</div>
                    <div className="flex items-center justify-end">
                      <div>{data[9]} </div>
                      <div className="text-slate-500">{data[2]}</div>
                    </div>
                  </td>
                  <td className="px-5"> {data[10]}</td>
                  <td className="px-5">
                    <img className="w-72" alt={data[1]} src={data[11]} />
                  </td>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-three-dots-vertical"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    </svg>
                  </td>
                </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
