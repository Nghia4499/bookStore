import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/user/apiRequest";
import { createAxios } from "../../createInstance";
import { logOutSuccess } from "../../redux/user/authSlice";
import * as Icon from "react-bootstrap-icons";

const NavBar = () => {
  const user = useSelector((state) => state.auth.login.currentUser);
  const accessToken = user?.accessToken;
  const id = user?._id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let axiosJWT = createAxios(user, dispatch, logOutSuccess);

  const handleLogout = () => {
    logOut(dispatch, id, navigate, accessToken, axiosJWT);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="/">
          Start Bootstrap
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarResponsive"
        >
          <ul className="nav mb-2 justify-content-center mb-md-0">
            <li>
              <NavLink to="#" className="nav-link px-2 link-light">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="nav-link px-2 link-light">
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="nav-link px-2 link-light">
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="nav-link px-2 link-light">
                FAQs
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="nav-link px-2 link-light">
                About
              </NavLink>
            </li>
          </ul>

          <div className="d-flex">
            {user ? (
              <>
                <div className="d-flex">
                  <h5 className="navbar-user text-white me-4 mt-2">
                    Hi, <span> {user.username} </span>
                  </h5>                 
                  <button
                    type="button"
                    className="btn btn-danger my-0"
                  >
                    <NavLink to="/cart" className="nav-link link-light">
                      <Icon.Cart3 />
                    </NavLink>
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary ms-2 my-0"
                  >
                    <NavLink to="/logout" className="nav-link px-2 link-light" onClick={handleLogout}>
                    Log out
                    </NavLink>
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="d-flex col-md-3 text-end">
                  <button
                    type="button"
                    className="btn btn-outline-primary me-2"
                  >
                    <NavLink to="/login" className="nav-link px-2 link-light">
                      Login
                    </NavLink>
                  </button>
                  <button type="button" className="btn btn-primary me-2">
                    <NavLink to="/register" className="nav-link px-2 link-light">
                      Register
                    </NavLink>
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                  >
                    <NavLink to="/login" className="nav-link link-light">
                      <Icon.Cart3 />
                    </NavLink>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
