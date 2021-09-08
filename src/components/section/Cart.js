import React, { Component } from "react";
import { DataContext } from "../Context";
import "../css/Cart.css";

export class Cart extends Component {
  static contextType = DataContext;

  render() {
    const { cart, increase, reduction, removeProduct } = this.context;

    return (
      <>
        <div className="cart-title-cart">
          <h1>CART</h1>
          {cart.map((item) => (
            <div className="details-cart-cart" key={item._id}>
              <div className="row-cart-cart">
                <h4>APOLLO</h4>
                <h5>Running Short</h5>
                <div className="price-cart">
                  <h5>${item.price * item.count}</h5>
                </div>
                <div className="size-cart">
                  <ul>
                    <li>S</li>
                    <li>M</li>
                  </ul>
                </div>
              </div>

              <div className="item-img-cart-cart">
                <div className="amount-cart">
                  <button
                    className="count-cart"
                    onClick={() => increase(item._id)}
                  >
                    {" "}
                    +{" "}
                  </button>
                  <h2>{item.count}</h2>
                  <button
                    className="count-cart"
                    onClick={() => reduction(item._id)}
                  >
                    {" "}
                    -{" "}
                  </button>
                </div>
                <img src={item.src} alt="" />
              </div>
              <div className="remove" onClick={() => removeProduct(item._id)}>
                <button>Remove</button>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Cart;
