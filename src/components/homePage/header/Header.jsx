import React, { useEffect, useState, } from "react";
import { eventList } from "../../../utils/constants/eventLists";
import Loading from "../../../utils/Loading/Loading";
import { methodCall } from "../../../utils/request";
import StaticStore from "../../../utils/StaticStore";
import { subscribeServer } from "../../../utils/subcribe";
import { useNavigate } from "react-router-dom";
import HeaderBarItem from "../../header/HeaderBarItem";
import DropdownTabBar from "./HeaderDropdown";
import { glb_sv } from "../../../utils";


export default function Header() {
  const [dataCategories, setDataCategories] = useState([]);
  const [rowData, setRowData] = useState([]);
  const [active1, setActive1] = useState(0);
  const [search, setSearch] = useState(false);
  const navigate = useNavigate();
  const listSymbol = ["BTC", "ETH", "XRP", "UNI", "FIL", "FLOW", "MKR", "AR", "CELO", "ROSE", "COMP", "KEEP", "RLY", "YGG", "OXT", "HNS"];

  useEffect(() => {
    // asyncGetData()
    setTimeout(() => { }, 1000);

    const listenData = glb_sv.commonEvent.subscribe((msg) => {
      if (msg.type === eventList.UPDATE_MARKET_DATA) {
        // console.log("UPDATE_MARKET_DATA", msg, StaticStore.StructureData)
      }
    });
    return () => {
      listenData.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const asyncGetDataCoin = async (symbol_id) => {
      const data = await methodCall({
        method: "cmc_crypto_info",
        params: [symbol_id],
      });
      StaticStore.SymbolInfo[symbol_id] = data.result;
      setDataCategories(Object.values(StaticStore.SymbolInfo));
    };

    listSymbol.forEach((symbol_id) => {
      asyncGetDataCoin(symbol_id);
    });
  }, []);

  useEffect(() => {
    // console.log(dataCategories);
    setRowData(Object.values(dataCategories.slice(0, 6)));
    // console.log(rowData);
  }, [dataCategories]);
  return (
    <div className="bg-white ">

      <div className="bg-white flex justify-between py-3 px-10">
        <div className="flex items-center" style={{color: '#616E85'}}>
          <HeaderBarItem content={'Cryptos: '} value={'2M+'}/>
          <HeaderBarItem content={'Exchanges: '} value={'672'}/>
          <HeaderBarItem content={'Market Cap: '} value={'$1,052,769,066,640.602'}/>
          <HeaderBarItem content={'24h Vol: '} value={'$76,060,831,770.75'}/>
          <HeaderBarItem content={'Dominance: '} value={'BTC: 41.5% ETH: 18.3%'}/>
          <HeaderBarItem content={'ETH Gas: '} value={'9 Gwei'}/>

        </div>

        <div className="flex items-center ">
          <div className="mr-5 cursor-pointer font-bold">English</div>
          <div className="mr-5 cursor-pointer font-bold">USD</div>
          <div className="bg-slate-400 w-px"></div>
          <img
            className="mx-5 cursor-pointer"
            src="https://s2.coinmarketcap.com/static/cloud/img/loyalty-program/diamond-icon.svg"
            alt="VIP"

          />
          <button onClick={() => { navigate('/login') }} className="mx-5 font-bold p-3 border-solid border border-blue-700 rounded-xl">
            Log in
          </button>
          <button className="font-bold p-3 bg-blue-700 text-white rounded-xl ">
            Sign up
          </button>
        </div>
      </div>
      <div className="bg-slate-100  h-px" />

      {/* second header */}

      <div className="relative flex justify-between py-4 h-28 px-10">
        <DropdownTabBar />

        <div className="items-center flex relative">
          <div className="flex ">
            <div className="flex items-center hover:bg-slate-200 rounded-xl">
              <i className="bi bi-star-fill ml-2  "></i>
              <div className="px-2">Watchlist</div>
            </div>

            <div className="flex items-center hover:bg-slate-200 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16px"
                width="16px"
                viewBox="0 0 24 24"
                className="sc-1prm8qw-0 eFjnQR ml-2"
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
            {/* Search box */}
            <div
              className="bg-slate-300 rounded-lg flex w-96 h-14 items-center justify-between cursor-pointer"
              onClick={() => {
                setSearch(!search);
                setInterval(() => {
                  let temp = document.getElementById("input-search");
                  if (temp) temp.focus();
                }, 100);
              }}
            >
              <div className="flex m-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                <div className="font-bold mx-5 text-slate-600">Search</div>
              </div>
              <div className="bg-slate-400 w-8 text-center rounded text-white mr-3">
                /
              </div>
            </div>
            
            {search ? (
              <div
                onMouseLeave={() => {

                  // let temp = setTimeout(() => {
                  //   document.getElementById("search-box");
                  // }, 100);
                  // if (temp) {
                  //   setSearch(!search);
                  // }
                  setSearch(false);
                }}
                id="search-box"
                className="absolute bg-white w-full h-fit border border-slate-200 rounded-2xl shadow-sm"
              >
                <div className="m-5">
                  <div className="flex justify-between ">
                    <i className="mx-2 bi bi-search"></i>
                    <input
                      id="input-search"
                      className="w-full focus:outline-none "
                      type="text"
                      placeholder="Search coin, pair, contract address or exchange"
                      maxLength={200}
                    ></input>
                    <i className="mx-2 bi bi-x-circle cursor-pointer"></i>
                  </div>
                  <div className=" p-5">
                    <div className="flex text-xl">
                      <div>Trending</div>
                      <i
                        onClick={() => {
                          let temp = document.getElementById("input-search");
                          console.log(temp);
                        }}
                        className="bi bi-fire text-orange-600"
                      ></i>
                    </div>
                    <div>
                      {rowData ? (
                        rowData.map((coin) => {
                          // console.log(coin);
                          return (
                            <div onClick={() => {
                              setSearch(false)
                              navigate("coin/" + coin?.symbol);
                            }} className="flex justify-between cursor-pointer">
                              <div className="flex items-center">
                                <img
                                  className="m-2 w-10 h-10"
                                  src={coin?.logo}
                                  alt="logo"
                                />
                                <div className="m-2 font-bold">
                                  {coin?.name}
                                </div>
                                <div className="m-2 text-slate-400">
                                  {coin?.symbol}
                                </div>
                              </div>
                              <div>
                                <div className="text-slate-400 text-lg">
                                  # {coin?.id}
                                </div>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <Loading />
                      )}
                    </div>
                  </div>
                  <div className="border-t-2 border-slate-200 p-5">
                    <div className="text-xl">Recent searches</div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="bg-slate-100  h-px" />
    </div>
  );
}
