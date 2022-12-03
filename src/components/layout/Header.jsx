import React from "react";
import logo from "../../assets/img/bestbuy.png";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "./header.css";

function Header() {
  return (
    <div className="header-container">
      <div>
        <img src={logo} alt="logo" height="50px" width="100px" />
      </div>
      <div>PRODUCTS</div>
      <div>SERVICES</div>
      <div>DEALS</div>
      <ShoppingCartOutlinedIcon />
    </div>
  );
}

export default Header;
