import React from "react";
import { NavLink } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

const Footer = () => {
  return (
    <div className=" bg-dark">
      <div className="container pt-3">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3  border-top">
          <NavLink className="nav-link text-light" to="/">
            <img
              className="rounded-circle me-3"
              style={{ width: "40px" }}
              src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/298550602_829812135093598_2665490973521757313_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sL3o8vprblUAX9A0o5m&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDqrXwulmcD7PRN9KRWGLyCEm6nE5yqZRme-1-wGgCGbw&oe=6395C217"
              alt="LOGO"
            />
            LIKE LION BOOK STORE
          </NavLink>
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <NavLink className="text-muted" to="/">
                <svg className="bi" width={30} height={30}>
                  <Icon.Twitter style={{color:"#0d6efd"}}/>
                </svg>
              </NavLink>
            </li>
            <li className="ms-3">
              <NavLink className="text-muted" to="/">
                <svg className="bi" width={30} height={30}>
                  <Icon.Tiktok style={{color:"#0d6efd"}}/>
                </svg>
              </NavLink>
            </li>
            <li className="ms-3">
              <NavLink className="text-muted" to="/">
                <svg className="bi" width={30} height={30}>
                  <Icon.Instagram style={{color: "#dc3545"}}/>
                </svg>
              </NavLink>
            </li>
            <li className="ms-3">
              <NavLink className="text-muted" to="/">
                <svg className="bi" width={30} height={30}>
                  <Icon.Facebook style={{color:"#0d6efd"}}/>
                </svg>
              </NavLink>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
