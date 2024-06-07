import React, { useContext } from 'react';
import "./Navbar.css";
import { CoinContext } from "../../Context/CoinContext";
import { Link } from 'react-router-dom';


const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case 'usd': {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case 'eur': {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case 'inr': {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
      }
    }
  }

  return (
    <div className='navbar'>
      <Link to="/">
        <img src="/src/assets/logo.png" alt="" className='logo' />
      </Link>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to='/heatmap'>
          <li>Heatmap</li>
        </Link>
        <Link to='/blog'>
          <li>Blog</li>
        </Link>

      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">Usd</option>
          <option value="eur">Eur</option>
          <option value="inr">Inr</option>
        </select>
        {/* <button>Sign Up</button> */}
      </div>
    </div>
  );
}

export default Navbar;
