import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Checkbox } from 'pretty-checkbox-react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"; 

import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';


export const Productdetails = ({}) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    const images = [
        {
          original: '/phones/4.jpg',
          thumbnail: '/phones/4.jpg',
        },
        {
          original: '/phones/232.jpg',
          thumbnail: '/phones/232.jpg',
        },
        {
          original: '/phones/333.jpg',
          thumbnail: '/phones/333.jpg',
        },
    ];
    
    // const textInputq = fullScreen(false);


  return (

    <div>
        <div className="mt-2">
            <div className="wrapper">
                <div className="breadcrumb-wrapper d-none d-md-block">
                    <div className="breadcrumbs overlay-bg">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="breadcrumb-content">
                                        <nav className="" role="navigation" aria-label="breadcrumbs">
                                            <ul className="breadcrumb-list">
                                                <li><a href="#">Home</a></li>
                                                <li><a href="#">All Industries</a></li>
                                                <li><a href="#">Electrical equipments & supply</a></li>
                                                <li><a href="#">Batteries</a><span>Uninterrupted power supply</span></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <main className="bg-white py-2 py-md-4 mb-1">
                    <div id="shopify-section-product-template" className="shopify-section">
                        <div className="single-product-area">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-9 col-sm-12">
                                        <div className="row">
                                            <div className="col-md-5  col-sm-12">
                                                {/* <div className="product-details-large" id="ProductPhoto">
                                                    <img className="img-fluid" data-image-id="" alt="" src="/phones/1.jpg" />
                                                </div> */}
                                                <div>
                                                    <ImageGallery fullscreen={false} items={images} />
                                                </div>
                                                
                                            </div>
                                            <div className="col-md-6  col-sm-12">
                                                <div className="single-product-content">
                                                    <div className="product-details">
                                                        <h3 className="product-info m-0 p-0 font-weight-bold">
                                                            China Supplier Mini Line Interactive computer UPS 4450VA 850VA 1000VA
                                                        </h3>
                                                        <div className="lemon-text font-weight-bold mt-2">2 buyers</div>
                                                        <div>
                                                            <p className='py-1'><small>FOB Reference Price: <u>Get Latest Price</u></small></p>
                                                        </div>
                                                        <div class='mt-2'>
                                                            <div class='d-flex'>
                                                                <div class='w-50 border-top border-bottom border-right'>
                                                                    <div class='pr-2 py-2'>
                                                                        <h3 className="product-info m-0 p-0 font-weight-bold">
                                                                            $15.99 - $22.73<span><small style={{fontSize: '10px'}}>/ Piece</small></span>
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                                <div class='w-50 border-top border-bottom'>
                                                                    <div class='pl-2 py-2'>
                                                                        <h6 className='mb-0 mt-1' style={{fontSize: '11px'}}>100 Piece/Pieces(Min. Order)</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mt-2 d-none d-md-block">
                                                            <div className='d-flex mt-2'>
                                                                <div className='w-25'>
                                                                    <span><small><b>Output Voltage:</b></small></span>
                                                                </div>
                                                                <div className='w-70'>
                                                                    <span className='sub-details'><small>110/120/220/230/240vac</small></span>
                                                                </div>
                                                            </div>
                                                            <div className='d-flex mt-2'>
                                                                <div className='w-25'>
                                                                    <span><small><b>Samples:</b></small></span>
                                                                </div>
                                                                <div className='w-70'>
                                                                    <span className=''><small>110/120/220/230/240vac</small></span>
                                                                    <div>
                                                                        <span className=''><small>$30.00/Piece|1 Piece (Min. Order)</small></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='d-flex mt-2'>
                                                                <div className='w-25'>
                                                                    <span><small><b>Lead Time:</b></small></span>
                                                                </div>
                                                                <div className='w-70'>
                                                                    <div className='border'>
                                                                        <table className="table-bordered table mb-0 product-overview">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td className='border-right' scope="col"><small>Quality(Pieces)</small></td>
                                                                                    <td className='border-right' scope="col"><small>1 - 5000</small></td>
                                                                                    <td scope="col"><small>>5000</small></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className='border-right'><small>Est. Time(days)</small></td>
                                                                                    <td className='border-right'><small>35</small></td>
                                                                                    <td><small>To be negotiated</small></td>
                                                                                </tr>
                                                                            
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='d-flex mt-2'>
                                                                <div className='w-25'>
                                                                    <span><small><b>Customization:</b></small></span>
                                                                </div>
                                                                <div className='w-70'>
                                                                    <span><small>egoras.com built-in customization <u className='text-primary'>Customise Now</u> Customized packaging<span className='muted'>(Min. Order: 100 Pieces)</span></small></span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3  col-sm-12">
                                        <div className='w-100 d-md-block d-none'>
                                            <div className='tpo' id="stickytypeheader">
                                                <div className='buy-action'>
                                                    <div>
                                                        <div className='customize'>For product pricing, customization or other inquires:</div>
                                                    </div>
                                                    <div className='mt-3 customize-btns'>
                                                        <button className='btn btn-lemon2 btn-block'><i class="far fa-envelope"></i> Contact Supplier</button>
                                                        <button className='btn btn-outline-dark btn-block'><i class="fas fa-phone-alt"></i> Call Us</button>
                                                        <button className='btn btn-outline-dark btn-block'><i class="far fa-comment-alt"></i> Chat Now</button>
                                                    </div>
                                                </div>

                                                <div className='delivery mt-3'>
                                                    <div className="media">
                                                        <i className="fas fa-check-circle text-success fa-2x align-self-center mr-2"></i>
                                                        <div className="media-body mt-1">
                                                            <b>Verified Supplier</b>
                                                        </div>
                                                    </div>
                                                    {/* <img width='14' src='/nigeria.svg' /><span> <small>NG</small></span> */}
                                                    <div className="media mt-1">
                                                        {/* <i className="fas fa-check-circle text-success fa-2x align-self-center mr-2"></i> */}
                                                        <img width='14' src='/nigeria.svg' className="align-self-center mr-1" />
                                                        <div className="media-body">
                                                        <span> <small>NG</small></span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span><small>&lt;4h Response Time</small></span>
                                                    </div>
                                                    <div>
                                                        <span><small>70,000+ for 26 Transactions</small></span>
                                                    </div>
                                                    <div>
                                                        <span><small>100.0% On-time delivery rate</small></span>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </main>
            </div>
        </div>
        <div className='related-products'>
            <div className='container-fluid'>
                

                <div className='row'>
                    <div className='col-md-9'>
                        <div className='r-products'>
                            <div>
                                <h3>You may also like</h3>
                            </div>
                            <Carousel responsive={responsive}>
                                <div className='mx-3'>
                                    <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                                        <div className='item-discount'>15%</div>
                                        <div>
                                            <img src="/phones/w76.jpg" className="img-fluid" />
                                        </div>
                                        <div className='pt-2'>
                                            <h6 className='mb-0'>Umidigi A3 Pro</h6>
                                            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='mx-3'>
                                    <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                                        <div className='item-discount'>15%</div>
                                        <div>
                                            <img src="/phones/w76.jpg" className="img-fluid" />
                                        </div>
                                        <div className='pt-2'>
                                            <h6 className='mb-0'>Umidigi A3 Pro</h6>
                                            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='mx-3'>
                                    <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                                        <div className='item-discount'>15%</div>
                                        <div>
                                            <img src="/phones/w76.jpg" className="img-fluid" />
                                        </div>
                                        <div className='pt-2'>
                                            <h6 className='mb-0'>Umidigi A3 Pro</h6>
                                            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='mx-3'>
                                    <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                                        <div className='item-discount'>15%</div>
                                        <div>
                                            <img src="/phones/w76.jpg" className="img-fluid" />
                                        </div>
                                        <div className='pt-2'>
                                            <h6 className='mb-0'>Umidigi A3 Pro</h6>
                                            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='mx-3'>
                                    <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                                        <div className='item-discount'>15%</div>
                                        <div>
                                            <img src="/phones/w76.jpg" className="img-fluid" />
                                        </div>
                                        <div className='pt-2'>
                                            <h6 className='mb-0'>Umidigi A3 Pro</h6>
                                            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='mx-3'>
                                    <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                                        <div className='item-discount'>15%</div>
                                        <div>
                                            <img src="/phones/w76.jpg" className="img-fluid" />
                                        </div>
                                        <div className='pt-2'>
                                            <h6 className='mb-0'>Umidigi A3 Pro</h6>
                                            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='mx-3'>
                                    <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                                        <div className='item-discount'>15%</div>
                                        <div>
                                            <img src="/phones/w76.jpg" className="img-fluid" />
                                        </div>
                                        <div className='pt-2'>
                                            <h6 className='mb-0'>Umidigi A3 Pro</h6>
                                            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='mx-3'>
                                    <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                                        <div className='item-discount'>15%</div>
                                        <div>
                                            <img src="/phones/w76.jpg" className="img-fluid" />
                                        </div>
                                        <div className='pt-2'>
                                            <h6 className='mb-0'>Umidigi A3 Pro</h6>
                                            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='mx-3'>
                                    <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                                        <div className='item-discount'>15%</div>
                                        <div>
                                            <img src="/phones/w76.jpg" className="img-fluid" />
                                        </div>
                                        <div className='pt-2'>
                                            <h6 className='mb-0'>Umidigi A3 Pro</h6>
                                            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='mx-3'>
                                    <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                                        <div className='item-discount'>15%</div>
                                        <div>
                                            <img src="/phones/w76.jpg" className="img-fluid" />
                                        </div>
                                        <div className='pt-2'>
                                            <h6 className='mb-0'>Umidigi A3 Pro</h6>
                                            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
                                        </div>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                        
                        <div>
                            <Nav tabs id="myHeader">
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '1' })}
                                        onClick={() => { toggle('1'); }}
                                    >
                                        Product Details
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '2' })}
                                        onClick={() => { toggle('2'); }}
                                    >
                                        Company Profile
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1">
                                    <div className='bg-white p-2'>
                                        <div className='border-bottom'>
                                            <h2>Overview</h2>
                                        </div>
                                        <div className='table-responsive'>
                                            <table class="table borderless product-overview">
                                                
                                                <tbody>
                                                    <tr>
                                                        <td>Warranty:</td>
                                                        <td>12 months</td>
                                                        <td>Place of Origin:</td>
                                                        <td>Guangdong, China</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Brand Name: </td>
                                                        <td>OEM</td>
                                                        <td>Model Number:</td>
                                                        <td>BK450 BK650 BK850</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Phase:</td>
                                                        <td>Single Phase</td>
                                                        <td>Protection:</td>
                                                        <td>Overcurrent</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Weight</td>
                                                        <td>4.5KG, 3.8kg-5kg</td>
                                                        <td>Type:</td>
                                                        <td>Line Interactive</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Application:</td>
                                                        <td>Security / Monitoring / Alarm</td>
                                                        <td>Capacity:</td>
                                                        <td>4.5KG, 3.8kg-5kg</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Wave Form:</td>
                                                        <td>Simulated Sine Wave</td>
                                                        <td>Battery Type:</td>
                                                        <td>Lead Acid Battery</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Display:</td>
                                                        <td>LCD/LED</td>
                                                        <td>Transfer Time:</td>
                                                        <td>Typical 2-5ms</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Output Frequency:</td>
                                                        <td>60HZ/50hz+/_1hz</td>
                                                        <td>Battery</td>
                                                        <td>4.5AH\7AH\9AH</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className=''>
                                            <div className='bg-white p-2'>
                                                <div className='pb-3'>
                                                    <div className='border-top pt-2'>
                                                        <h5>Supply Ability</h5>
                                                    </div>
                                                    <div className='product-overview'>

                                                        <div className='row'>
                                                            <div className='col-md-2'>
                                                                <span>Supply Ability:</span>
                                                            </div>
                                                            <div className='col-md-10'>
                                                                <span className=''>50000 Piece/Pieces per Month China Supplier Mini Line Interactive UPS 450VA 650VA 850VA 1000V</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='pb-3'>
                                                    <div className='border-top pt-2'>
                                                        <h5>Packaging & Delivery</h5>
                                                    </div>
                                                    <div className='product-overview'>

                                                        <div className='row'>
                                                            <div className='col-md-2'>
                                                                <span>Packaging Details:</span>
                                                            </div>
                                                            <div className='col-md-10'>
                                                                <span className=''>One pcs put in one poly bag, together with power line into one color box.</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='pb-3'>
                                                    <div className='border-top pt-2'>
                                                        <h4 className='mb-3'>China Supplier Mini Line Interactive computer UPS 4450VA 850VA 1000VA</h4>
                                                        <img className="img-fluid" data-image-id="" alt="" src="/phones/1.jpg" />
                                                    </div>
                                                </div>
                                                <div className='pb-3'>
                                                    <div className='border-top pt-2'>
                                                        <h4>Main features:</h4>
                                                        <ul className='ml-3 m-features'>
                                                            <li>Excellent microprocessor control optimizes reliability</li>
                                                            <li>Widde range of power input</li>
                                                            <li>boost and buck AVR voltage stabilization</li>
                                                            <li>Auto restart while AC is recovering</li>
                                                            <li>Off mode charging function</li>
                                                            <li>Simulated sine wave</li>
                                                            <li>Cold start function</li>
                                                            <li>Optional USB/RS-232 communication port and RJ-11 phone protection</li>
                                                            <li>Perfect protection for overload, short circuit, over-voltage, low-voltage and over-heating etc.</li>
                                                            <li>Display: LED and LCD display providing status, load and battery information</li>
                                                            <li>Intelligent battery management</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='pb-3'>
                                                    <div className='border-top pt-2'>
                                                        <h4 className='mb-3'>Product Images</h4>
                                                        <div className='product-images'>
                                                            <div className='row'>
                                                                <div className='col-md-4'>
                                                                    <div className='mx-0 mx-md-2 mb-3'>
                                                                        <img className="img-fluid" data-image-id="" alt="" src="/phones/1.jpg" />
                                                                    </div>
                                                                </div>
                                                                <div className='col-md-4'>
                                                                    <div className='mx-0 mx-md-2 mb-3'>
                                                                        <img className="img-fluid" data-image-id="" alt="" src="/phones/1.jpg" />
                                                                    </div>
                                                                </div>
                                                                <div className='col-md-4'>
                                                                    <div className='mx-0 mx-md-2 mb-3'>
                                                                        <img className="img-fluid" data-image-id="" alt="" src="/phones/1.jpg" />
                                                                    </div>
                                                                </div>
                                                                <div className='col-md-4'>
                                                                    <div className='mx-0 mx-md-2 mb-3'>
                                                                        <img className="img-fluid" data-image-id="" alt="" src="/phones/1.jpg" />
                                                                    </div>
                                                                </div>
                                                                <div className='col-md-4'>
                                                                    <div className='mx-0 mx-md-2 mb-3'>
                                                                        <img className="img-fluid" data-image-id="" alt="" src="/phones/1.jpg" />
                                                                    </div>
                                                                </div>
                                                                <div className='col-md-4'>
                                                                    <div className='mx-0 mx-md-2 mb-3'>
                                                                        <img className="img-fluid" data-image-id="" alt="" src="/phones/1.jpg" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='pb-3'>
                                                    <div className='border-top pt-2'>
                                                        <h4 className='mb-3'>Send your message to this supplier</h4>
                                                        <div className='row'>
                                                            <div className='col-md-8'>
                                                                <div class="form-group">
                                                                    <label for=""><small>Message</small></label>
                                                                    <textarea class="form-control" placeholder='Enter your messege...' id="" rows="4"></textarea>
                                                                </div>
                                                                <div class="form-group">
                                                                    <label for=""><small>Quality</small></label>
                                                                    <div className='row'>
                                                                        <div className='col-md-6'>
                                                                            <input type="text" class="form-control" id="" placeholder="100.00" />
                                                                        </div>
                                                                        <div className='col-md-6'>
                                                                            <div class="form-group">
                                                                                {/* <label for="exampleFormControlSelect1">Example select</label> */}
                                                                                <select class="form-control" id="exampleFormControlSelect1">
                                                                                    <option>1</option>
                                                                                    <option>2</option>
                                                                                    <option>3</option>
                                                                                    <option>4</option>
                                                                                    <option>5</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="form-check">
                                                                    {/* <Checkbox>Do you agree to the terms and conditions?</Checkbox> */}
                                                                    <input type="checkbox" class="form-check-input" id="" />
                                                                    <label class="form-check-label" for=""><small>Recommend matching suppliers if this suppplier doesn't contact me on Message Center within 24 hours. Request for Quotation</small></label>
                                                                </div>
                                                                <div class="form-check">
                                                                    {/* <Checkbox>Do you agree to the terms and conditions?</Checkbox> */}
                                                                    <input type="checkbox" class="form-check-input" id="" />
                                                                    <label class="form-check-label" for=""><small>I agree to share my Business Card to the supplier</small></label>
                                                                </div>
                                                                <div className='mt-3 customize-btns'>
                                                                    <button className='btn btn-outline-dark px-4'>Send</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tabId="2">
                                    <Row>
                                        <Col sm="6">
                                        <Card body>
                                            <CardTitle>Special Title Treatment</CardTitle>
                                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                            <Button>Go somewhere</Button>
                                        </Card>
                                        </Col>
                                        <Col sm="6">
                                        <Card body>
                                            <CardTitle>Special Title Treatment</CardTitle>
                                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                            <Button>Go somewhere</Button>
                                        </Card>
                                        </Col>
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </div>

                        <div className='r-products'>
                            <div>
                                <h3 className='mb-3'>Frequently bought together</h3>
                            </div>
                            <Carousel responsive={responsive}>
                                <div className='mx-3'>
                                    <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                                        <div className='item-discount'>15%</div>
                                        <div>
                                            <img src="/phones/w76.jpg" className="img-fluid" />
                                        </div>
                                        <div className='pt-2'>
                                            <h6 className='mb-0'>Umidigi A3 Pro</h6>
                                            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='mx-3'>
                                    <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                                        <div className='item-discount'>15%</div>
                                        <div>
                                            <img src="/phones/w76.jpg" className="img-fluid" />
                                        </div>
                                        <div className='pt-2'>
                                            <h6 className='mb-0'>Umidigi A3 Pro</h6>
                                            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='mx-3'>
                                    <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                                        <div className='item-discount'>15%</div>
                                        <div>
                                            <img src="/phones/w76.jpg" className="img-fluid" />
                                        </div>
                                        <div className='pt-2'>
                                            <h6 className='mb-0'>Umidigi A3 Pro</h6>
                                            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='mx-3'>
                                    <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                                        <div className='item-discount'>15%</div>
                                        <div>
                                            <img src="/phones/w76.jpg" className="img-fluid" />
                                        </div>
                                        <div className='pt-2'>
                                            <h6 className='mb-0'>Umidigi A3 Pro</h6>
                                            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='mx-3'>
                                    <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                                        <div className='item-discount'>15%</div>
                                        <div>
                                            <img src="/phones/w76.jpg" className="img-fluid" />
                                        </div>
                                        <div className='pt-2'>
                                            <h6 className='mb-0'>Umidigi A3 Pro</h6>
                                            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='mx-3'>
                                    <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                                        <div className='item-discount'>15%</div>
                                        <div>
                                            <img src="/phones/w76.jpg" className="img-fluid" />
                                        </div>
                                        <div className='pt-2'>
                                            <h6 className='mb-0'>Umidigi A3 Pro</h6>
                                            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='mx-3'>
                                    <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                                        <div className='item-discount'>15%</div>
                                        <div>
                                            <img src="/phones/w76.jpg" className="img-fluid" />
                                        </div>
                                        <div className='pt-2'>
                                            <h6 className='mb-0'>Umidigi A3 Pro</h6>
                                            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='mx-3'>
                                    <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                                        <div className='item-discount'>15%</div>
                                        <div>
                                            <img src="/phones/w76.jpg" className="img-fluid" />
                                        </div>
                                        <div className='pt-2'>
                                            <h6 className='mb-0'>Umidigi A3 Pro</h6>
                                            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='mx-3'>
                                    <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                                        <div className='item-discount'>15%</div>
                                        <div>
                                            <img src="/phones/w76.jpg" className="img-fluid" />
                                        </div>
                                        <div className='pt-2'>
                                            <h6 className='mb-0'>Umidigi A3 Pro</h6>
                                            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='mx-3'>
                                    <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                                        <div className='item-discount'>15%</div>
                                        <div>
                                            <img src="/phones/w76.jpg" className="img-fluid" />
                                        </div>
                                        <div className='pt-2'>
                                            <h6 className='mb-0'>Umidigi A3 Pro</h6>
                                            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
                                        </div>
                                    </div>
                                </div>
                            </Carousel>
                        </div>

                        <div className='r-products'>
                            <div>
                                <h3 className='mb-3'>Frequently bought together</h3>
                            </div>
                            <Carousel responsive={responsive}>
                                <div className='mx-3'>
                                    <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                                        <div className='item-discount'>15%</div>
                                        <div>
                                            <img src="/phones/w76.jpg" className="img-fluid" />
                                        </div>
                                        <div className='pt-2'>
                                            <h6 className='mb-0'>Umidigi A3 Pro</h6>
                                            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='mx-3'>
                                    <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                                        <div className='item-discount'>15%</div>
                                        <div>
                                            <img src="/phones/w76.jpg" className="img-fluid" />
                                        </div>
                                        <div className='pt-2'>
                                            <h6 className='mb-0'>Umidigi A3 Pro</h6>
                                            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='mx-3'>
                                    <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                                        <div className='item-discount'>15%</div>
                                        <div>
                                            <img src="/phones/w76.jpg" className="img-fluid" />
                                        </div>
                                        <div className='pt-2'>
                                            <h6 className='mb-0'>Umidigi A3 Pro</h6>
                                            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='mx-3'>
                                    <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                                        <div className='item-discount'>15%</div>
                                        <div>
                                            <img src="/phones/w76.jpg" className="img-fluid" />
                                        </div>
                                        <div className='pt-2'>
                                            <h6 className='mb-0'>Umidigi A3 Pro</h6>
                                            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='mx-3'>
                                    <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                                        <div className='item-discount'>15%</div>
                                        <div>
                                            <img src="/phones/w76.jpg" className="img-fluid" />
                                        </div>
                                        <div className='pt-2'>
                                            <h6 className='mb-0'>Umidigi A3 Pro</h6>
                                            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='mx-3'>
                                    <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                                        <div className='item-discount'>15%</div>
                                        <div>
                                            <img src="/phones/w76.jpg" className="img-fluid" />
                                        </div>
                                        <div className='pt-2'>
                                            <h6 className='mb-0'>Umidigi A3 Pro</h6>
                                            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='mx-3'>
                                    <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                                        <div className='item-discount'>15%</div>
                                        <div>
                                            <img src="/phones/w76.jpg" className="img-fluid" />
                                        </div>
                                        <div className='pt-2'>
                                            <h6 className='mb-0'>Umidigi A3 Pro</h6>
                                            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='mx-3'>
                                    <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                                        <div className='item-discount'>15%</div>
                                        <div>
                                            <img src="/phones/w76.jpg" className="img-fluid" />
                                        </div>
                                        <div className='pt-2'>
                                            <h6 className='mb-0'>Umidigi A3 Pro</h6>
                                            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='mx-3'>
                                    <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                                        <div className='item-discount'>15%</div>
                                        <div>
                                            <img src="/phones/w76.jpg" className="img-fluid" />
                                        </div>
                                        <div className='pt-2'>
                                            <h6 className='mb-0'>Umidigi A3 Pro</h6>
                                            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='mx-3'>
                                    <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
                                        <div className='item-discount'>15%</div>
                                        <div>
                                            <img src="/phones/w76.jpg" className="img-fluid" />
                                        </div>
                                        <div className='pt-2'>
                                            <h6 className='mb-0'>Umidigi A3 Pro</h6>
                                            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
                                        </div>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                        

                    </div>
                </div>
            </div>
        </div>
    </div>
    
  );
};

export default Productdetails;