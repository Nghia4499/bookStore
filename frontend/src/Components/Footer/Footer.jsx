import React from "react";
import * as Icon from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <svg className="bi" width={30} height={24}>
              <use xlinkHref="#bootstrap" />
            </svg>
          </a>
          <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-muted" href="#">
              <svg className="bi" width={24} height={24}>
                <Icon.Twitter />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#">
              <svg className="bi" width={24} height={24}>
                <Icon.Instagram />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#">
              <svg className="bi" width={24} height={24}>
                <Icon.Facebook />
              </svg>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;