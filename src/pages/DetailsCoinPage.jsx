/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import InfoContent from "../components/detailPage/InfoContent";
import { methodCall } from "../utils/request";
import StaticStore from "../utils/StaticStore/index";

export default function DetailsCoinPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [coin, setCoin] = useState({});
  const listSymbolInfo = ["BTC", "ETH", "LPT", "BNB", "BSW"];

  const asyncGetDataCoin = async (symbol_id) => {
    const data = await methodCall({
      method: "cmc_crypto_info",
      params: [symbol_id],
    });
    StaticStore.SymbolInfo[symbol_id] = data.result;
    console.log("lay data coin", StaticStore.SymbolInfo);
    console.log("gan du lieu cho coin");
    console.log(StaticStore.SymbolInfo);
    for (var i in StaticStore.SymbolInfo) {
      console.log(i);
      if (i === id) {
        console.log(i);
        setCoin(StaticStore.SymbolInfo[i]);
      } else {
        console.log("false");
      }
    }
  };
  useEffect(()=>{
    // eslint-disable-next-line no-undef
    new TradingView.widget(
      {
      "autosize": true,
      "symbol": "BINANCE:BTCUSDT",
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "light",
      "style": "1",
      "locale": "vi_VN",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "allow_symbol_change": true,
      "container_id": "tradingview_0352e"
    }
      )
  },[])

  useEffect(() => {
    var isEmptyObj = Object.keys(StaticStore.SymbolInfo).length;
    if (isEmptyObj) {
      console.log("da co data");
      for (var i in StaticStore.SymbolInfo) {
        console.log(i);
        if (i === id) {
          console.log(i);
          setCoin(StaticStore.SymbolInfo[i]);
        } else {
          console.log("false");
        }
      }
    } else {
      console.log("chua co data");
      listSymbolInfo.forEach((symbol_id) => asyncGetDataCoin(symbol_id));
    }
    console.log(StaticStore);
  }, []);
  return (
    <div>
      <div>
        <div className="h-10 m-10 flex text-xl">
          <div
            className="text-slate-700 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            Cryptocurrencies
          </div>
          <div className="mx-5">/</div>
          <div
            className="text-slate-700 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            Coins
          </div>
          <div className="mx-5">/</div>
          <div>{coin.symbol}</div>
        </div>

        {/* coin info */}
        <div className="my-4 border-solid border-2 border-red-400">
          <InfoContent coin={coin} />
        </div>
        {/*Coin data and community */}

        <div>
          <div>
            <ul className="flex py-10 border-solid border-y border-slate-400">
              <li className="px-5 mx-5 flex h-12 bg-blue-600 text-white rounded-xl content-center font-bold hover:bg-blue-700 items-center text-center">
                Overview
              </li>
              <li className="px-5 mx-5 flex h-12 rounded-xl content-center font-bold hover:bg-slate-400 items-center text-center">
                Markets
              </li>
              <li className="px-5 mx-5 flex h-12 rounded-xl content-center font-bold hover:bg-slate-400 items-center text-center">
                Historical Data
              </li>
              <li className="px-5 mx-5 flex h-12 rounded-xl content-center font-bold hover:bg-slate-400 items-center text-center">
                News
              </li>
              <li className="px-5 mx-5 flex h-12 rounded-xl content-center font-bold hover:bg-slate-400 items-center text-center">
                Price Estimates
              </li>
              <li className="px-5 mx-5 flex h-12 rounded-xl content-center font-bold hover:bg-slate-400 items-center text-center">
                More Info
              </li>
            </ul>
          </div>
          <div className="flex border-solid border-2 border-yellow-400">
            <div className="w-2/3 border-solid border-2 border-indigo-600 mr-5">
              <div>
    <div className="tradingview-widget-container">
      <div id="tradingview_0352e"></div>
      
      <div className="tradingview-widget-copyright"><a href="https://vn.tradingview.com/symbols/BTCUSDT/?exchange=BINANCE" rel="noopener" target="_blank"><span class="blue-text">BTCUSDT Biểu đồ</span> </a> bởi TradingView</div>
            <Helmet>
            </Helmet>
    </div>
              </div>

              <div className="border border-solid border-slate-700">
                <div>
                  <div>{coin.symbol} to USD Converter</div>
                  <div className="border border-solid border-slate-200 rounded-2xl shadow-sm p-5 m-5 flex items-center">
                    <div>{console.log(coin)}</div>
                    <div className="w-1/2 flex">
                      <img
                        className="w-14 h-14"
                        src={coin.logo}
                        alt={coin.symbol}
                      />
                      <div>
                        <div>{coin.symbol}</div>
                        <div className="font-bold">{coin.name}</div>
                      </div>
                      <input
                        className="w-full placeholder:text-right"
                        placeholder="1"
                      />
                    </div>
                    <div
                      className="border border-solid border-slate-200 rounded-full w-12 h-12
                      text-center flex items-center"
                    >
                      <i className="bi bi-arrow-left-right m-auto "></i>
                    </div>
                    <div className="flex justify-between">
                      <div className=" flex">
                        <i className="bi bi-currency-dollar bg-teal-400 w-12 h-12  rounded-full"></i>
                        <div className="">
                          <div>USD</div>
                          <div>United States Dollar</div>
                        </div>
                      </div>
                      <input
                        className="w-full placeholder:text-right"
                        placeholder="21000"
                      />
                    </div>
                  </div>
                </div>
                <div></div>
                <div></div>
              </div>
              <div>social bitcoin price estimates</div>
            </div>
            <div className="w-1/3 border-solid border-2 border-indigo-600">
              <div className="flex">
                <div>live Bitcoin Chat</div>
                <div>View on community</div>
              </div>
              <div>chat table</div>
              <div>community rule</div>
              <div>BTC Price Statistics</div>
              <div>Trending Coin and Tokens</div>
              <div></div>
            </div>
          </div>
        </div>

        {/* coin's market*/}
        <div>Coin's market</div>
        {/* coin's news*/}
        <div>Coin's news</div>
        {/*people also watch*/}
        <div>People also watch</div>
      </div>
    </div>
  );
}
