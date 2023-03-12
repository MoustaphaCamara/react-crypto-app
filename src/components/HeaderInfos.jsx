import axios from "axios";
import React, { useEffect, useState } from "react";
import PercentChange from "./PercentChange";
import TableFilters from "./TableFilters";

const HeaderInfos = () => {
  const [headerData, setHeaderData] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/global`)
      .then((res) => setHeaderData(res.data.data));
  }, []);
  return (
    <div className="header-container">
      <ul className="title">
        <li>
          <h1>
            <img src="./assets/logo.png" alt="logo" /> Skyfall
          </h1>
        </li>
        <li>
          Crypto-monnaies :{" "}
          {headerData && headerData.active_cryptocurrencies.toLocaleString()}
        </li>
        <li>Marchés : {headerData && headerData.markets}</li>
      </ul>
      <ul className="infos-mkt">
        <li className="global-mkt">
          Evolution Globalle :{" "}
          <PercentChange
            percent={headerData.market_cap_change_percentage_24h_usd}
          />
        </li>
        <li>
          BTS Dominance :{" "}
          {headerData && `${headerData.market_cap_percentage.btc.toFixed(1)}% `}
        </li>
        <li>
          BTS Dominance :{" "}
          {headerData && `${headerData.market_cap_percentage.eth.toFixed(1)}% `}
        </li>
      </ul>
      <TableFilters />
    </div>
  );
};

export default HeaderInfos;
