import React, { Component } from "react";

export const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Apollo Running Short",
        src: "../products-img/p1.svg",
        Description:
          "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
        price: 23,
        colors: ["#5ECE7B", "#8A8A8A", "orange"],
        count: 1,
      },
      {
        _id: "2",
        title: "Apollo Running Short",
        src: "../products-img/p2.svg",
        Description:
          "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
        price: 19,
        colors: ["red", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "3",
        title: "Apollo Running Short",
        src: "../products-img/p3.svg",
        Description:
          "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
        price: 50,
        colors: ["lightblue", "#ddd", "crimson", "blue"],
        count: 1,
      },
      {
        _id: "4",
        title: "Apollo Running Short",
        src: "../products-img/p4.svg",
        Description:
          "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
        price: 15,
        colors: ["orange", "black", "crimson"],
        count: 1,
      },
      {
        _id: "5",
        title: "Apollo Running Short",
        src: "../products-img/p5.svg",
        Description:
          "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
        price: 10,
        colors: ["orange", "black", "crimson", "coral"],
        count: 1,
      },
      {
        _id: "6",
        title: "Apollo Running Short",
        src: "../products-img/p6.svg",
        Description:
          "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
        price: 17,
        colors: ["orange", "black", "crimson"],
        count: 1,
      },
    ],
    cart: [],
    total: 0,
  };

  addCart = (id) => {
    const { products, cart } = this.state;
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      this.setState({ cart: [...cart, ...data] });
    } else {
      alert("The product has been added to cart.");
    }
  };

  reduction = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    this.setState({ cart, cart });
    this.getTotal();
  };

  increase = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  removeProduct = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      const { cart } = this.state;
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      this.setState({ cart: cart });
      this.getTotal();
    }
  };

  getTotal = () => {
    const { cart } = this.state;
    const res = cart.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
    this.setState({ total: res });
  };

  render() {
    const { products, cart, total } = this.state;
    const { addCart, reduction, increase, removeProduct, getTotal } = this;
    return (
      <DataContext.Provider
        value={{
          products,
          addCart,
          cart,
          reduction,
          increase,
          removeProduct,
          getTotal,
          total,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
