import React from "react";
import "./home.css"

const HomePage = () => {
  return (
    <section id="hero" className="d-flex align-items-center">
  <div className="container" data-aos="zoom-out" data-aos-delay={100}>
    <div className="row">
      <div className="col-xl-6">
        <h1>Bettter digital experience with Presento</h1>
        <h2>We are team of talented designers making websites with Bootstrap</h2>
        <a href="#about" className="btn-get-started scrollto">Get Started</a>
      </div>
    </div>
  </div>
</section>

  );
};

export default HomePage;
