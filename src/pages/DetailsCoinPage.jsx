import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import InfoContent from "../components/detailPage/InfoContent";
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
          // console.log(coin);
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
            <InfoContent coin = {coin}/>
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
