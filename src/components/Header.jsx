import React, { useEffect, useState, } from "react";
import { eventList } from "../utils/constants/eventLists";
import Loading from "../utils/Loading/Loading";
import { methodCall } from "../utils/request";
import StaticStore from "../utils/StaticStore";
import { subscribeServer } from "../utils/subcribe";
import Num from "./header/Num";
import { useNavigate } from "react-router-dom";


export default function Header() {
  const [dataCategories, setDataCategories] = useState([]);
  const [rowData, setRowData] = useState([]);
  const [active1, setActive1] = useState(0);
  const [search, setSearch] = useState(false);
  const navigate = useNavigate();
  const listSymbol = [
    "BTC",
    "ETH",
    "XRP",
    "UNI",
    "FIL",
    "FLOW",
    "MKR",
    "AR",
    "CELO",
    "ROSE",
    "COMP",
    "KEEP",
    "RLY",
    "YGG",
    "OXT",
    "HNS",
  ];
  useEffect(() => {
    // asyncGetData()
    setTimeout(() => {}, 1000);

    const listenData = StaticStore.appEvent.subscribe((msg) => {
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
      <div className="bg-white flex justify-between px-32 ">
        <div className="flex items-center">
          <div className="flex text-xl mr-10">
            Cryptos: <Num content="20.240" />
          </div>
          <div className="flex text-xl mr-10">
            Exchanges:
            <Num content="499" />
          </div>
          <div className="flex text-xl mr-10">
            Market Cap:
            <Num content="$1,052,769,066,640.602" />
          </div>
          <div className="flex text-xl mr-10">
            24h Vol:
            <Num content="$76,060,831,770.75" />
          </div>
          <div className="flex text-xl mr-10">
            Dominance:
            <Num content="BTC: 41.5% ETH: 18.3%" />
          </div>
          <div className="flex text-xl mr-10">
            ETH Gas:
            <Num content="9 Gwei" />
          </div>
        </div>

        <div className="flex items-center ">
          <div className="mr-5 font-bold">English</div>
          <div className="mr-5 font-bold">USD</div>
          <div className="bg-slate-400 w-px"></div>
          <img
            className="mx-5"
            src="https://s2.coinmarketcap.com/static/cloud/img/loyalty-program/diamond-icon.svg"
            alt="VIP"
          />
          <button className="m-5 p-3 border-solid border-blue-700 rounded-xl">
            Login
          </button>
          <button className="m-5 p-3 bg-blue-700 text-white rounded-xl ">
            Sign up
          </button>
        </div>
      </div>
      <div className="bg-slate-100  h-px" />

      {/* second header */}

      <div className="relative flex justify-between  py-4 h-28 px-32   ">
        <div className="flex ">
          <img
            className="w-72"
            src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_1.svg?_=948d22e"
            alt="logo"
          />

          <div className=" flex items-center justify-center">
            {/*
             ******************************
             */}
            <div className=" inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md  px-4 py-2  text-xl text-gray-700 hover:text-blue-700 font-bold"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={() => {
                    if (active1 === 1) setActive1(0);
                    else setActive1(1);
                  }}
                >
                  Cryptocurrencies
                </button>
              </div>

              {active1 === 1 ? (
                <div
                  className="origin-top-left w-fit absolute p-10 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div className="flex ">
                    <div>
                      <div className="m-5">
                        <div className="text-3xl text-slate-400 font-bold">
                          Cryptocurrencies
                        </div>
                        <div className="mt-5">
                          <div className="flex hover:bg-slate-200 items-center p-3 rounded-xl font-bold ">
                            <i className="bg-blue-600 text-white mr-5 text-center p-2 rounded-full w-12 h-12  bi bi-currency-bitcoin"></i>
                            <div>Ranking</div>
                          </div>
                          <div className="flex hover:bg-slate-200 items-center p-3 rounded-xl font-bold ">
                            <i className="bg-blue-800 text-white mr-5 text-center p-2 rounded-full w-12 h-12  bi bi-file-earmark-plus-fill"></i>
                            <div>Recently Added</div>
                          </div>
                          <div className="flex hover:bg-slate-200 items-center p-3 rounded-xl font-bold ">
                            <i classNameName="bg-orange-500 text-white mr-5 text-center p-2 rounded-full w-12 h-12  bi bi-list-ul"></i>

                            <div>Categories</div>
                          </div>
                          <div className="flex hover:bg-slate-200 items-center p-3 rounded-xl font-bold ">
                            <i classNameName="bg-violet-500 text-white mr-5 text-center p-2 rounded-full w-12 h-12  bi bi-stars"></i>
                            <div>Spotlight</div>
                          </div>
                          <div className="flex hover:bg-slate-200 items-center p-3 rounded-xl font-bold ">
                            <i className="bg-emerald-500 text-white mr-5 text-center p-2 rounded-full w-12 h-12  bi bi-graph-up-arrow"></i>
                            <div>Gainers &amp; Losers</div>
                          </div>
                          <div className="flex hover:bg-slate-200 items-center p-3 rounded-xl font-bold ">
                            <i className="bg-cyan-400 text-white mr-5 text-center p-2 rounded-full w-12 h-12  bi bi-globe"></i>
                            <div>Global Charts</div>
                          </div>
                          <div className="flex hover:bg-slate-200 items-center p-3 rounded-xl font-bold ">
                            <i className="bg-blue-600 text-white mr-5 text-center p-2 rounded-full w-12 h-12  bi bi-clock-history"></i>
                            <div>Historical Snapshots</div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t-2 border-slate-200">
                        <div className="m-5">
                          <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                            <i className="bg-slate-100 text-slate-700 mr-5 text-center p-2 rounded-full w-12 h-12  bi bi-graph-up"></i>
                            <div>Price Estimates</div>
                          </div>
                          <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                            <i className="bg-slate-100 text-slate-700 mr-5 text-center p-2 rounded-full w-12 h-12  bi bi-calendar-minus-fill"></i>
                            <div>Polkadot Parachains </div>
                          </div>
                          <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                            <i className="bg-slate-100 text-slate-700 mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-globe2"></i>
                            <div>Legal Tender Countries</div>
                          </div>
                          <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                            <i className="bg-slate-100 text-slate-700 mr-5 text-center p-2 rounded-full w-12 h-12  bi bi-currency-dollar"></i>
                            <div>Fiats/Companies Rankings</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="m-5">
                        <div className="text-3xl text-slate-400 font-bold">
                          NFT
                        </div>
                        <div className="mt-5">
                          <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                            <i className="bg-blue-600 text-white mr-5 text-center p-2 rounded-full w-12 h-12  bi bi-circle"></i>
                            <div>Overall NFT Stats</div>
                          </div>
                          <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                            <i className="bg-orange-500 text-white mr-5 text-center p-2 rounded-full w-12 h-12  bi bi-image-fill"></i>
                            <div>Top Collections</div>
                          </div>
                          <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                            <i className="bg-teal-400 text-white mr-5 text-center p-2 rounded-full w-12 h-12  bi bi-calendar-fill"></i>
                            <div>Upcoming sales</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            {/*
             ******************************
             */}

            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md  px-4 py-2  text-xl text-gray-700 hover:text-blue-700 font-bold"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={() => {
                    if (active1 === 2) setActive1(0);
                    else setActive1(2);
                  }}
                >
                  Exchanges
                </button>
              </div>

              {active1 === 2 ? (
                <div
                  className="origin-top-right absolute mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div className="m-5">
                    <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                      <i className="bg-teal-500 text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-diamond-fill"></i>
                      <div>Spot</div>
                    </div>
                    <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                      <i className="bg-blue-600 text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-caret-up-fill"></i>
                      <div>Derivatives</div>
                    </div>
                    <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                      <i className="bg-teal-900 text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-x-diamond-fill"></i>
                      <div>DEX</div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            {/*
             ******************************
             */}
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md  px-4 py-2  text-xl text-gray-700 hover:text-blue-700 font-bold"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={() => {
                    if (active1 === 3) setActive1(0);
                    else setActive1(3);
                  }}
                >
                  Community
                </button>
              </div>

              {active1 === 3 ? (
                <div
                  className="origin-top-right absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div className="m-5">
                    <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                      <i className="bg-blue-500 text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-rss-fill"></i>
                      <div>Feeds</div>
                    </div>
                    <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                      <i className="bg-violet-600 text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-file-earmark-text-fill"></i>
                      <div>Articles</div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            {/*
             ******************************
             */}
            <div className=" inline-block text-left">
              <div>
                <button
                  type="button"
                  className=" inline-flex justify-center w-full rounded-md  px-4 py-2  text-xl text-gray-700 hover:text-blue-700 font-bold"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={() => {
                    if (active1 === 4) setActive1(0);
                    else setActive1(4);
                  }}
                >
                  Products
                </button>
              </div>

              {active1 === 4 ? (
                <div
                  className="origin-top-right p-10 flex absolute mt-2  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div className="m-5">
                    <div className="text-3xl text-slate-400 mb-2 font-bold">
                      PRODUCTS
                    </div>
                    <div>
                      <div>
                        <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                          <i className="bg-violet-600 text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-arrow-left-right"></i>
                          <div>Converter</div>
                        </div>
                        <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                          <i className="bg-blue-600 text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-phone-fill"></i>
                          <div>Mobile Apps</div>
                          <i className="ml-5 text-slate-500 text-lg cursor-pointer bi bi-box-arrow-up-right"></i>
                        </div>
                        <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                          <i className="bg-green-500 text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-search"></i>
                          <div>Blockchain Explorer</div>
                          <i className="ml-5 text-slate-500 text-lg cursor-pointer bi bi-box-arrow-up-right"></i>
                        </div>
                        <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                          <i className="bg-amber-600 text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-briefcase-fill"></i>
                          <div>Jobs Board</div>
                          <i className="ml-5 text-slate-500 text-lg cursor-pointer bi bi-box-arrow-up-right"></i>
                        </div>
                      </div>
                      <div className="my-5 border-t-2 border-slate-200">
                        <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                          <i className="bg-slate-100 text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-code-slash"></i>
                          <div>Crypto API</div>
                          <i className="ml-5 text-slate-500 text-lg cursor-pointer bi bi-box-arrow-up-right"></i>
                        </div>
                        <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                          <i className="bg-slate-100 text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-microsoft"></i>
                          <div>Site Widgets</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="m-5">
                    <div className="text-3xl mb-2 text-slate-400 font-bold">
                      CAMPAIGNS
                    </div>
                    <div>
                      <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                        <i className="bg-green-500 text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-calendar-minus-fill"></i>
                        <div>Free Airdrops</div>
                      </div>
                      <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                        <i className="bg-amber-600 text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-gift-fill"></i>
                        <div>Diamond Rewards</div>
                      </div>
                      <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                        <i className="bg-blue-600 text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-cpu-fill"></i>
                        <div>Referral Program</div>
                      </div>
                      <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                        <i className="bg-teal-500 text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-coin"></i>
                        <div>Learn &amp; Earn</div>
                        <i className="ml-5 text-slate-500 text-lg cursor-pointer bi bi-box-arrow-up-right"></i>
                      </div>
                    </div>
                  </div>

                  <div className="m-5">
                    <div className="text-3xl mb-2 text-slate-400 font-bold">
                      CALENDARS
                    </div>
                    <div>
                      <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                        <i className="bg-teal-300 text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-calendar2-fill"></i>
                        <div>ICO Calendar</div>
                      </div>
                      <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                        <i className="bg-blue-500 text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-calendar2-fill"></i>
                        <div>Events Calendar</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            {/*
             ******************************
             */}
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md  px-4 py-2  text-xl text-gray-700 hover:text-blue-700 font-bold"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={() => {
                    if (active1 === 5) setActive1(0);
                    else setActive1(5);
                  }}
                >
                  Learn
                </button>
              </div>

              {active1 === 5 ? (
                <div
                  className="origin-top-right absolute mt-2 w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div className="m-5">
                    <div className="p-5">
                      <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                        <i className="bg-blue-500 text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-square-fill"></i>
                        <div>Alexandria</div>
                      </div>
                      <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                        <i className="bg-blue-900 text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-newspaper"></i>
                        <div>News</div>
                      </div>
                      <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                        <i className="bg-orange-500 text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-people-fill"></i>
                        <div>Conference</div>
                      </div>
                      <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                        <i className="bg-red-500 text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-play-fill"></i>
                        <div>Videos</div>
                      </div>
                      <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                        <i className="bg-violet-500 text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-megaphone-fill"></i>
                        <div>Market Updates</div>
                      </div>
                      <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                        <i className="bg-blue-600 text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-book-fill"></i>
                        <div>Glossary</div>
                      </div>
                      <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                        <i className="bg-green-500 text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-cash"></i>
                        <div>Where to Buy</div>
                      </div>
                    </div>
                    <div className="border-t-2 border-slate-200 mt-2 p-5">
                      <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                        <i className="bg-slate-200 text-slate-700 mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-envelope-fill"></i>
                        <div>Newsletters</div>
                      </div>
                      <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                        <i className="bg-slate-200 text-slate-700 mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-lightbulb-fill"></i>
                        <div>Methodology</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

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
    </div>
  );
}
