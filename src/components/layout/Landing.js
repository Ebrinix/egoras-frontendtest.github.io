import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import '../../css/Home.css';

const Landing = () => {

  return (
    <div>
        <section id="hero" className="hero hero-home bg-gray section">
            <div className="container">
            <div className="row d-flex">
            <div className="col-lg-6 text order-2 order-lg-1">
                <h1>landing page</h1>
                <p className="hero-text">Labore mollit officia est do dolor. Velit aliqua nisi deserunt laboris amet aliqua adipisicing nisi voluptate consequat adipisicing labore ipsum nostrud.</p>
                <div className="CTA"><a href="#features" className="btn btn-primary btn-shadow btn-gradient link-scroll">Discover More</a></div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2"><img src="/img/Macbook.png" alt="..." className="img-fluid" /></div>
            </div>
        </div>
        </section>
        
    </div>
  );
};

export default Landing;
