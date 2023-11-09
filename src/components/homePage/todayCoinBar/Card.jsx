import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import StaticStore from "../../../utils/StaticStore/index";
import { methodCall } from "../../../utils/request";
import { eventList } from "../../../utils/constants/eventLists";
import cloneDeep from "lodash.clonedeep";
import { data } from "autoprefixer";
import { glb_sv } from "../../../utils";

export default function Card({ listCoin = [] }) {
  const [dataCoin, setDataCoin] = useState(listCoin);
  const [temp,setTemp] = useState('chua gan gi ca');

  // useEffect(() => {
  //   const dataCoinTempt = Promise.all(
  //     listCoin.map(async (coin) => {
  //       let ohlcvData = {};
  //       const { result, success } = await methodCall({
  //         method: "cmc_crypto_info",
  //         params: [coin.symbol],
  //       });


  //       const listenData = StaticStore.appEvent.subscribe(async (msg) => {
  //         if (msg.type === eventList.UPDATE_MARKET_DATA) {
  //           const [
  //             exchangeSplit,
  //             tradeTypeSplit,
  //             currency1Split,
  //             currency2Split,
  //           ] = msg.symbol_id?.split("_");
  //           if (currency1Split === coin.symbol) {
  //             ohlcvData = {
  //               ...StaticStore.StructureData[
  //                 `BINANCE_SPOT_${currency1Split}_USDT`
  //               ].ohlcv,
  //             };
  //             return{
  //               ohlcv: ohlcvData
  //             }
  //           }
  //         }
          
  //       });

  //       return {
  //         info: result || {},
  //         // ohlcv: ohlcvData || {},
  //       };
  //     })
  //   );

  //   dataCoinTempt.then((msg) => {
  //     console.log(msg);
  //     console.log(temp)

  //     setDataCoin([...msg]);
  //     console.log("dataCoin", dataCoin);
  //   });



  // }, []);

  useEffect(() => {
    const listenData = glb_sv.commonEvent.subscribe(async (msg) => {
      if (msg.type === eventList.UPDATE_MARKET_DATA) {
        const [exchangeSplit, tradeTypeSplit, currency1Split, currency2Split] =
          msg.symbol_id?.split("_");
          listCoin.map((coin)=>{
            if (currency1Split===coin.symbol) {
              const dataRowTempt = {
                ...StaticStore.StructureData[
                  `BINANCE_SPOT_${currency1Split}_USDT`
                ],
                info: StaticStore.SymbolInfo[currency1Split]
              };
              setTemp({ ...dataRowTempt });
              
            }
          })
        
      }
    });

    return () => {
      listenData.unsubscribe();
    };

  }, []);


  useEffect(() => {
    // console.log(typeof(listCoin))

    for (var i in listCoin){
      if(listCoin[i].symbol === temp.key){
        listCoin[i] = {
          symbol: temp.key,
          data: temp
        }

      }
    }

    setDataCoin([...listCoin])
    // console.log(temp)
    // console.log(dataCoin)
    // console.log(typeof(dataCoin));
  }, [temp]);

  return (
    <div className="w-1/3 h-80 bg-white rounded-3xl shadow-sm m-5 p-5">
      <div className="flex justify-between">
        <div className="flex items-center">
          Treding
          <i className="bi bi-fire text-orange-600"></i>
        </div>
        <div className="text-blue-800 cursor-pointer">More {">>"}</div>
      </div>
      <div className="">
        {dataCoin.map((coin)=>{
          return  <ItemCard coin = {coin} />
          
        })}
      </div>
    </div>
  );
}
