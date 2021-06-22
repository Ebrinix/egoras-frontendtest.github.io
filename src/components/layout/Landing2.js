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
        <div>
            <div className='container-fluid px-5'>
                <div className='py-5'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h2>Leverage tools for your financial freedom</h2>
                            <p className='lead'>Use Cowrywise to plan towards your dream home, kid's education and travel the world.</p>
                            <div className='home-card mt-4 expose sky-bg'>
                                <h5 className='font-weight-bold text-dark' style={{fontSize: '21px'}}>Savings</h5>
                                <h3>Create multiple savings plans</h3>
                                <p className='lead'>Earn better interest rates than your bank</p>
                                <a className='start-now mt-3'>Start Now<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" svg-inline="" role="presentation" focusable="false" tabindex="-1"><path d="M21.31 14.484L9.602 26.808a.627.627 0 01-.912-.009.71.71 0 01-.007-.96L19.93 14 8.683 2.16a.71.71 0 01.007-.96.627.627 0 01.912-.008L21.31 13.516a.71.71 0 010 .968z"></path></svg></a>
                                <div className='card-img-container'>
                                    <img src="/img/in-nigeria.png" alt="..." className="img-fluid" />
                                </div>
                            </div>
                            <div className='home-card mt-4 expose vanilla-bg'>
                                <h5 className='font-weight-bold text-dark' style={{fontSize: '21px'}}>Savings</h5>
                                <h3>Create multiple savings plans</h3>
                                <p className='lead'>Earn better interest rates than your bank</p>
                                <a className='start-now mt-3'>Start Now<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" svg-inline="" role="presentation" focusable="false" tabindex="-1"><path d="M21.31 14.484L9.602 26.808a.627.627 0 01-.912-.009.71.71 0 01-.007-.96L19.93 14 8.683 2.16a.71.71 0 01.007-.96.627.627 0 01.912-.008L21.31 13.516a.71.71 0 010 .968z"></path></svg></a>
                                <div className='card-img-container'>
                                    <img src="/img/in-nigeria.png" alt="..." className="img-fluid" />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='home-card expose lime-bg'>
                                <h5 className='font-weight-bold text-dark' style={{fontSize: '21px'}}>Savings</h5>
                                <h3>Create multiple savings plans</h3>
                                <p className='lead'>Earn better interest rates than your bank</p>
                                <a className='start-now mt-3'>Start Now<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" svg-inline="" role="presentation" focusable="false" tabindex="-1"><path d="M21.31 14.484L9.602 26.808a.627.627 0 01-.912-.009.71.71 0 01-.007-.96L19.93 14 8.683 2.16a.71.71 0 01.007-.96.627.627 0 01.912-.008L21.31 13.516a.71.71 0 010 .968z"></path></svg></a>
                                <div className='card-img-container'>
                                    <img src="/img/in-nigeria.png" alt="..." className="img-fluid" />
                                </div>
                            </div>
                            <div className='home-card mt-4 expose chocolate-bg'>
                                <h5 className='font-weight-bold text-dark' style={{fontSize: '21px'}}>Savings</h5>
                                <h3>Create multiple savings plans</h3>
                                <p className='lead'>Earn better interest rates than your bank</p>
                                <a className='start-now mt-3'>Start Now<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" svg-inline="" role="presentation" focusable="false" tabindex="-1"><path d="M21.31 14.484L9.602 26.808a.627.627 0 01-.912-.009.71.71 0 01-.007-.96L19.93 14 8.683 2.16a.71.71 0 01.007-.96.627.627 0 01.912-.008L21.31 13.516a.71.71 0 010 .968z"></path></svg></a>
                                <div className='card-img-container'>
                                    <img src="/img/in-nigeria.png" alt="..." className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container-fluid px-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <h2>Start building wealth in 5 minutes</h2>
                    <div className="stepper d-flex flex-column mt-5 ml-2 mt-4">
                        <div className="d-flex mb-1">
                            <div className="d-flex flex-column pr-4 align-items-center">
                                <div className="rounded-circle py-2 px-3 bg-lemon text-white mb-1">1</div>
                                <div className="lines h-100"></div>
                            </div>
                            <div>
                                <h5 className="text-dark">Create your application respository</h5>
                                <p className="lead text-muted pb-3 mb-4">Choose your website name & create repository</p>
                            </div>
                        </div>
                        <div className="d-flex mb-1">
                            <div className="d-flex flex-column pr-4 align-items-center">
                                <div className="rounded-circle py-2 px-3 bg-lemon text-white mb-1">2</div>
                                <div className="lines h-100"></div>
                            </div>
                            <div>
                                <h5 className="text-dark">Clone application respository</h5>
                                <p className="lead text-muted pb-3 mb-4">Go to your dashboard and clone Git respository from the url in the dashboard of your application</p>
                            </div>
                        </div>
                        <div className="d-flex mb-1">
                            <div className="d-flex flex-column pr-4 align-items-center">
                                <div className="rounded-circle py-2 px-3 bg-lemon text-white mb-1">3</div>
                                <div className="lines h-100 d-none"></div>
                            </div>
                            <div>
                                <h5 className="text-dark">Make changes and push!</h5>
                                <p className="lead text-muted pb-3">Now make changes to your application source code, test it then commit &amp; push</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='text-center'>
                        <img src="/img/in-nigeria.png" alt="..." width='340' className="img-fluid mx-auto" />
                    </div>
                </div>
            </div>
        </div>
        <div className='main-bg-lemon py-4'>
            <div className='container-fluid px-5'>
                <div className='row'>
                    <div className='col-md-6'></div>
                    <div className='col-md-6'>
                        <h2 className='text-dark'>Your money is well protected</h2>
                        <div className='payload-li'>
                            <h5 className='text-dark'>Bank-grade Security</h5>
                            <p className='lead'>Our payment processors are PCIDSS compliant to ensure optimum security of your data electronically.</p>
                        </div>
                        <div className='payload-li'>
                            <h5 className='text-dark'>Bank-grade Security</h5>
                            <p className='lead'>We invest in low risk fixed income securities which include treasury bills, government bonds, and professionally managed mutual funds.</p>
                        </div>
                        <div className='payload-li'>
                            <h5 className='text-dark'>Bank-grade Security</h5>
                            <p className='lead'>We invest your savings in low risk financial instruments held on behalf of our customers by Meristem Trustees, registered with the Securities and Exchange Commission (SEC).</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Landing;
