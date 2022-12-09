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
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img
            className="rounded-circle me-3"
            style={{ width: "40px" }}
            src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/298550602_829812135093598_2665490973521757313_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sL3o8vprblUAX9A0o5m&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDqrXwulmcD7PRN9KRWGLyCEm6nE5yqZRme-1-wGgCGbw&oe=6395C217"
            alt="LOGO"
          />
          LIKE LION BOOK STORE
        </NavLink>
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
          className="collapse navbar-collapse justify-content-between ms-lg-2 ms-xl-5"
          id="navbarResponsive"
        >
          <ul className="nav mb-2 justify-content-center mb-md-0">
            <li>
              <NavLink to="/" className="nav-link px-2 link-light">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="nav-link px-2 link-light mx-3">
                Sách
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link px-2 link-light">
              Liên hệ
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="nav-link px-2 link-light mx-3">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link px-2 link-light">
                About
              </NavLink>
            </li>
          </ul>

          <div className="d-flex justify-content-center justify-content-lg-start">
            {user ? (
              <>
                <div className="d-flex">
                  <h5 className="navbar-user text-white me-4 mt-2">
                    Hi, <span> {user.username} </span>
                  </h5>
                  <button type="button" className="btn btn-danger my-0">
                    <NavLink to="/cart" className="nav-link link-light">
                      <Icon.Cart3 />
                    </NavLink>
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary ms-2 my-0"
                  >
                    <NavLink
                      to="/logout"
                      className="nav-link px-2 link-light"
                      onClick={handleLogout}
                    >
                      Đăng xuất
                    </NavLink>
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="d-flex  text-end">
                  <button
                    type="button"
                    className="btn btn-outline-primary me-2"
                  >
                    <NavLink to="/login" className="nav-link px-2 link-light">
                      Đăng nhập
                    </NavLink>
                  </button>
                  <button type="button" className="btn btn-warning me-2">
                    <NavLink
                      to="/register"
                      className="nav-link px-2 link-light"
                    >
                      Đăng ký
                    </NavLink>
                  </button>
                  <button type="button" className="btn btn-danger">
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
