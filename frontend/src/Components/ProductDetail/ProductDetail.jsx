import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const descriptions = product.description;
  const user = useSelector((state) => state.auth.login.currentUser);

  let storageKey = "todoList";
  let dataString = localStorage.getItem(storageKey);
  let todoList;
  if (dataString) {
    todoList = JSON.parse(dataString);
  } else {
    todoList = [];
  }

  const add = (product) => {
    let have = 0;
    if (todoList.length > 0) {
      for (let i = 0; i < todoList.length; i++) {
        if (todoList[i]._id === product._id) {
          have = 1;
        }
      }
      console.log(have);
      if (have !== 1) {
        todoList.push({ ...product, qty: 1 });
        localStorage.setItem(storageKey, JSON.stringify(todoList));
      }
    } else {
      todoList.push({ ...product, qty: 1 });
      localStorage.setItem(storageKey, JSON.stringify(todoList));
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`http://localhost:8000/book/${id}`);
      setProduct(await response.json());
    };
    getProduct();
  }, []);

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-5 px-auto my-auto">
          <img
            src={product.image}
            className="product-img card card-img"
            alt={product.name}
          />
        </div>
        <div className="col-md-6 my-auto">
          <h3 className=" fw-bold">{product.name}</h3>
          <h1 className="display-5">{product.title}</h1>
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
          <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
          <button
            className="btn btn-outline-dark px-4 py-2"
            onClick={() => add(product)}
          >
            Add to Cart
          </button>
          <button className="btn btn-dark  px-4 py-2 ms-2">
            {user ? (
              <>
                <NavLink
                  to="/cart"
                  className=" text-decoration-none text-white"
                >
                  Go to Cart
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className=" text-decoration-none text-white"
                >
                  Go to Cart
                </NavLink>
              </>
            )}
          </button>
        </div>
      </>
    );
  };

  const ShowDescriptions = () => {
    const renderList =
      descriptions && descriptions.map((item) => <h6 className="mt-3">{item}</h6>);
    return <div className="app mt-3">{renderList}</div>;
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">
          <ShowProduct />
        </div>
        <div className="">
          <h1>Mô tả sản phẩm:</h1>
          <ShowDescriptions />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
