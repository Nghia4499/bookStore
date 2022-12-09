import { useState, useEffect } from "react";
import "./products.css";
import { NavLink } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
require('dotenv').config()

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  let componentMounted = true;
  
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(`${process.env.REACT_APP_SERVERS_URL}/book`);
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
      }

      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => {
      for (let i = 0; i < x.genres.length; i++) {
        return x.genres[i] === cat;
      }
    });
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="container-fluid">
          <button
            type="button"
            data-bs-target="#sidebar"
            data-bs-toggle="collapse"
            className="col-12 btn-menu btn btn-outline-danger fw-bold border border-danger border-2"
          >
            Thể loại
          </button>
          <div className="products row flex-nowrap ">
            <div className="menu col-auto px-0">
              <div
                id="sidebar"
                className="collapse collapse-horizontal show list-group-item"
              style={{width: "163px"}}
              >
                <div
                  id="sidebar-nav"
                  className="list-group border-0 rounded-0 text-sm-start min-vh-100"
                >
                  <div
                    className="btn-group-vertical"
                    role="group"
                    aria-label="Vertical button group"
                  >
                    <button
                      type="button"
                      className="btn btn-dark"
                      onClick={() => setFilter(data)}
                    >
                      Tất cả
                    </button>
                    <button
                      type="button"
                      className="btn btn-dark"
                      onClick={() => filterProduct("children")}
                    >
                      Thiếu nhi
                    </button>
                    <button
                      type="button"
                      className="btn btn-dark"
                      onClick={() => filterProduct("comic")}
                    >
                      Truyện tranh
                    </button>
                    <button
                      type="button"
                      className="btn btn-dark"
                      onClick={() => filterProduct("education")}
                    >
                      Sách giáo khoa
                    </button>
                    <button
                      type="button"
                      className="btn btn-dark"
                      onClick={() => filterProduct("novel")}
                    >
                      Tiểu thuyết
                    </button>
                    <button
                      type="button"
                      className="btn btn-dark"
                      onClick={() => filterProduct("horrified")}
                    >
                      Kinh dị
                    </button>
                    <button
                      type="button"
                      className="btn btn-dark"
                      onClick={() => filterProduct("cooking")}
                    >
                      Nấu ăn
                    </button>
                    <button
                      type="button"
                      className="btn btn-dark"
                      onClick={() => filterProduct("lifeSkills")}
                    >
                      Kỹ năng sống
                    </button>
                    <button
                      type="button"
                      className="btn btn-dark"
                      onClick={() => filterProduct("english")}
                    >
                      Tiếng anh
                    </button>
                    <button
                      type="button"
                      className="btn btn-dark"
                      onClick={() => filterProduct("science")}
                    >
                      Khoa học
                    </button>
                    <button
                      type="button"
                      className="btn btn-dark"
                      onClick={() => filterProduct("history")}
                    >
                      Lịch sử
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <main className="product row col-10 ">
              {filter.map((product) => {
                return (
                  <div
                    className="col-sm-12 col-md-5 col-lg-4 col-xl-4 mb-4"
                    key={product._id}
                  >
                    <div className="card h-100 text-center p-4">
                      <img
                        src={product.image}
                        className="card-img-top"
                        alt={product.name}
                        height="250px"
                      />
                      <div className="card-body">
                        <h5 className="card-title mb-0">{product.name}</h5>
                        <h6 className="fst-italic mt-3">
                          Tác giải: {product.author[0]}
                        </h6>
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
                        <p className="card-text lead fw-bold">
                          ${product.price}
                        </p>
                        <NavLink
                          to={`/products/${product._id}`}
                          className="btn btn-outline-dark fw-bold border border-dark border-2"
                        >
                          Buy Now
                        </NavLink>
                      </div>
                    </div>
                  </div>
                );
              })}
            </main>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="products row justify-content-center">
          <ShowProducts />
        </div>
      </div>
    </div>
  );
};

export default Products;
