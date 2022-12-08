import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../redux/user/apiRequest";
import { useDispatch } from "react-redux";
import * as Icon from "react-bootstrap-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const newUser = {
      email: email,
      password: password,
    };
    loginUser(newUser, dispatch, navigate);
  };
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://pixabay.com/get/gd5ce4047bbdc832b98daeb6ebfe6f80f6d03d9841fddada6ad97670c289cfdbff1044d7287f09c89b6de86d431e2ffdd.jpg"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleLogin}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: "#ff6219" }}
                        />
                        <img
                          className="fas fa-cubes fa-2x me-3"
                          style={{ width: "70px" }}
                          src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/298550602_829812135093598_2665490973521757313_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sL3o8vprblUAX9A0o5m&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDqrXwulmcD7PRN9KRWGLyCEm6nE5yqZRme-1-wGgCGbw&oe=6395C217"
                          alt="LOGO"
                        />
                        <span className="h1 fw-bold mb-0">Logo</span>
                      </div>
                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: 1 }}
                      >
                        Đăng nhập vào tài khoản của bạn
                      </h5>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form2Example17">
                          Địa chỉ email
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form2Example27">
                          Mật khẩu
                        </label>
                      </div>
                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                    <div className="d-flex">
                      <h5
                        className="pb-lg-2 me-3 my-1"
                        style={{ color: "#393f81" }}
                      >
                        Bạn chưa có tài khoản?
                      </h5>
                      <button type="button" class="btn btn-outline-secondary">
                        <NavLink
                          to="/register"
                          className="nav-link px-2 link-dark"
                        >
                          Đăng ký tại đây
                        </NavLink>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
