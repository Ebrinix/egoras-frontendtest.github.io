import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export const Productresults = ({}) => {

  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
  const [show4, setShow4] = useState(true);

  return (

    <div>
      <div className="breadcrumb-wrapper">
          <div className="breadcrumbs overlay-bg">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-12">
                          <div className="breadcrumb-content">
                              <nav className="" role="navigation" aria-label="breadcrumbs">
                                  <ul className="breadcrumb-list">
                                      <li><a href="#">Home</a></li>
                                      <li><a href="#">All Product</a></li>
                                      <li><a href="#">Accessories</a><span>Wrist Watches</span></li>
                                  </ul>
                              </nav>
                          </div>
                      </div>
                  </div>
                  
              </div>
          </div>
      </div>
      <div className="container-fluid mt-2" id="topBanner">
        <div class='mt-4'>
          <div class='d-flex'>
            <div class='search-filter d-none d-md-block'>
              <div>
                <div class='filter-section'>
                  <div>
                    <h6 className="d-flex justify-content-between"><span>Browse Categories</span><button className='btn btn-light btn-sm' onClick={() => setShow(!show)}><i className={show ? "fas fa-minus" : "fas fa-plus"}></i></button></h6>
                  </div>
                  {
                      <div>
                          {show ? (
                              <div class='filter-point'>
                                <ul class='points-ul'>
                                  <li>
                                    <a className="_2181f_1540Z" href="#">
                                      <label>
                                        <span className="">Phones and Tablets</span>
                                      </label>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="_2181f_1540Z" href="#">
                                      <label>
                                        <span className="">Phones and Tablets</span>
                                      </label>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="_2181f_1540Z" href="#">
                                      <label>
                                        <span className="">Phones and Tablets</span>
                                      </label>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="_2181f_1540Z" href="#">
                                      <label>
                                        <span className="">Phones and Tablets</span>
                                      </label>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="_2181f_1540Z" href="#">
                                      <label>
                                        <span className="">Phones and Tablets</span>
                                      </label>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="_2181f_1540Z" href="#">
                                      <label>
                                        <span className="">Phones and Tablets</span>
                                      </label>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="_2181f_1540Z" href="#">
                                      <label>
                                        <span className="">Phones and Tablets</span>
                                      </label>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="_2181f_1540Z" href="#">
                                      <label>
                                        <span className="">Phones and Tablets</span>
                                      </label>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                          ) : null}
                      </div>
                  }
                  
                </div>
                <div class='filter-section'>
                  <div>
                    <h6 className="d-flex justify-content-between"><span>Brand</span><button className='btn btn-light btn-sm' onClick={() => setShow2(!show2)}><i className={show2 ? "fas fa-minus" : "fas fa-plus"}></i></button></h6>
                  </div>
                  {
                      <div>
                          {show2 ? (
                              <div class='filter-point'>
                                <ul class='points-ul'>
                                  <li>
                                    <a className="_2181f_1540Z" href="#">
                                      <label>
                                        <span className="">Phones and Tablets</span>
                                      </label>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="_2181f_1540Z" href="#">
                                      <label>
                                        <span className="">Phones and Tablets</span>
                                      </label>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="_2181f_1540Z" href="#">
                                      <label>
                                        <span className="">Phones and Tablets</span>
                                      </label>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="_2181f_1540Z" href="#">
                                      <label>
                                        <span className="">Phones and Tablets</span>
                                      </label>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="_2181f_1540Z" href="#">
                                      <label>
                                        <span className="">Phones and Tablets</span>
                                      </label>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="_2181f_1540Z" href="#">
                                      <label>
                                        <span className="">Phones and Tablets</span>
                                      </label>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="_2181f_1540Z" href="#">
                                      <label>
                                        <span className="">Phones and Tablets</span>
                                      </label>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="_2181f_1540Z" href="#">
                                      <label>
                                        <span className="">Phones and Tablets</span>
                                      </label>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                          ) : null}
                      </div>
                  }
                </div>
                <div class='filter-section'>
                  <div>
                    <h6 className="d-flex justify-content-between"><span>Size</span><button className='btn btn-light btn-sm' onClick={() => setShow3(!show3)}><i className={show3 ? "fas fa-minus" : "fas fa-plus"}></i></button></h6>
                  </div>
                  {
                      <div>
                          {show3 ? (
                              <div class='filter-point'>
                                <ul class='points-ul'>
                                  <li>
                                    <a className="_2181f_1540Z" href="#">
                                      <label>
                                        <span className="">Phones and Tablets</span>
                                      </label>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="_2181f_1540Z" href="#">
                                      <label>
                                        <span className="">Phones and Tablets</span>
                                      </label>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="_2181f_1540Z" href="#">
                                      <label>
                                        <span className="">Phones and Tablets</span>
                                      </label>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="_2181f_1540Z" href="#">
                                      <label>
                                        <span className="">Phones and Tablets</span>
                                      </label>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="_2181f_1540Z" href="#">
                                      <label>
                                        <span className="">Phones and Tablets</span>
                                      </label>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="_2181f_1540Z" href="#">
                                      <label>
                                        <span className="">Phones and Tablets</span>
                                      </label>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="_2181f_1540Z" href="#">
                                      <label>
                                        <span className="">Phones and Tablets</span>
                                      </label>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="_2181f_1540Z" href="#">
                                      <label>
                                        <span className="">Phones and Tablets</span>
                                      </label>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                          ) : null}
                      </div>
                  }
                </div>
                <div class='filter-section'>
                  <div>
                    <h6 className="d-flex justify-content-between"><span>Price</span><button className='btn btn-light btn-sm' onClick={() => setShow4(!show4)}><i className={show4 ? "fas fa-minus" : "fas fa-plus"}></i></button></h6>
                  </div>
                  {
                      <div>
                          {show4 ? (
                              <div class='filter-point'>
                                <ul class='points-ul'>
                                  <li>
                                    <a className="_2181f_1540Z" href="#">
                                      <label>
                                        <span className="">Phones and Tablets</span>
                                      </label>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="_2181f_1540Z" href="#">
                                      <label>
                                        <span className="">Phones and Tablets</span>
                                      </label>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="_2181f_1540Z" href="#">
                                      <label>
                                        <span className="">Phones and Tablets</span>
                                      </label>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="_2181f_1540Z" href="#">
                                      <label>
                                        <span className="">Phones and Tablets</span>
                                      </label>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="_2181f_1540Z" href="#">
                                      <label>
                                        <span className="">Phones and Tablets</span>
                                      </label>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="_2181f_1540Z" href="#">
                                      <label>
                                        <span className="">Phones and Tablets</span>
                                      </label>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="_2181f_1540Z" href="#">
                                      <label>
                                        <span className="">Phones and Tablets</span>
                                      </label>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="_2181f_1540Z" href="#">
                                      <label>
                                        <span className="">Phones and Tablets</span>
                                      </label>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                          ) : null}
                      </div>
                  }
                </div>
                
              </div>  
            </div>
            <div class='search-result w-100'>
              <div class='search-products'>
                  <div className="row">
                      <div className="col-md-4 col-12">
                          <div class='bg-white p-2 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                            <div>
                              <h6>Global Original Sources</h6>
                            </div>
                              <div class='d-flex justify-content-between'>
                                  <div class='pr-2 d-block'>
                                      <div class='product-zoom'>
                                          <img src="/phones/333.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                          <div>#340</div>
                                          <span>2 Pieces</span>
                                      </div>
                                  </div>
                                  <div class='pr-2 d-block'>
                                      <div class='product-zoom'>
                                      <img src="/phones/221.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                      <div>#340</div>
                                      <span>2 Pieces</span>
                                      </div>
                                  </div>
                                  <div class=' d-block'>
                                      <div class='product-zoom'>
                                          <img src="/phones/118.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                          <div>#340</div>
                                          <span>2 Pieces</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4 col-12">
                          <div class='bg-white p-2 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                            <div>
                              <h6>Global Original Sources</h6>
                            </div>
                              <div class='d-flex justify-content-between'>
                                  <div class='pr-2 d-block'>
                                      <div class='product-zoom'>
                                          <img src="/phones/333.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                          <div>#340</div>
                                          <span>2 Pieces</span>
                                      </div>
                                  </div>
                                  <div class='pr-2 d-block'>
                                      <div class='product-zoom'>
                                      <img src="/phones/221.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                      <div>#340</div>
                                      <span>2 Pieces</span>
                                      </div>
                                  </div>
                                  <div class=' d-block'>
                                      <div class='product-zoom'>
                                          <img src="/phones/118.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                          <div>#340</div>
                                          <span>2 Pieces</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4 col-12">
                          <div class='bg-white p-2 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                            <div>
                              <h6>Global Original Sources</h6>
                            </div>
                              <div class='d-flex justify-content-between'>
                                  <div class='pr-2 d-block'>
                                      <div class='product-zoom'>
                                          <img src="/phones/333.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                          <div>#340</div>
                                          <span>2 Pieces</span>
                                      </div>
                                  </div>
                                  <div class='pr-2 d-block'>
                                      <div class='product-zoom'>
                                      <img src="/phones/221.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                      <div>#340</div>
                                      <span>2 Pieces</span>
                                      </div>
                                  </div>
                                  <div class=' d-block'>
                                      <div class='product-zoom'>
                                          <img src="/phones/118.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                          <div>#340</div>
                                          <span>2 Pieces</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4 col-12">
                          <div class='bg-white p-2 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                            <div>
                              <h6>Global Original Sources</h6>
                            </div>
                              <div class='d-flex justify-content-between'>
                                  <div class='pr-2 d-block'>
                                      <div class='product-zoom'>
                                          <img src="/phones/333.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                          <div>#340</div>
                                          <span>2 Pieces</span>
                                      </div>
                                  </div>
                                  <div class='pr-2 d-block'>
                                      <div class='product-zoom'>
                                      <img src="/phones/221.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                      <div>#340</div>
                                      <span>2 Pieces</span>
                                      </div>
                                  </div>
                                  <div class=' d-block'>
                                      <div class='product-zoom'>
                                          <img src="/phones/118.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                          <div>#340</div>
                                          <span>2 Pieces</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4 col-12">
                          <div class='bg-white p-2 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                            <div>
                              <h6>Global Original Sources</h6>
                            </div>
                              <div class='d-flex justify-content-between'>
                                  <div class='pr-2 d-block'>
                                      <div class='product-zoom'>
                                          <img src="/phones/333.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                          <div>#340</div>
                                          <span>2 Pieces</span>
                                      </div>
                                  </div>
                                  <div class='pr-2 d-block'>
                                      <div class='product-zoom'>
                                      <img src="/phones/221.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                      <div>#340</div>
                                      <span>2 Pieces</span>
                                      </div>
                                  </div>
                                  <div class=' d-block'>
                                      <div class='product-zoom'>
                                          <img src="/phones/118.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                          <div>#340</div>
                                          <span>2 Pieces</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4 col-12">
                          <div class='bg-white p-2 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                            <div>
                              <h6>Global Original Sources</h6>
                            </div>
                              <div class='d-flex justify-content-between'>
                                  <div class='pr-2 d-block'>
                                      <div class='product-zoom'>
                                          <img src="/phones/333.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                          <div>#340</div>
                                          <span>2 Pieces</span>
                                      </div>
                                  </div>
                                  <div class='pr-2 d-block'>
                                      <div class='product-zoom'>
                                      <img src="/phones/221.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                      <div>#340</div>
                                      <span>2 Pieces</span>
                                      </div>
                                  </div>
                                  <div class=' d-block'>
                                      <div class='product-zoom'>
                                          <img src="/phones/118.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                          <div>#340</div>
                                          <span>2 Pieces</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4 col-12">
                          <div class='bg-white p-2 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                            <div>
                              <h6>Global Original Sources</h6>
                            </div>
                              <div class='d-flex justify-content-between'>
                                  <div class='pr-2 d-block'>
                                      <div class='product-zoom'>
                                          <img src="/phones/333.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                          <div>#340</div>
                                          <span>2 Pieces</span>
                                      </div>
                                  </div>
                                  <div class='pr-2 d-block'>
                                      <div class='product-zoom'>
                                      <img src="/phones/221.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                      <div>#340</div>
                                      <span>2 Pieces</span>
                                      </div>
                                  </div>
                                  <div class=' d-block'>
                                      <div class='product-zoom'>
                                          <img src="/phones/118.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                          <div>#340</div>
                                          <span>2 Pieces</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4 col-12">
                          <div class='bg-white p-2 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                            <div>
                              <h6>Global Original Sources</h6>
                            </div>
                              <div class='d-flex justify-content-between'>
                                  <div class='pr-2 d-block'>
                                      <div class='product-zoom'>
                                          <img src="/phones/333.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                          <div>#340</div>
                                          <span>2 Pieces</span>
                                      </div>
                                  </div>
                                  <div class='pr-2 d-block'>
                                      <div class='product-zoom'>
                                      <img src="/phones/221.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                      <div>#340</div>
                                      <span>2 Pieces</span>
                                      </div>
                                  </div>
                                  <div class=' d-block'>
                                      <div class='product-zoom'>
                                          <img src="/phones/118.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                          <div>#340</div>
                                          <span>2 Pieces</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4 col-12">
                          <div class='bg-white p-2 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                            <div>
                              <h6>Global Original Sources</h6>
                            </div>
                              <div class='d-flex justify-content-between'>
                                  <div class='pr-2 d-block'>
                                      <div class='product-zoom'>
                                          <img src="/phones/333.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                          <div>#340</div>
                                          <span>2 Pieces</span>
                                      </div>
                                  </div>
                                  <div class='pr-2 d-block'>
                                      <div class='product-zoom'>
                                      <img src="/phones/221.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                      <div>#340</div>
                                      <span>2 Pieces</span>
                                      </div>
                                  </div>
                                  <div class=' d-block'>
                                      <div class='product-zoom'>
                                          <img src="/phones/118.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                          <div>#340</div>
                                          <span>2 Pieces</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4 col-12">
                          <div class='bg-white p-2 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                            <div>
                              <h6>Global Original Sources</h6>
                            </div>
                              <div class='d-flex justify-content-between'>
                                  <div class='pr-2 d-block'>
                                      <div class='product-zoom'>
                                          <img src="/phones/333.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                          <div>#340</div>
                                          <span>2 Pieces</span>
                                      </div>
                                  </div>
                                  <div class='pr-2 d-block'>
                                      <div class='product-zoom'>
                                      <img src="/phones/221.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                      <div>#340</div>
                                      <span>2 Pieces</span>
                                      </div>
                                  </div>
                                  <div class=' d-block'>
                                      <div class='product-zoom'>
                                          <img src="/phones/118.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                          <div>#340</div>
                                          <span>2 Pieces</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4 col-12">
                          <div class='bg-white p-2 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                            <div>
                              <h6>Global Original Sources</h6>
                            </div>
                              <div class='d-flex justify-content-between'>
                                  <div class='pr-2 d-block'>
                                      <div class='product-zoom'>
                                          <img src="/phones/333.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                          <div>#340</div>
                                          <span>2 Pieces</span>
                                      </div>
                                  </div>
                                  <div class='pr-2 d-block'>
                                      <div class='product-zoom'>
                                      <img src="/phones/221.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                      <div>#340</div>
                                      <span>2 Pieces</span>
                                      </div>
                                  </div>
                                  <div class=' d-block'>
                                      <div class='product-zoom'>
                                          <img src="/phones/118.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                          <div>#340</div>
                                          <span>2 Pieces</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4 col-12">
                          <div class='bg-white p-2 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                            <div>
                              <h6>Global Original Sources</h6>
                            </div>
                              <div class='d-flex justify-content-between'>
                                  <div class='pr-2 d-block'>
                                      <div class='product-zoom'>
                                          <img src="/phones/333.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                          <div>#340</div>
                                          <span>2 Pieces</span>
                                      </div>
                                  </div>
                                  <div class='pr-2 d-block'>
                                      <div class='product-zoom'>
                                      <img src="/phones/221.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                      <div>#340</div>
                                      <span>2 Pieces</span>
                                      </div>
                                  </div>
                                  <div class=' d-block'>
                                      <div class='product-zoom'>
                                          <img src="/phones/118.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                          <div>#340</div>
                                          <span>2 Pieces</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4 col-12">
                          <div class='bg-white p-2 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                            <div>
                              <h6>Global Original Sources</h6>
                            </div>
                              <div class='d-flex justify-content-between'>
                                  <div class='pr-2 d-block'>
                                      <div class='product-zoom'>
                                          <img src="/phones/333.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                          <div>#340</div>
                                          <span>2 Pieces</span>
                                      </div>
                                  </div>
                                  <div class='pr-2 d-block'>
                                      <div class='product-zoom'>
                                      <img src="/phones/221.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                      <div>#340</div>
                                      <span>2 Pieces</span>
                                      </div>
                                  </div>
                                  <div class=' d-block'>
                                      <div class='product-zoom'>
                                          <img src="/phones/118.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                          <div>#340</div>
                                          <span>2 Pieces</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4 col-12">
                          <div class='bg-white p-2 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                            <div>
                              <h6>Global Original Sources</h6>
                            </div>
                              <div class='d-flex justify-content-between'>
                                  <div class='pr-2 d-block'>
                                      <div class='product-zoom'>
                                          <img src="/phones/333.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                          <div>#340</div>
                                          <span>2 Pieces</span>
                                      </div>
                                  </div>
                                  <div class='pr-2 d-block'>
                                      <div class='product-zoom'>
                                      <img src="/phones/221.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                      <div>#340</div>
                                      <span>2 Pieces</span>
                                      </div>
                                  </div>
                                  <div class=' d-block'>
                                      <div class='product-zoom'>
                                          <img src="/phones/118.jpg" className="img-fluid" />
                                      </div>
                                      <div class='text-center'>
                                          <div>#340</div>
                                          <span>2 Pieces</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Productresults;