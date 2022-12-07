import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import * as Icon from "react-bootstrap-icons";

const Cart = () => {
  const storageKey = "todoList";
  const [dataString, setDataString] = useState(
    localStorage.getItem(storageKey)
  );
  let todoList = JSON.parse(dataString);

  const increase = (productID) => {
    for (let product of todoList) {
      if (product._id == productID) {
        product.qty++;
      }
    }
    localStorage.setItem(storageKey, JSON.stringify(todoList));
    setDataString(localStorage.getItem(storageKey));
  };

  const decrease = (productID) => {
    for (let product of todoList) {
      if (product._id == productID && product.qty > 1) {
        product.qty--;
      } else if (product._id == productID) {
        todoList = todoList.filter((items) => items._id !== productID);
        console.log(todoList);
      }
    }
    localStorage.setItem(storageKey, JSON.stringify(todoList));
    setDataString(localStorage.getItem(storageKey));
  };

  const totalEachProduct = (product) => {
    return product.qty * product.price;
  };

  const totalAllProduct = () => {
    let total = 0;
    for (let i = 0; i < todoList.length; i++) {
      total = total + todoList[i].qty * todoList[i].price;
    }
    return total;
  };

  const ShowProducts = () => {
    if (todoList.length > 0) {
      return (
        <>
          {todoList.map((product) => {
            return (
              <>
                <div
                  className="row justify-content-center mt-3 border border-3 gap-2 gap-xl-5"
                  key={product._id}
                >
                  <div className="col-12 col-md-4 col-lg-3 col-xl-2 ">
                    <img
                      src={product.image}
                      className="cart-img card mx-auto"
                      alt={product.name}
                      style={{ maxWidth: "200px", maxHeight: "200px" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-8 row gap-lg-2 col-xl-8 gap-xl-5">
                    <div className="text-center col-lg-5 text-lg-start col-xl-5">
                      <h5 className="text-uppercase ">{product.name}</h5>
                      <h6 className="fst-italic">Tác giả: {product.author}</h6>
                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <Icon.StarHalf />
                          </li>
                          <li className="list-inline-item">
                            <Icon.Star />
                          </li>
                          <li className="list-inline-item">
                            <Icon.Star />
                          </li>
                          <li className="list-inline-item">
                            <Icon.Star />
                          </li>
                          <li className="list-inline-item">
                            <Icon.Star />
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-3 col-xl-3 d-flex  align-items-center justify-content-center">
                      <button
                        type="button"
                        className="btn btn-secondary mt-0"
                        onClick={() => decrease(product._id)}
                      >
                        <Icon.DashLg />
                      </button>
                      <p
                        className="d-flex align-items-center mx-3 pt-2"
                        style={{ fontSize: "20px" }}
                      >
                        {product.qty}
                      </p>
                      <button
                        type="button"
                        className="btn btn-secondary mt-0"
                        onClick={() => increase(product._id)}
                      >
                        <Icon.PlusLg />
                      </button>
                    </div>

                    <h5 className="col-lg-3 col-xl-2 d-flex  align-items-center justify-content-center">
                      $ {totalEachProduct(product)}
                    </h5>
                  </div>
                </div>
              </>
            );
          })}
        </>
      );
    } else {
      return <></>;
    }
  };

  const YourCart = () => {
    if (todoList.length > 0) {
      return (
        <>
          {todoList.map((product) => {
            return (
              <>
                <li className="list-group-item d-flex justify-content-between lh-sm m-0">
                  <div>
                    <h6 className="my-0" style={{ maxWidth: "250px" }}>
                      {product.name}
                    </h6>
                    <small className="text-muted">x {product.qty}</small>
                  </div>
                  <span className="text-muted">
                    $ {totalEachProduct(product)}
                  </span>
                </li>
              </>
            );
          })}
        </>
      );
    }
  };

  return (
    <div className="container cart">
      <ShowProducts />
      <div>
        <main>
          <div className="row g-5 mt-3 justify-content-lg-around">
            <div className="col-12 col-md-5 col-lg-4 order-md-last">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Your cart</span>
                <span className="badge bg-primary rounded-pill">
                  {todoList.length}
                </span>
              </h4>
              <ul className="list-group m-0">
                <YourCart />
                <li className="list-group-item d-flex justify-content-between bg-light m-0">
                  <div className="text-success">
                    <h6 className="my-0">Promo code</h6>
                    <small>EXAMPLECODE</small>
                  </div>
                  <span className="text-success">−$0</span>
                </li>
                <li className="list-group-item d-flex justify-content-between m-0">
                  <span>Total (USD)</span>
                  <strong>{totalAllProduct()}</strong>
                </li>
              </ul>
              <form className="card p-2">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Promo code"
                  />
                  <button type="submit" className="btn btn-secondary my-1">
                    Redeem
                  </button>
                </div>
              </form>
            </div>
            <div className="col-12 col-md-7 col-lg-6">
              <h2 className="mb-3">Thông tin nhận hàng</h2>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="d-flex form-label">
                      <h5>Họ</h5>{" "}
                      <span className="text-muted">
                        <h5>(Bắt buộc)</h5>
                      </span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="Nguyễn"
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="lastName" className="d-flex form-label">
                      <h5>Tên</h5>{" "}
                      <span className="text-muted">
                        <h5>(Bắt buộc)</h5>
                      </span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="A"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="email" className="d-flex form-label">
                      <h5>Email</h5>{" "}
                      <span className="text-muted">
                        <h5>(Không bắt buộc)</h5>
                      </span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="you@gmail.com"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="address" className="d-flex form-label">
                      <h5>Địa chỉ</h5>{" "}
                      <span className="text-muted">
                        <h5>(Bắt buộc)</h5>
                      </span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="số nhà, tên đường, phường, quận"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="address2" className="d-flex form-label">
                      <h5>Số điện thoại</h5>{" "}
                      <span className="text-muted">
                        <h5>(Bắt buộc)</h5>
                      </span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address2"
                      placeholder="Số điện thoại"
                    />
                  </div>
                </div>
                <hr className="my-4" />
                <button className="w-100 btn btn-primary btn-lg" type="submit">
                  Đặt hàng
                </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Cart;
