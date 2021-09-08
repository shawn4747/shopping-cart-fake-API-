import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context";
import "../css/Products.css";
import Add from "../svg/add.svg";

export class Products extends Component {
  static contextType = DataContext;

  render() {
    const { products } = this.context;
    return (
      <div className="women">
        <div className="category">
          <h1>Category name</h1>
        </div>
        <div id="product">
          {products.map((product) => (
            <div className="card" key={product._id}>
              <Link to={`/product/${product._id}`}>
                <img src={product.src} alt="" />
              </Link>
              <div className="content">
                <h3>
                  <Link to={`/product/${product._id}`}>{product.title}</Link>
                </h3>
                <h2>${product.price}.00</h2>
              </div>
              <button onClick={() => this.context.addCart(product._id)}>
                <img src={Add} alt="" />
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Products;
