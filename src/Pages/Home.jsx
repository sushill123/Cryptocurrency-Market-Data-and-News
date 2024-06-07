import { useContext, useEffect, useState } from "react";
import "../Pages/Home.css";
import { CoinContext } from "../Context/CoinContext";
import { Link } from "react-router-dom";

const Home = () => {


  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("")


  const inputHandler = (e) => {
    setInput(e.target.value);
    e.target.value === "" ? setDisplayCoin(allCoin) : ""
  }

  const searchHandler = async (e) => {
    e.preventDefault();
    const coins = await allCoin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase())
    })
    setDisplayCoin(coins)
  }

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin])


  return (
    <div className="home">
      <div className="hero">
        <h1>Explore Market Caps </h1>
        <p>Welcome to the world's largest Cryptocurrency marketplace.Explore more cryptos.</p>
        <form onSubmit={searchHandler}>


          <input type="text" placeholder="Search Crypto .." onChange={inputHandler} list="coinlist" required value={input} />

          <datalist id="coinlist">
            {allCoin.map((item, index) => (<option key={index} value={item.name} />))}
          </datalist>


          <button className="submit">Search</button>
        </form>
      </div>

      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24H Change</p>
          <p className="market-cap">Market Cap</p>
        </div>
        {
  displayCoin.slice(0, 10).map((item) => {
    return (
      <Link to={`/coin/${item.id}`} className="table-layout" key={item.id}>
        <p>{item.market_cap_rank}</p>
        <div>
          <img src={item.image} alt={`${item.name} logo`} />
          <p>{item.name} - {item.symbol}</p>
        </div>
        <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
        <p style={{ textAlign: "center" }} className={item.price_change_percentage_24h > 0 ? "green" : "red"}>
          {item.price_change_percentage_24h.toFixed(2)}%
        </p>
        <p className="market-cap">{currency.symbol} {item.market_cap.toLocaleString()}</p>
      </Link>
    );
  })
}
      </div>


    </div>
  )
}

export default Home;