import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const descriptions = product.description;
  const [user, setUser] = useState(
    useSelector((state) => state.auth.login.currentUser)
  );

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`http://localhost:8000/book/${id}`);
      setProduct(await response.json());
    };
    getProduct();
  }, []);

  useEffect(() => {
    const getUser = async () => {
      if (user) {
        const response = await fetch(`http://localhost:8000/user/${user._id}`);
        setUser(await response.json());
      }
    };
    getUser();
  }, []);

  async function editData(apiEdit, data) {
    let options = {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(apiEdit, options);
    const data2 = await response.json();
  }

  const addProduct = () => {
    let have = 0;
    for (let i = 0; i < user.products.length; i++) {
      if (product._id === user.products[i]._id) {
        have = 1;
      }
    }
    if (have === 0) {
      let edit = {
        products: [...user.products, { ...product, qty: 1 }],
      };
      editData(`${process.env.REACT_APP_SERVERS_URL}/user/${user._id}`, edit);
    }
  };

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
          <h1 className=" fw-bold">{product.name}</h1>
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

          {user ? (
            <>
              <button
                className="btn btn-outline-secondary border border-dark border-2 px-4 py-2"
                onClick={() => addProduct()}
              >
                Add to Cart
              </button>
              <button className="btn btn-dark  px-4 py-2 ms-2 border border-light border-2">
                <NavLink
                  to="/cart"
                  className=" text-decoration-none text-white"
                >
                  Go to Cart
                </NavLink>
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-dark border border-dark border-2 px-4 py-2">
                <NavLink
                  to="/login"
                  className="nav-link text-decoration-none fw-bold "
                >
                  Add to Cart
                </NavLink>
              </button>
              <button className="btn btn-dark  px-4 py-2 ms-2 border border-light border-2">
                <NavLink
                  to="/login"
                  className=" text-decoration-none text-white fw-bold"
                >
                  Go to Cart
                </NavLink>
              </button>
            </>
          )}
        </div>
      </>
    );
  };

  const ShowDescriptions = () => {
    const renderList =
      descriptions &&
      descriptions.map((item, i) => (
        <h5 className="mt-3" key={i}>
          {item}
        </h5>
      ));
    return <div className="app mt-3">{renderList}</div>;
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">
          <ShowProduct />
        </div>
        <div className="bg-info rounded-5 p-5" style={{"--bs-bg-opacity": .2}}>
          <h1>M?? t??? s???n ph???m:</h1>
          <ShowDescriptions />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
