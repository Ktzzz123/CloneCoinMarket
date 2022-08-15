import React, { useEffect } from "react";

export default function InfoContent({ coin, ...props }) {
  useEffect(() => {});
  return (
    <div className="h-full">
      {/* coin info */}

      <div className="flex ">
        <div className="w-1/3">
          <div className=" h-fit">
            <div className="flex items-center">
              <img className="w-14" src={coin.logo} alt={"logo"} />
              <h1 className="font-bold mx-5 text-6xl ">{coin.name}</h1>
              <div className="mx-5 bg-slate-200 px-2 rounded-xl">{}</div>
              <div className="border-solid text-center rounded-lg border-slate-500 border-2 h-fit">
                <i className="bi bi-star"></i>
              </div>
              <div className="flex font-bold border-solid rounded-lg border-slate-500 border-2 h-fit mx-2 ">
                <i className="bi bi-arrow-bar-up mx-2"></i>
                <div className="mr-2">Share</div>
              </div>
            </div>

            <div className="my-5 flex">
              <div className="bg-slate-400 text-white mx-5 p-1 w-fit rounded-xl text-lg ">
                Rank {}#
              </div>
              <div className="p-1 w-fit rounded-lg text-lg text-black bg-slate-200 mr-5">
                {coin.category}
              </div>
              <div className="p-1 w-fit rounded-xl text-lg text-black bg-slate-200 mr-5">
                on 123456789 watchlists
              </div>
            </div>
          </div>

          {/* Second row */}
          <div className="flex-wrap flex gap-5 ">
            <div className="shadow-sm flex bg-slate-200 w-fit h-full p-1 items-center rounded-xl text-base cursor-pointer">
              <i className="m-1 bi bi-link-45deg"></i>
              <div>{coin.name}.org</div>
              <i className="m-1 bi bi-box-arrow-in-up-right"></i>
            </div>
            <div className="shadow-sm flex bg-slate-200 w-fit h-full p-1 items-center rounded-xl text-base cursor-pointer">
              <i className="m-1 bi bi-file-bar-graph"></i>
              <div className="">Explores</div>
              <i className="m-1 bi bi-chevron-down"></i>
            </div>
            <div className="shadow-sm flex bg-slate-200 w-fit h-full p-1 items-center rounded-xl text-base cursor-pointer">
              <i className="m-1 bi bi-person-fill"></i>
              <div>Community</div>
              <i className="m-1 bi bi-chevron-down"></i>
            </div>
            <div className="shadow-sm flex bg-slate-200 w-fit h-full p-1 items-center rounded-xl text-base cursor-pointer">
              <i className="m-1 bi bi-code-slash"></i>
              <div>Source code</div>
              <i className="m-1 bi bi-box-arrow-in-up-right"></i>
            </div>
            <div className="shadow-sm flex bg-slate-200 w-fit h-full p-1 items-center rounded-xl text-base cursor-pointer">
              <i className="m-1 bi bi-file-earmark-bar-graph"></i>
              <div>Whitepaper</div>
              <i className="m-1 bi bi-box-arrow-in-up-right"></i>
            </div>
          </div>

          {/* Tag  */}
          <div>
            <div>Tags:</div>
            {/*
                //TODO: add tag to                */}
          </div>
        </div>


        <div className="w-2/3">
          <div >
            <div className="flex">
              <div>{coin.name} </div>
              <div className="mx-2"> Prices (</div>
              <div>{coin.symbol}</div>)
            </div>
            <div className="flex font-bold text-6xl">
              <i className="bi bi-currency-dollar"></i>
              <div className="">888888888 </div>
            </div>
            {/*
                //TODO: convert to ETH
                */}
            <div></div>
            <div className="flex items-center">
              <div>Low:</div>
              <i className="bi bi-currency-dollar"></i>
              <div className="h-2 w-72 bg-slate-400 border-solid rounded-md border-slate-900">
                <div className="h-2 w-52 bg-slate-600 border-solid rounded-md border-slate-900"></div>
              </div>
            </div>
          </div>

          <div className="flex-wrap flex w-full">
            <div className="border-r border-y border-solid border-l-stone-700 w-1/4">
              <div className="p-5">
                <div className="flex">
                  <div>Market Cap</div>
                  <i className="  bi bi-balloon-heart bg-slate-300 cursor-pointer rounded-full w-8 h-8 text-center"></i>
                </div>
                <div className="font-bold">8888888888888</div>
                <div className="font-bold">0.888888</div>
              </div>
            </div>
            <div className="border-r border-y border-solid border-l-stone-700 w-1/4">
              <div className="p-5">
                <div className="flex">
                  <div>Fully Diluted Market Cap</div>
                  <i className="  bi bi-balloon-heart bg-slate-300 cursor-pointer rounded-full w-8 h-8 text-center"></i>
                </div>
                <div>8888888888888888</div>
                <div>0.88888888</div>
              </div>
            </div>

            <div className="border-r border-y border-solid border-l-stone-700 w-1/4">
              <div className="p-5">
                <div>
                  <div className="flex">
                    <div>Volume</div>
                    <div>24h</div>
                    <i className="  bi bi-balloon-heart bg-slate-300 cursor-pointer rounded-full w-8 h-8 text-center"></i>
                  </div>
                  <div>88888888888888</div>
                  <div>0.88888888</div>
                </div>
                <div>
                  <div>Volume / Market Cap</div>
                  <div>0.05822</div>
                </div>
              </div>
            </div>

            <div className="border-r border-y border-solid text-xl border-l-stone-700 w-1/4">
              <div className="p-5">
                <div className="flex">
                  <div>Circulating Supply </div>
                  <i className="  bi bi-balloon-heart bg-slate-300 cursor-pointer rounded-full w-8 h-8 text-center"></i>
                  <i className="bi bi-check-circle-fill text-blue-800"></i>
                </div>
                <div className="flex justify-between">
                  <div>88888888888888</div>
                  <div>88%</div>
                </div>
                <div className="h-2 w-72 bg-slate-400 border-solid rounded-md border-slate-900">
                  <div className="h-2 w-52 bg-slate-600 border-solid rounded-md border-slate-900"></div>
                </div>
                <div className="flex justify-between">
                  <div className="flex">
                    <div>Max Supply</div>
                    <i className="  bi bi-balloon-heart bg-slate-300 cursor-pointer rounded-full w-8 h-8 text-center"></i>
                  </div>
                  <div>888888888888</div>
                </div>
                <div className="flex justify-between">
                  <div className="flex">
                    <div>Max Supply</div>
                    <i className="  bi bi-balloon-heart bg-slate-300 cursor-pointer rounded-full w-8 h-8 text-center"></i>
                  </div>
                  <div>888888888888</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
