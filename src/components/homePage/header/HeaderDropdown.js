import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

function DropdownTabBar() {
    const [active1, setActive1] = useState(0);
    const listMenu = [
        {
            "title": "Cryptocurrencies",
            "subMenu": [
                {
                    "title": 'Ranking',
                    'icon': 'bi bi-currency-bitcoin',
                    'iconColor': 'bg-blue-600'
                }
            ]
        }
    ]
    return (
        <>
   <div className="flex ">
          <img
            className="w-72 cursor-pointer"
            src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_1.svg?_=948d22e"
            alt="logo"
            onClick={() => { Navigate('/') }}
          />

          <div className=" flex items-center justify-center">
            {/*
             ******************************
             */}
            <div className=" inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md  px-4 py-2  text-2xl text-gray-700 hover:text-blue-700 font-bold"
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
                  className="inline-flex justify-center w-full rounded-md  px-4 py-2  text-2xl text-gray-700 hover:text-blue-700 font-bold"
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
                  className="inline-flex justify-center w-full rounded-md  px-4 py-2  text-2xl text-gray-700 hover:text-blue-700 font-bold"
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
                  className=" inline-flex justify-center w-full rounded-md  px-4 py-2  text-2xl text-gray-700 hover:text-blue-700 font-bold"
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
                  className="inline-flex justify-center w-full rounded-md  px-4 py-2  text-2xl text-gray-700 hover:text-blue-700 font-bold"
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
        </>
    )
};

export default DropdownTabBar;