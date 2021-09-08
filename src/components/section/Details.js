import React, { Component } from "react";
import { DataContext } from "../Context";
import { Link } from "react-router-dom";
import "../css/Details.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export class Details extends Component {
  static contextType = DataContext;
  state = {
    product: [],
  };

  getProduct = () => {
    if (this.props.match.params.id) {
      const res = this.context.products;
      const data = res.filter((item) => {
        return item._id === this.props.match.params.id;
      });
      this.setState({ product: data });
    }
  };

  componentDidMount() {
    this.getProduct();
  }

  render() {
    const { product } = this.state;
    const { addCart } = this.context;
    return (
      <>
        {product.map((item) => (
          <div className="details" key={item._id}>
            <Carousel className="carousel">
              <div className="carousel-item">
                <img src={item.src} alt="" />
              </div>
              <div className="carousel-item">
                <img src={item.src} alt="" />
              </div>
              <div className="carousel-item">
                <img src={item.src} alt="" />
              </div>
            </Carousel>
            <div className="row">
              <h4>APOLLO</h4>
              <h5>Running Short</h5>
              <div className="size-detail">
                <h4>SIZE:</h4>
                <ul>
                  <li activeClassName="is-active">XS</li>
                  <li activeClassName="is-active">S</li>
                  <li activeClassName="is-active">M</li>
                  <li activeClassName="is-active">L</li>
                </ul>
              </div>
              <div className="price-detail">
                <h4>PRICE:</h4>
                <h5>${item.price}</h5>
                <Link
                  to="/cart"
                  className="add-cart"
                  onClick={() => addCart(item._id)}
                >
                  Add to cart
                </Link>
                <p>
                  Find stunning women's cocktail dresses <br /> and party
                  dresses. Stand out in lace and <br /> metallic cocktail
                  dresses and party <br /> dresses from all your favorite
                  brands.
                </p>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default Details;
