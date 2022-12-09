import React from "react";
import { NavLink } from "react-router-dom";
import "./home.css";

const HomePage = () => {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container pb-5" data-aos="zoom-out" data-aos-delay={100}>
        <div className="row">
          <div className="col-lg-7">
            <div id="container">
              <div id="flip">
                <div>
                  <div className="txtinsetshadow">STORE</div>
                </div>
                <div>
                  <div className="txtinsetshadow">BOOK</div>
                </div>
                <div>
                  <div className="txtinsetshadow">
                    <img
                      className="rounded-circle me-2 mb-2"
                      style={{ width: "50px" }}
                      src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/298550602_829812135093598_2665490973521757313_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sL3o8vprblUAX9A0o5m&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDqrXwulmcD7PRN9KRWGLyCEm6nE5yqZRme-1-wGgCGbw&oe=6395C217"
                      alt="LOGO"
                    />
                    LIKE LION
                  </div>
                </div>
              </div>
            </div>
            <h2 className="txtinsetshadow" style={{fontSize:"40px"}}>Book không chỉ là sách, Book còn là tri thức ^_^</h2>
            <button
              type="button"
              class="btn btn-outline-danger border border-danger border-5 mt-4"
            >
              <NavLink to="/products" className="nav-link link-light">
                <h3>Mua Book ngay</h3>
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
