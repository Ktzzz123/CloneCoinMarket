import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { data } from "../utils/data";
import TreeMap from "react-d3-treemap";
import "react-d3-treemap/dist/react.d3.treemap.css";
import { useEffect } from "react";
import StaticStore from "../utils/StaticStore";
import { eventList } from "../utils/constants/eventLists";
import { glb_sv } from "../utils";

export default function Login() {
  const navigate = useNavigate();
  const [dataAll, setDataAll] = useState(data);
  const [temp,setTemp] = useState()

  const listCoin = ["BTC", "ETH", "LPT", "BNB", "BSW","ADA","DOGE"]
  useEffect(()=>{
    const listenData = glb_sv.commonEvent.subscribe(async (msg) => {
      if (msg.type === eventList.UPDATE_MARKET_DATA) {
        const [exchangeSplit, tradeTypeSplit, currency1Split, currency2Split] =
          msg.symbol_id?.split("_");

          listCoin.map((coin)=>{
            console.log(coin)
            if (currency1Split===coin.symbol) {
              const dataRowTempt = {
                ...StaticStore.StructureData[
                  `BINANCE_SPOT_${currency1Split}_USDT`
                ],
                info: StaticStore.SymbolInfo[currency1Split]
              };
              console.log(dataRowTempt)
              setTemp({ ...dataRowTempt });
              
            }
          })
        
      }
    });

    return () => {
      listenData.unsubscribe();
    };

  }, []);
  useEffect(()=>{
    console.log(temp)
  },[temp])


  return (
    <div className="h-screen flex">
      <div className="w-1/2">
        <div className="w-4/5 m-auto mt-32 border border-solid shadow-lg rounded-3xl p-10 bg-white">
          <div>
            <i class="bi bi-x-lg float-right"></i>
          </div>
          <div className="flex text-3xl">
            <div className="cursor-pointer font-bold m-auto  p-2 text-blue-600 decoration-solid decoration-blue-600 underline">
              Log in
            </div>
            <div
              className="cursor-pointer m-auto font-semibold p-2"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign up
            </div>
          </div>
          <div className="my-10">
            <div>
              <div className="text-slate-500">Email Address</div>
              <input
                className="border rounded-xl w-full h-20 placeholder:p-10"
                type="email"
                placeholder="Enter your email address..."
              ></input>
            </div>

            <div>
              <div className="flex justify-between text-slate-500 pt-5">
                <div>Password</div>
                <div className="cursor-pointer">Forgot password?</div>
              </div>
              <input
                className="border rounded-xl w-full h-20 placeholder:p-10"
                type="password"
                placeholder="Enter your password..."
              ></input>
            </div>
            <button className=" p-5 my-5 font-bold rounded-2xl border border-solid border-blue-700 w-full">
              Log in
            </button>
            <div className="h-2 w-full border-t-2 relative"></div>
            <button className=" p-5 my-5 font-bold rounded-2xl flex items-center w-full border border-solid border-yellow-400">
              <div className="flex m-auto">
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 126.61 126.61"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#f3ba2f">
                    <path d="m38.73 53.2 24.59-24.58 24.6 24.6 14.3-14.31-38.9-38.91-38.9 38.9z" />
                    <path d="m0 63.31 14.3-14.31 14.31 14.31-14.31 14.3z" />
                    <path d="m38.73 73.41 24.59 24.59 24.6-24.6 14.31 14.29-38.9 38.91-38.91-38.88z" />
                    <path d="m98 63.31 14.3-14.31 14.31 14.3-14.31 14.32z" />
                    <path d="m77.83 63.3-14.51-14.52-10.73 10.73-1.24 1.23-2.54 2.54 14.51 14.5 14.51-14.47z" />
                  </g>
                </svg>
                Continue with Binance
              </div>
            </button>
            <button className="p-5 font-bold rounded-2xl flex w-full items-center border border-solid border-blue-800">
              <div className="m-auto">
                <i class="bi bi-wallet-fill mx-2"></i>
                Continue with wallet
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* Heat map  */}
      <div className="w-1/2 h-fit bg-white">
        <div className="m-auto">
          <TreeMap
            height={600}
            width={600}
            data={dataAll ? dataAll : data}
            valueUnit={"Coin"}
          />
        </div>
      </div>
    </div>
  );
}
