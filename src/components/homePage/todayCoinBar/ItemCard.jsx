import React from "react";

export default function ItemCard({ coin }) {
  const checkPercent = (percent) => {
    if (percent > 0) return "text-green-500";
    else if (percent < 0) return "text-red-500";
    else return "text-yellow-500";
  };

  return (
    <div className="cursor-pointer flex justify-between py-5">
      {console.log(coin)}
      <div className="flex">
        <div className="px-5">{coin?.data?.info?.id}</div>
        <img
          className="w-8 h-auto "
          src={coin?.data?.info?.logo}
          alt={coin?.data?.info?.name}
        />
        <div className="px-5 font-bold">{coin?.data?.info?.name}</div>
        <div className="text-slate-400">{coin?.data?.info?.symbol}</div>
      </div>
      <div
        className={checkPercent(
          (
            (coin?.data?.ohlcv?.["1HRS"]?.price_open /
              coin?.data?.ohlcv?.["1HRS"]?.price_close) *
              100 -
            100
          ).toFixed(2)
        )}
      >
        {(
          (coin?.data?.ohlcv?.["1HRS"]?.price_open /
            coin?.data?.ohlcv?.["1HRS"]?.price_close) *
            100 -
          100
        ).toFixed(2)}
        %
      </div>
    </div>
  );
}
