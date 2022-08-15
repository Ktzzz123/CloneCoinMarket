import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import StaticStore from "../../utils/StaticStore";
import { subscribeServer } from "../../utils/subcribe";
import { methodCall } from "../../utils/request";
import { RowItem } from "./coinMarket/RowItem";

const rowConfig = [
  {
    exchange: "BINANCE",
    currency1: "BTC",
    currency2: "USDT",
  },
  {
    exchange: "BINANCE",
    currency1: "ETH",
    currency2: "USDT",
  },
  {
    exchange: "BINANCE",
    currency1: "LPT",
    currency2: "USDT",
  },
  {
    exchange: "BINANCE",
    currency1: "BNB",
    currency2: "USDT",
  },
  {
    exchange: "BINANCE",
    currency1: "BSW",
    currency2: "USDT",
  },
];
const listSymbolInfo = ["BTC", "ETH", "LPT", "BNB", "BSW","ADA","DOGE"];


export default function CoinMarket(props) {
  const navigate = useNavigate();
  const dataTabRef = useRef([]);

  useEffect(() => {
    let temp = [];
    for (var i = 0; i < rowConfig.length; i++) {
      temp = temp.concat(
        `${rowConfig[i].exchange}_SPOT_${rowConfig[i].currency1}_${rowConfig[i].currency2}`
      );
    }
    temp = JSON.stringify(temp);

    asyncSubData();
  }, []); // run the first time and just run when there are a change in rowConfig

  const asyncSubData = async () => {
    // console.log('params',params)
    // console.log("asyncSubData");
    const data = await subscribeServer({
      method: "sub",
      symbol_ids: [
        "BINANCE_SPOT_BTC_USDT",
        "BINANCE_SPOT_ETH_USDT",
        "BINANCE_SPOT_LPT_USDT",
        "BINANCE_SPOT_BNB_USDT",
        "BINANCE_SPOT_BSW_USDT",
        "BINANCE_SPOT_ADA_USDT",
        "BINANCE_SPOT_DOGE_USDT"
      ],
    });
  };
  useEffect(() => {
    const asyncGetDataCoin = async (symbol_id) => {
      const data = await methodCall({
        method: "cmc_crypto_info",
        params: [symbol_id],
      });
      StaticStore.SymbolInfo[symbol_id] = data.result;
      // console.log('lay data coin')
    };

    listSymbolInfo.forEach((symbol_id) => {
      asyncGetDataCoin(symbol_id);
    });
  }, []);

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
            <th className="text-right w-44">Price</th>
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
          {rowConfig.map((config, index) => {
            return (
              <RowItem
                exchange={config.exchange}
                currency1={config.currency1}
                currency2={config.currency2}
                index={index}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
