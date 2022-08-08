import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { data } from "../Data";

export default function DetailsCoinPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [coin, setCoin] = useState([]);
  useEffect(() => {
    if (id) {
      data.forEach((c) => {
        if (c[1] === id) {
          setCoin(c);
          console.log(coin);
        }
      });
    }
  }, [id, coin]);

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
          <div>{id}</div>
        </div>

        {/* coin info */}
        <div className="flex ">
          <div className="w-1/3 h-96">
            <div className="flex items-center">
              <img className="w-14" src={coin[0]} alt={coin[2]} />
              <h1 className="font-bold mx-5 text-6xl ">{coin[1]}</h1>
              <div className="mx-5 bg-slate-200 px-2 rounded-xl">{coin[2]}</div>
              <div className="border-solid text-center rounded-lg border-slate-500 border-2 h-fit">
                <svg
                  className="cursor-pointer text-slate-600 h-full mx-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="20"
                  fill="currentColor"
                  class="bi bi-star"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                </svg>
              </div>
              <div className="flex font-bold border-solid rounded-lg border-slate-500 border-2 h-fit mx-2 ">
                <svg
                  className="mx-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="20"
                  fill="currentColor"
                  class="bi bi-arrow-bar-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
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

            {/* Second row */}
            <div className="flex-wrap flex ">
              <div className="flex bg-slate-200 w-fit p-1 items-center rounded-xl text-base mx-3 cursor-pointer">
                <svg className="m-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-link-45deg"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                </svg>

                <div>{coin[1]}</div>
                <svg className="m-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  height="16px"
                  width="16px"
                  viewBox="0 0 24 24"
                  class="sc-16r8icm-0 coGWQa"
                >
                  <path
                    d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="flex bg-slate-200 w-fit p-1 items-center rounded-xl text-base cursor-pointer">
                <svg
                  className="m-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                <div className="mr-2">Explores</div>
                <svg
                  className="m-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  height="16px"
                  width="16px"
                  viewBox="0 0 24 24"
                  class="sc-16r8icm-0 coGWQa"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div className=" flex bg-slate-200 items-center mx-5 p-1 w-fit rounded-xl text-lg cursor-pointer ">
                <svg className="m-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
                <div>Community</div>
                <svg
                  className="m-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  height="16px"
                  width="16px"
                  viewBox="0 0 24 24"
                  class="sc-16r8icm-0 coGWQa"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>

              <div className=" flex bg-slate-200 items-center mx-5 p-1 w-fit m-auto h-fit rounded-xl text-lg cursor-pointer ">
                <svg className="m-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-code-slash"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                </svg>
                <div>Source code</div>
                <svg className="m-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  height="16px"
                  width="16px"
                  viewBox="0 0 24 24"
                  class="sc-16r8icm-0 coGWQa"
                >
                  <path
                    d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div className=" flex bg-slate-200 items-center m-5 p-1 w-fit rounded-xl text-lg cursor-pointer ">
                <svg className="m-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-bar-graph" viewBox="0 0 16 16">
                  <path d="M10 13.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v6zm-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1z" />
                  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                </svg>
                <div>Whitepaper</div>
                <svg className="mx-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  height="16px"
                  width="16px"
                  viewBox="0 0 24 24"
                  class="sc-16r8icm-0 coGWQa"
                >
                  <path
                    d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>

            </div>
          </div>
          <div className="2/3">infor</div>
        </div>
        {/*Coin data and community */}

        <div className="flex">
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
