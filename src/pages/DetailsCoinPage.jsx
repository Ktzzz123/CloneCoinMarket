import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InfoContent from "../components/detailPage/InfoContent";
import { methodCall } from "../utils/request";
import StaticStore from "../utils/StaticStore/index";

export default function DetailsCoinPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [coin, setCoin] = useState({});
  const listSymbolInfo = ["BTC", "ETH", "LPT", "BNB", "BSW"];
  const [toggle, setToggle] = useState(false)

  const asyncGetDataCoin = async (symbol_id) => {
    const data = await methodCall({
      method: "cmc_crypto_info",
      params: [symbol_id],
    });
    StaticStore.SymbolInfo[symbol_id] = data.result;
    console.log("lay data coin",StaticStore.SymbolInfo);
    setToggle(true)
    console.log("gan du lieu cho coin");
    console.log(StaticStore.SymbolInfo)
    for (var i in StaticStore.SymbolInfo) {
      console.log(i)
      if (i === id) {
        console.log(i)
        setCoin(StaticStore.SymbolInfo[i])
      }
      else{
        console.log('false')
      }
    }
  };


  useEffect(() => {
    var isEmptyObj = Object.keys(StaticStore.SymbolInfo).length;
    if (isEmptyObj) {
      console.log("da co data");
      for (var i in StaticStore.SymbolInfo) {
        console.log(i)
        if (i === id) {
          console.log(i)
          setCoin(StaticStore.SymbolInfo[i])
        }
        else{
          console.log('false')
        }
      }

    } else {
      console.log("chua co data");
      listSymbolInfo.forEach((symbol_id) =>  asyncGetDataCoin(symbol_id)
      )

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
            <li className="px-5 mx-5 flex h-12 bg-blue-600 text-white rounded-xl content-center font-bold hover:bg-blue-700 items-center text-center">Overview</li>
            <li className="px-5 mx-5 flex h-12 rounded-xl content-center font-bold hover:bg-slate-400 items-center text-center">Markets</li>
            <li className="px-5 mx-5 flex h-12 rounded-xl content-center font-bold hover:bg-slate-400 items-center text-center">Historical Data</li>
            <li className="px-5 mx-5 flex h-12 rounded-xl content-center font-bold hover:bg-slate-400 items-center text-center">News</li>
            <li className="px-5 mx-5 flex h-12 rounded-xl content-center font-bold hover:bg-slate-400 items-center text-center">Price Estimates</li>
            <li className="px-5 mx-5 flex h-12 rounded-xl content-center font-bold hover:bg-slate-400 items-center text-center">More Info</li>

          </ul>
        </div>
        <div className="flex border-solid border-2 border-yellow-400">
          <div className="w-2/3 border-solid border-2 border-indigo-600 mr-5">
            <div>chart</div>
            <div>Infor</div>
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
