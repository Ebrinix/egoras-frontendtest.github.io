import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export const Navbar = ({}) => {
    // console.log(window.location.pathname);

    const currentPage = window.location.pathname;

    const [pageLocate, setPageLocate] = useState(false);
    const [adminLocate, setAdminLocate] = useState(false);

  useEffect(() => {
      
      if (currentPage == '/') {
          setPageLocate(true);
          console.log(currentPage);
      } 
      
  });

    useEffect(() => {
        console.log(currentPage);
        
        if (currentPage == '/admin/create' || currentPage == '/login' || currentPage == '/change-password' || currentPage == '/admin/all-loans' || currentPage == '/admin/all-employees') {
            setAdminLocate(false);
        } else {
            setAdminLocate(true);
        }
            
    });

  return (

    <div>
        {adminLocate == true ? (
            <div>
                <nav className="navbar navbar-expand-lg sticky-top navbar-light py-2 py-md-3 b-shadow">
                    <div className="container-fluid">
                        <button className="d-inline-block d-lg-none btn" type="button" id="sidebarCollapse" aria-label="Toggle navigation">
                            <i className="fas fa-align-justify"></i>
                        </button>
                        <a className="ml-2 ml-md-0 mr-auto" href="/about_us">  
                            <img class='d-inline-block main-logo' src="/img/egoras-new-logo.png" alt="Logo" style={{width: '45px'}} className="img-fluid" />
                            <span class='logo-text'>EGORAS</span>
                        </a>
                        <div class='d-flex d-md-none d-none'>
                            <div>
                                <img src="/header-img/shop.svg" width='25' alt="Logo" className="img-fluid" />
                            </div>
                            <div class='ml-2'>
                                <img src="/header-img/shopping-cart.svg" width='25' alt="Logo" className="img-fluid" />
                            </div>
                        </div>
                        <form className="topSearchBar" action="/phones_result" method="get">
                            <div className="p-1 bg-light rounded">
                                <div className="input-group">
                                    <input type="search" name="search_input" placeholder="Search products, brands and categories" aria-describedby="button-addon1" className="form-control border-0 bg-light" />
                                    <div className="input-group-append">
                                        <button id="button-addon1" type="submit" className="btn btn-link text-dark"><i className="fa fa-search"></i></button>
                                    </div>
                                </div>
                            </div>

                        </form>
                        

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                            <ul className="nav navbar-nav ml-auto">

                                <li className="nav-item ">
                                    <a id="searchMobileToggler" className="nav-link text-dark" href="#"><i className="fa fa-search"></i> </a>
                                </li>
                                <li className="nav-item custom-nav active">
                                    <a className="nav-link text-dark" href="/loan/verification"><i className="fas fa-shopping-bag"></i> <span className="mobileHideIt">Cart</span></a>
                                </li>
                                <li className="nav-item custom-nav">
                                    <a className="nav-link text-dark" href="/admin/create"><i className="far fa-question-circle"></i> <span className="mobileHideIt">Help</span></a>
                                </li>
                                <li className="nav-item custom-nav">
                                    <a className="nav-link text-dark" href="/loan/application"><i className="far fa-user"></i> <span className="mobileHideIt">Login</span></a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
                

                {pageLocate == true ? (
                    // <nav className="navbar navbar-expand-lg navbar-light bg-light sub-navbar py-1 d-md-block d-none">
                    
                    //     <div class=''>
                    //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    //             <span className="navbar-toggler-icon"></span>
                    //         </button>
                    //         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    //             <div className="navbar-nav justify-content-around w-100">
                    //                 <a className="nav-item nav-link text-white" href="#">Home & Office</a>
                    //                 <a className="nav-item nav-link text-white" href="#">Supermarket</a>
                    //                 <a className="nav-item nav-link text-white" href="#">Health & Beauty</a>
                    //                 <a className="nav-item nav-link text-white" href="#">Phones & Tablets</a>
                    //                 <a className="nav-item nav-link text-white" href="#">Fashion</a>
                    //                 <a className="nav-item nav-link text-white" href="#">Gaming</a>
                    //                 <a className="nav-item nav-link text-white" href="#">Electronics</a>
                    //                 <a className="nav-item nav-link text-white" href="#">Others</a>
                    //             </div>
                    //         </div>
                    //     </div>
                    // </nav>
                    <div></div>
                    ) : null}

                <div class='w-100 px-3 pb-2 d-md-none d-block'>
                    <div class='my-2'>
                        <form className="" action="/phones_result" method="get">
                            <div className="p-1 bg-light rounded">
                                <div className="input-group">
                                    <input type="search" name="search_input" placeholder="Search products, brands and categories" aria-describedby="button-addon1" className="form-control fc-mobile border-0 bg-light" />
                                    <div className="input-group-append">
                                        <button id="button-addon1" type="submit" style={{padding: '1px 8px'}} className="btn btn-link text-dark"><i className="fa fa-search"></i></button>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                    
                    {pageLocate == true ? (
                            <div class='d-flex justify-content-between'>
                                <div class='d-flex flex-column'>
                                    <img src="/header-img/make-up.svg" width='28' alt="Logo" className="img-fluid mx-auto" />
                                    <span>Beauty</span>
                                </div>
                                <div class='d-flex flex-column'>
                                    <img src="/header-img/tshirt.svg" width='28' alt="Logo" className="img-fluid mx-auto" />
                                    <span>Fashion</span>
                                </div>
                                <div class='d-flex flex-column'>
                                    <img src="/header-img/monitor.svg" width='28' alt="Logo" className="img-fluid mx-auto" />
                                    <span>Computers</span>
                                </div>
                                <div class='d-flex flex-column'>
                                    <img src="/header-img/smartphone.svg" width='28' alt="Logo" className="img-fluid mx-auto" />
                                    <span>Phones</span>
                                </div>
                                <div class='d-flex flex-column'>
                                    <img src="/header-img/deals.svg" width='28' alt="Logo" className="img-fluid mx-auto" />
                                    <span>All Deals</span>
                                </div>
                            </div>
                        ) : null}
                </div>
            </div>
        ) : null}
        
    </div>
    
  );
};

export default Navbar;