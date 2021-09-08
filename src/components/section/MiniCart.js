import React, { Component } from "react";
import "../css/MiniCart.css";
import { DataContext } from "../Context";
import { Link } from "react-router-dom";

export class MiniCart extends Component {
  static contextType = DataContext;

  componentDidMount() {
    this.context.getTotal();
  }

  render() {
    const { cart, increase, reduction, total } = this.context;
    return (
      <header className="Items">
        <>
          <div className="cart-title">
            {cart.map((item) => (
              <h1>My Bag, {item.count} items</h1>
            ))}
            {cart.map((item) => (
              <div className="details-cart" key={item._id}>
                <div className="row-cart">
                  <h4>APOLLO</h4>
                  <h5>Running Short</h5>
                  <div className="price">
                    <h5>${item.price * item.count}</h5>
                  </div>
                  <div className="size-mini">
                    <ul>
                      <li>S</li>
                      <li>M</li>
                    </ul>
                  </div>
                </div>
                <div className="amount">
                  <button className="count" onClick={() => increase(item._id)}>
                    {" "}
                    +{" "}
                  </button>
                  <h2>{item.count}</h2>
                  <button className="count" onClick={() => reduction(item._id)}>
                    {" "}
                    -{" "}
                  </button>
                </div>
                <div className="item-img-cart">
                  <div className="product-image">
                    <img src={item.src} alt="" />
                  </div>
                </div>
              </div>
            ))}
            <div className="total">
              <h1>Total</h1>
              <p>${total}</p>
            </div>
            <div className="checkbtn">
              <Link to="/cart" className="minibtn">
                <button className="bag">VIEWBAG</button>
              </Link>
              <Link to="/checkout" className="minibtn">
                <button className="check">CHECKOUT</button>
              </Link>
            </div>
          </div>
        </>
      </header>
    );
  }
}

export default MiniCart;
