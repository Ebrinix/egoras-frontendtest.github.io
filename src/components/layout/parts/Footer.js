import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    const [show, setShow] = useState(true);
    const currentPage = window.location.pathname;

    const [adminLocate, setAdminLocate] = useState(false);
  return (
    <div>
        {adminLocate == true ? (
            <div>
                <div>
                    <div className='py-3 sub-footer'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='row'>
                                        <div className='col-md-5'>
                                            <div className="media mb-3 mb-md-0">
                                                <div className='mr-md-2 mr-3 sub-icon'>
                                                    <i className="fas fa-envelope fa-1x" style={{fontSize:'24px'}}></i>
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="mt-0">EMAIL SUPPORT</h6>
                                                    <span>help@mart.egoras.com</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-5'>
                                            <div className="media mb-3 mb-md-0">
                                                <div className='mr-md-2 mr-3 sub-icon'>
                                                    <i className="fas fa-envelope fa-1x" style={{fontSize:'24px'}}></i>
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="mt-0">PHONE SUPPORT</h6>
                                                    <span>0708 321 0684, 0809 184 6861</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='row'>
                                        <div className='col-md-5'>
                                            <div className="media mb-3 mb-md-0">
                                                
                                                <div className="media-body">
                                                    <h6 className="mt-0">GET LATEST DEALS</h6>
                                                    <span className=''>Our best promotions sent to your inbox.</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-7'>
                                            <div className="input-group mb-2 mr-sm-2">
                                                <input type="text" className="form-control" id="" placeholder="Enter Address" />
                                                <div className="input-group-append">
                                                        <button className='btn subscribe-btn2'>Subscribe</button>
                                                </div>
                                            </div>
                                            {/* <div class="input-group mb-2 mr-sm-2">
                                                
                                                <input type="text" class="form-control" id="" placeholder="Enter Address" />
                                                <div class="input-group-append">
                                                    <button className='btn subscribe-btn2'>Subscribe</button>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-block d-md-none'>
                        <div id="footer">
                            <div className='container-fluid'>
                                <div className='px-2 py-3 c-border-bottom'>
                                    <div>
                                        <h3 className="d-flex justify-content-between mb-0 footer-header"><span>MORE OPTIONS</span><button style={{lineHeight:'1'}} onClick={() => setShow(!show)} className='btn btn-sm'><i className={show ? "fas fa-chevron-down text-white" : "fas fa-chevron-up text-white"}></i></button></h3>
                                    </div>
                                </div>
                                {
                                    <div>
                                        {!show ? (
                                            <div>
                                                <div className='px-2 py-2 footer-header c-border-bottom'>
                                                    About Egoras
                                                </div>
                                                <div className='px-2 py-2 footer-header c-border-bottom'>
                                                    Payment
                                                </div>
                                                <div className='px-2 py-2 footer-header c-border-bottom'>
                                                    Buying on Egoras
                                                </div>
                                                <div className='px-2 py-2 footer-header c-border-bottom'>
                                                    More Info
                                                </div>
                                                <div className='px-2 py-2 footer-header c-border-bottom'>
                                                    Make Money On Egoras
                                                </div>
                                                <div className='px-2 py-2 footer-header'>
                                                    Download & Connect With Us
                                                </div>
                                                <div className='px-2 pb-2'>
                                                    <div className='d-flex mt-2'>
                                                        <a className='dcwt mr-3'>
                                                            <div className="media">
                                                                    <i className="fab fa-apple fa-4x mr-2" style={{fontSize:'32px',color:'white'}}></i>
                                                                <div className="media-body">
                                                                    <span className='s1 d-block'>Download on</span>
                                                                    <span className='s2'>App Store</span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a className='dcwt'>
                                                            <div className="media">
                                                                
                                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mobile-android-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="svg-inline--fa fa-mobile-android-alt fa-w-10 fa-2x mr-2" style={{width:'24px',color:'white'}}><path fill="currentColor" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-64 452c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v8zm64-80c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z" className=""></path></svg>
                                                                <div className="media-body">
                                                                    <span className='s1 d-block'>Download on</span>
                                                                    <span className='s2'>App Store</span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <h5 className="text-uppercase mt-4 mb-3 footer-header">Connect With Us</h5>
                                                    <div>
                                                        <div className='d-flex justify-content-between'>
                                                            <div className='mr-2'>
                                                                <div className='social-icon'>
                                                                    <i className="fab fa-facebook-f fa-1s"></i>
                                                                </div>
                                                            </div>
                                                            <div className='mr-2'>
                                                                <div className='social-icon'>
                                                                    <i className="fab fa-twitter fa-1s"></i>
                                                                </div>
                                                            </div>
                                                            <div className='mr-2'>
                                                                <div className='social-icon'>
                                                                    <i className="fab fa-instagram fa-1s"></i>
                                                                </div>
                                                            </div>
                                                            <div className='mr-2'>
                                                                <div className='social-icon'>
                                                                    <i className="fab fa-youtube fa-1s"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : null}
                                    </div>
                                }
                                
                            </div>
                        </div>
                    </div>
                    <section className='d-none d-md-block' id="footer">
                        <div className="container-fluid">
                            <div className="row text-center text-xs-center text-sm-left text-md-left">
                                <div className="col-xs-12 col-sm-6 col-md-8">
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <h5 className="text-uppercase footer-header">About Egoras</h5>
                                            <ul className="list-unstyled quick-links">
                                                <li><a href="javascript:void();"><a className='footer-link' href="/about_us">About us</a></a></li>
                                                <li><a href="javascript:void();"><a className='footer-link' href="/privacy_policy">Privacy Policy</a></a></li>
                                                <li><a href="javascript:void();"><a className='footer-link' href="/egoras_dollars">Tokens</a></a></li>
                                                <li><a href="javascript:void();"><a className='footer-link' href="/terms_conditions">Terms and Conditions</a></a></li>
                                                <li><a href="javascript:void();"><a className='footer-link' href="/public/static/assets/side/Egoras-Market.pdf">White Paper</a></a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h5 className="text-uppercase mb-1 footer-header">Payment</h5>
                                            <ul className="list-unstyled quick-links">
                                                <li><a href="javascript:void();"><a className='footer-link' href="/about_us">About us</a></a></li>
                                                <li><a href="javascript:void();"><a className='footer-link' href="/privacy_policy">Privacy Policy</a></a></li>
                                                <li><a href="javascript:void();"><a className='footer-link' href="/egoras_dollars">Tokens</a></a></li>
                                                <li><a href="javascript:void();"><a className='footer-link' href="/terms_conditions">Terms and Conditions</a></a></li>
                                                <li><a href="javascript:void();"><a className='footer-link' href="/public/static/assets/side/Egoras-Market.pdf">White Paper</a></a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h5 className="text-uppercase mb-1 footer-header">Buying On Egoras</h5>
                                            <ul className="list-unstyled quick-links">
                                                <li><a href="javascript:void();"><a className='footer-link' href="/about_us">About us</a></a></li>
                                                <li><a href="javascript:void();"><a className='footer-link' href="/privacy_policy">Privacy Policy</a></a></li>
                                                <li><a href="javascript:void();"><a className='footer-link' href="/egoras_dollars">Tokens</a></a></li>
                                                <li><a href="javascript:void();"><a className='footer-link' href="/terms_conditions">Terms and Conditions</a></a></li>
                                                <li><a href="javascript:void();"><a className='footer-link' href="/public/static/assets/side/Egoras-Market.pdf">White Paper</a></a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h5 className="text-uppercase mb-1 footer-header">More Info</h5>
                                            <ul className="list-unstyled quick-links">
                                                <li><a href="javascript:void();"><a className='footer-link' href="/about_us">About us</a></a></li>
                                                <li><a href="javascript:void();"><a className='footer-link' href="/privacy_policy">Privacy Policy</a></a></li>
                                                <li><a href="javascript:void();"><a className='footer-link' href="/egoras_dollars">Tokens</a></a></li>
                                                <li><a href="javascript:void();"><a className='footer-link' href="/terms_conditions">Terms and Conditions</a></a></li>
                                                <li><a href="javascript:void();"><a className='footer-link' href="/public/static/assets/side/Egoras-Market.pdf">White Paper</a></a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h5 className="text-uppercase mb-1 footer-header">Make Money On Egoras</h5>
                                            <ul className="list-unstyled quick-links">
                                                <li><a href="javascript:void();"><a className='footer-link' href="/about_us">About us</a></a></li>
                                                <li><a href="javascript:void();"><a className='footer-link' href="/privacy_policy">Privacy Policy</a></a></li>
                                                <li><a href="javascript:void();"><a className='footer-link' href="/egoras_dollars">Tokens</a></a></li>
                                                <li><a href="javascript:void();"><a className='footer-link' href="/terms_conditions">Terms and Conditions</a></a></li>
                                                <li><a href="javascript:void();"><a className='footer-link' href="/public/static/assets/side/Egoras-Market.pdf">White Paper</a></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-xs-12 col-sm-6 col-md-4">
                                    <h5 className="text-uppercase footer-header">Download & Connect With Us</h5>
                                    <div className='d-flex mt-2'>
                                        <a className='dcwt mr-3'>
                                            <div className="media">
                                                    <i className="fab fa-apple fa-4x mr-2" style={{fontSize:'32px',color:'white'}}></i>
                                                <div className="media-body">
                                                    <span className='s1 d-block'>Download on</span>
                                                    <span className='s2'>App Store</span>
                                                </div>
                                            </div>
                                        </a>
                                        <a className='dcwt'>
                                            <div className="media">
                                                
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mobile-android-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="svg-inline--fa fa-mobile-android-alt fa-w-10 fa-2x mr-2" style={{width:'24px',color:'white'}}><path fill="currentColor" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-64 452c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v8zm64-80c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z" className=""></path></svg>
                                                <div className="media-body">
                                                    <span className='s1 d-block'>Download on</span>
                                                    <span className='s2'>App Store</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <h5 className="text-uppercase mt-4 mb-3 footer-header">Connect With Us</h5>
                                    <div>
                                        <div className='d-flex'>
                                            <div className='mr-2'>
                                                <div className='social-icon'>
                                                    <i className="fab fa-facebook-f fa-1s"></i>
                                                </div>
                                            </div>
                                            <div className='mr-2'>
                                                <div className='social-icon'>
                                                    <i className="fab fa-twitter fa-1s"></i>
                                                </div>
                                            </div>
                                            <div className='mr-2'>
                                                <div className='social-icon'>
                                                    <i className="fab fa-instagram fa-1s"></i>
                                                </div>
                                            </div>
                                            <div className='mr-2'>
                                                <div className='social-icon'>
                                                    <i className="fab fa-youtube fa-1s"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row text-center text-xs-center text-sm-left text-md-left mt-3">
                                
                                <div className="col-xs-12 col-sm-3 col-md-3 mt-sm-2">
                                    <p className="text-white">© 2020 Egoras. All Rights Reserved.</p>
                                </div>
                                
                            </div>
                            
                        </div>
                    </section>
                </div>
                <div className="overlay"></div>
            </div>
        ) : null}
        
    </div>
  );
};

export default Footer;
