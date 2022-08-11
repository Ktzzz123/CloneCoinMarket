import React, { useEffect } from "react";

export default function InfoContent({ coin, ...props }) {
  let tags = [];
  tags = coin[15];

  useEffect(() => {});
  return (
    <div>
      {/* coin info */}

      <div className="flex ">
        <div className="w-1/3 h-96">
          <div className="mb-10">
            <div className="flex items-center">
              <img className="w-14" src={coin[0]} alt={coin[2]} />
              <h1 className="font-bold mx-5 text-6xl ">{coin[1]}</h1>
              <div className="mx-5 bg-slate-200 px-2 rounded-xl">{coin[2]}</div>
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
                Rank {coin[12]}#
              </div>
              <div className="p-1 w-fit rounded-xl text-lg text-black bg-slate-200 mr-5">
                {coin[13]}
              </div>
              <div className="p-1 w-fit rounded-xl text-lg text-black bg-slate-200 mr-5">
                on 123456789 watchlists
              </div>
            </div>
          </div>

          {/* Second row */}
          <div className="flex-wrap flex ">
            <div className="flex bg-slate-200 w-fit p-1 items-center rounded-xl text-base mx-3 cursor-pointer">
              <i className="bi bi-link-45deg"></i>

              <div>{coin[1]}</div>
              <i className="bi bi-box-arrow-in-up-right"></i>
            </div>
            <div className="flex bg-slate-200 w-fit p-1 items-center rounded-xl text-base cursor-pointer">
              <i className="bi bi-file-bar-graph"></i>
              <div className="mr-2">Explores</div>
              <i className="bi bi-chevron-down"></i>
            </div>
            <div className=" flex bg-slate-200 items-center mx-5 p-1 w-fit rounded-xl text-lg cursor-pointer ">
              <i className="bi bi-person-fill"></i>
              <div>Community</div>
              <i className="bi bi-chevron-down"></i>
            </div>

            <div className=" flex bg-slate-200 items-center mx-5 p-1 w-fit m-auto h-fit rounded-xl text-lg cursor-pointer ">
              <i className="bi bi-code-slash"></i>
              <div>Source code</div>
              <i className="bi bi-box-arrow-in-up-right"></i>
            </div>
            <div className=" flex bg-slate-200 items-center m-5 p-1 w-fit rounded-xl text-lg cursor-pointer ">
              <i className="m-2 bi bi-file-earmark-bar-graph"></i>
              <div>Whitepaper</div>
              <i className="bi bi-box-arrow-in-up-right"></i>
            </div>
          </div>

          {/* Tag  */}
          <div>
            <div>Tags:</div>
            {/*
                //TODO: add tag to coins
                */}
          </div>
        </div>
        <div className="2/3">
          <div className="h-1/2">
            <div className="flex">
              <div>{coin[1]} </div>
              <div>Prices</div>
              <div>{coin[2]}</div>
            </div>
            <div>
              <i className="bi bi-currency-dollar"></i>
              <div>{coin[3]}</div>
              <div>{coin[5]}</div>
            </div>
            <div></div>
            <div className="flex items-center">
              <div>Low:</div>
              <i className="bi bi-currency-dollar">Coin_low </i>
              <div className="w-20 h-2 bg-red-700 border-solid">
                <span className="w-10 bg-black border-solid"></span>
              </div>
              <div>High:</div>
              <i className="bi bi-currency-dollar">Coin_High </i>
              <div className="items-center mx-2 p-1 bg-slate-200 text-lg rounded-xl cursor-pointer">
                <i class="bi bi-chevron-compact-down">24h</i>
              </div>
            </div>
          </div>
          

          <div className="h-1/2 w-full flex">
            <div className="w-1/4 border-solid">1</div>
            <div className="w-1/4 border-solid">1</div>
            <div className="w-1/4 border-solid">1</div>
            <div className="w-1/4 border-solid">1</div>

          </div>
        </div>
      </div>
    </div>
  );
}
