import { useContext, useEffect, useState } from "react";
import "./Coin.css";
import { useParams } from "react-router-dom";
import { CoinContext } from "../Context/CoinContext";
import LineChart from "../Components/Navbar/LineChart/LineChart";

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
  const { currency } = useContext(CoinContext);

  // FETCHING COINS DATA //
  const fetchCoinData = async () => {
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`);
      const data = await response.json();
      setCoinData(data);
    } catch (err) {
      console.error('Error fetching coin data:', err);
    }
  };

  // FETCHING HISTORICAL LAST 10 DAYS DATA //
  const fetchHistoricalData = async () => {
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10`);
      const data = await response.json();
      setHistoricalData(data);
    } catch (err) {
      console.error('Error fetching historical data:', err);
    }
  };

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [currency, coinId]);

  if (coinData && historicalData) {
    return (
      <div className="coin">
        
        <div className="coin-name">
          <img src={coinData.image.small} alt={`${coinData.name} logo`} />
          <p><b>{coinData.name} ({coinData.symbol.toUpperCase()}) </b></p>
        </div>
        <div className="coin-chart">
          <LineChart historicalData={historicalData} />
        </div>
       <div className="coin-info">
       <ul>
          <li>Current Price</li>
          <li>{currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}</li>
        </ul>
        <ul>
          <li>Market Cap</li>
          <li>{currency.symbol} {coinData.market_data.market_cap[currency.name].toLocaleString()}</li>
        </ul>
        <ul>
          <li>24 Hour High</li>
          <li>{currency.symbol} {coinData.market_data.high_24h[currency.name].toLocaleString()}</li>
        </ul>
        <ul>
          <li>24 Hour Low</li>
          <li>{currency.symbol} {coinData.market_data.low_24h[currency.name].toLocaleString()}</li>
        </ul>
       </div>
      </div>
    );
  } else {
    return (
      <div className="spinner">
        <div className="spin"></div>
      </div>
    );
  }
};

export default Coin;
