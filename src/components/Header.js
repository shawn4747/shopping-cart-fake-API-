import React, { Component } from "react";
import Logo from "./svg/logo.svg";
import { NavLink, Link } from "react-router-dom";
import "./css/Header.css";
import Dropdown from "./Dropdown";
import { DataContext } from "./Context";
import Modal from "./section/Modal";

export class Header extends Component {
  static contextType = DataContext;

  render() {
    const { cart } = this.context;

    return (
      <header>
        <nav>
          <ul>
            <li>
              <NavLink activeClassName="active" to="/product/">
                WOMEN
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/men">
                MEN
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/kids">
                KIDS
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="logo">
          <h1>
            <Link to="/main">
              <img src={Logo} alt="" />
            </Link>
          </h1>
        </div>
        <div className="cart">
          <div className="dropdown">
            <Dropdown />
          </div>
          <Modal />
          <span>{cart.length}</span>
        </div>
      </header>
    );
  }
}

export default Header;
