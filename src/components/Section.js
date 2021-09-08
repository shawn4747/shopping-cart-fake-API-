import React from "react";
import { Route } from "react-router-dom";
import Products from "./section/Products";
import Details from "./section/Details";
import MiniCart from "./section/MiniCart";
import Cart from "./section/Cart";
import CheckOutForm from "./section/CheckOutForm";

export class Section extends React.Component {
  render() {
    return (
      <section>
        <Route path="/product" component={Products} exact />
        <Route path="/product/:id" component={Details} exact />
        <Route path="/minicart" component={MiniCart} exact />
        <Route path="/cart" component={Cart} exact />
        <Route path="/checkout" component={CheckOutForm} exact />
      </section>
    );
  }
}

export default Section;
