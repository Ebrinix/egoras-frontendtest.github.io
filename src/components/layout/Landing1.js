import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Landing = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div>
      <div className="container-fluid pt-2 pt-md-4" id="topBanner">
  
  <div className="row">
    <div className="col-md-8" id="topBannerAndAside">
      <div className="row">
        
          <div className="col-md-12 ">
            
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100 set-height" src="/phones/LA1.jpg" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 set-height" src="/phones/LA2.jpg" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 set-height" src="/phones/LA3.jpg" alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev remove-opacity" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon remove-chevron" aria-hidden="true">
                      <i className="fas fa-chevron-left"></i>
                    </span>
                    <span className="sr-only">Previous</span>
                </a>                                            
                <a className="carousel-control-next remove-opacity" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon remove-chevron" aria-hidden="true">
                      <i className="fas fa-chevron-right"></i>
                    </span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
          </div>

      </div>
    </div>
    <div className="col-md-4" id="">
      
      <div className='row'>
        <div className='col-md-6 col-6 reset-padding'>
          <div className='text-center mt-4 mt-md-0'>
            <img src="/phones/small1.jpg" className="img-fluid w-95 mb-4 px-2" style={{height: '185.9px'}} />
          </div>
        </div>
        <div className='col-md-6 col-6 reset-padding'>
          <div className='text-center mt-4 mt-md-0'>
            <img src="/phones/small4.jpg" className="img-fluid w-95 mb-4 px-2" style={{height: '185.9px'}} />
          </div>
        </div>
        <div className='col-md-6 col-6 reset-padding'>
          <div className='text-center'>
            <img src="/phones/small5.jpg" className="img-fluid w-95 mb-4 px-2" style={{height: '185.9px'}} />
          </div>
        </div>
        <div className='col-md-6 col-6 reset-padding'>
          <div className='text-center'>
            <img src="/phones/small2.jpg" className="img-fluid w-95 mb-4 px-2" style={{height: '185.9px'}} />
          </div>
        </div>
        
      </div>
    </div>
  </div>

</div>

<div className="container-fluid mt-4" id="site-container-home">
<h1 className="text-center font-weight-bold mt-5 mb-4">Best Selling Items</h1>

<div className="col-md-12 home-category-info-banner ">
<div className="row">
  <div className="col-md-4 col-6">
    <a href='/product-result'>
      <div className='bg-white p-2 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
        <div className='d-flex justify-content-between'>
          <div className='pr-2 d-block'>
            <div className='product-zoom'>
              <img src="/phones/1.jpg" className="img-fluid" />
            </div>
            <div className='text-center'>
              <div>#340</div>
              <span>2 Pieces</span>
            </div>
          </div>
          <div className='pr-2 d-block'>
            <div className='product-zoom'>
              <img src="/phones/2.jpg" className="img-fluid" />
            </div>
            <div className='text-center'>
              <div>#340</div>
              <span>2 Pieces</span>
            </div>
          </div>
          <div className=' d-block'>
            <div className='product-zoom'>
              <img src="/phones/4.jpg" className="img-fluid" />
            </div>
            <div className='text-center'>
              <div>#340</div>
              <span>2 Pieces</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
  <div className="col-md-4 col-6">
    <a href='/product-details'>
      <div className='bg-white p-2 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
        <div className='d-flex justify-content-between'>
          <div className='pr-2 d-block'>
            <div className='product-zoom'>
              <img src="/phones/333.jpg" className="img-fluid" />
            </div>
            <div className='text-center'>
              <div>#340</div>
              <span>2 Pieces</span>
            </div>
          </div>
          <div className='pr-2 d-block'>
            <div className='product-zoom'>
              <img src="/phones/221.jpg" className="img-fluid" />
            </div>
            <div className='text-center'>
              <div>#340</div>
              <span>2 Pieces</span>
            </div>
          </div>
          <div className=' d-block'>
            <div className='product-zoom'>
              <img src="/phones/118.jpg" className="img-fluid" />
            </div>
            <div className='text-center'>
              <div>#340</div>
              <span>2 Pieces</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
  <div className="col-md-4 col-6">
    <div className='bg-white p-2 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
      <div className='d-flex justify-content-between'>
        <div className='pr-2 d-block'>
          <div className='product-zoom'>
            <img src="/phones/1.jpg" className="img-fluid" />
          </div>
          <div className='text-center'>
            <div>#340</div>
            <span>2 Pieces</span>
          </div>
        </div>
        <div className='pr-2 d-block'>
          <div className='product-zoom'>
            <img src="/phones/2.jpg" className="img-fluid" />
          </div>
          <div className='text-center'>
            <div>#340</div>
            <span>2 Pieces</span>
          </div>
        </div>
        <div className=' d-block'>
          <div className='product-zoom'>
            <img src="/phones/4.jpg" className="img-fluid" />
          </div>
          <div className='text-center'>
            <div>#340</div>
            <span>2 Pieces</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="col-md-9">
    <div className="row" id="iphonemodels">

    </div>
  </div>
</div>
</div>

<div className="col-md-12">
  <div className='my-5'>
    <div className="row mx-auto my-auto">
        {/* <div id="recipeCarousel" className="carousel slide w-100" data-ride="carousel">
          <div className="carousel-inner carousel-inner2 w-100" role="listbox">
            <div className="carousel-item carousel-item2 active">
                <div className="w-20">
                    <div className="text-center">
                        <img className="img-fluid" width='140' src="/phones/phoness.png" />
                        <span className='d-block mt-3'>Phones & Tablets</span>
                    </div>
                </div>
            </div>
            <div className="carousel-item carousel-item2">
                <div className="w-20">
                    <div className="text-center">
                        <img className="img-fluid" width='140' src="/phones/assessories.png" />
                        <span className='d-block mt-3'>Electronics</span>
                    </div>
                </div>
            </div>
            <div className="carousel-item carousel-item2">
                <div className="w-20">
                    <div className="text-center">
                        <img className="img-fluid" width='140' src="/phones/bags.png" />
                        <span className='d-block mt-3'>Fashion</span>
                    </div>
                </div>
            </div>
            <div className="carousel-item carousel-item2">
                <div className="w-20">
                    <div className="text-center">
                        <img className="img-fluid" width='140' src="/phones/clothes.png" />
                        <span className='d-block mt-3'>Supermarket</span>
                    </div>
                </div>
            </div>
            <div className="carousel-item carousel-item2">
                <div className="w-20">
                    <div className="text-center">
                        <img className="img-fluid" width='140' src="/phones/fan.png" />
                        <span className='d-block mt-3'>Home & Office</span>
                    </div>
                </div>
            </div>
            <div className="carousel-item carousel-item2">
                <div className="w-20">
                    <div className="text-center">
                      <img className="img-fluid" width='140' src="/phones/food.png" />
                      <span className='d-block mt-3'>Phones 4</span>
                    </div>
                </div>
            </div>
            <div className="carousel-item carousel-item2">
                <div className="w-20">
                    <div className="text-center">
                      <img className="img-fluid" width='140' src="/phones/footwears.png" />
                      <span className='d-block mt-3'>Phones 6</span>
                    </div>
                </div>
            </div>
            <div className="carousel-item carousel-item2">
                <div className="w-20">
                    <div className="text-center">
                      <img className="img-fluid" width='140' src="/phones/games.png" />
                      <span className='d-block mt-3'>Phones 7</span>
                    </div>
                </div>
            </div>
            <div className="carousel-item carousel-item2">
                <div className="w-20">
                    <div className="text-center">
                      <img className="img-fluid" width='140' src="/phones/kitchen.png" />
                      <span className='d-block mt-3'>Phones 3</span>
                    </div>
                </div>
            </div>
            
          </div>
          <a className="carousel-control-prev w-auto push-left" href="#recipeCarousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon bg-dark border custom-shadow remove-chevron rounded-circle" aria-hidden="true">
              <i className="fas fa-chevron-left"></i>
              </span>
              <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next w-auto push-right" href="#recipeCarousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon bg-dark border custom-shadow remove-chevron rounded-circle" aria-hidden="true">
                <i className="fas fa-chevron-right"></i>
              </span>
              <span className="sr-only">Next</span>
          </a>
        </div> */}
    </div>
    <Carousel responsive={responsive}>
      <div>
        <div className="">
            <div className="text-center">
                <img className="img-fluid" width='140' src="/phones/phoness.png" />
                <span className='d-block mt-3'>Phones & Tablets</span>
            </div>
        </div>
      </div>
      <div>
        <div className="">
            <div className="text-center">
                <img className="img-fluid" width='140' src="/phones/assessories.png" />
                <span className='d-block mt-3'>Electronics</span>
            </div>
        </div>
      </div>
      <div>
        <div className="">
            <div className="text-center">
                <img className="img-fluid" width='140' src="/phones/bags.png" />
                <span className='d-block mt-3'>Fashion</span>
            </div>
        </div>
      </div>
      <div>
        <div className="">
            <div className="text-center">
                <img className="img-fluid" width='140' src="/phones/clothes.png" />
                <span className='d-block mt-3'>Supermarket</span>
            </div>
        </div>
      </div>
      <div>
        <div className="">
            <div className="text-center">
                <img className="img-fluid" width='140' src="/phones/fan.png" />
                <span className='d-block mt-3'>Home & Office</span>
            </div>
        </div>
      </div>
      <div>
        <div className="">
            <div className="text-center">
                <img className="img-fluid" width='140' src="/phones/food.png" />
                <span className='d-block mt-3'>Phones 4</span>
            </div>
        </div>
      </div>
      <div>
        <div className="">
            <div className="text-center">
                <img className="img-fluid" width='140' src="/phones/footwears.png" />
                <span className='d-block mt-3'>Foot Wears</span>
            </div>
        </div>
      </div>
      <div>
        <div className="">
            <div className="text-center">
                <img className="img-fluid" width='140' src="/phones/games.png" />
                <span className='d-block mt-3'>Game Consoles</span>
            </div>
        </div>
      </div>
      <div>
        <div className="">
            <div className="text-center">
                <img className="img-fluid" width='140' src="/phones/kitchen.png" />
                <span className='d-block mt-3'>Kitchen Accessories</span>
            </div>
        </div>
      </div>
    </Carousel>
  </div>
</div>

</div>

<div className='mt-5'>
<img className='img-fluid w-100' src='/phones/1b.jpg' />
</div>
<div className="">
<div className="container-fluid mt-2">
<h1 className="text-center font-weight-bold mt-5 mb-5">Ramand Clothes</h1>
<div className='mb-3'>
  <div className="row">
    <div className='col-md-2 col-6'>
      <div className='f-categories-item'>
        <div className='p-1 f-category'>
          <img className="img-fluid" width='140' src="/phones/333.jpg" />
        </div>
        <div className='text-center'>Accessories</div>
      </div>
    </div>
    <div className='col-md-2 col-6'>
      <div className='f-categories-item'>
        <div className='p-1 f-category'>
          <img className="img-fluid" width='140' src="/phones/111.jpg" />
        </div>
        <div className='text-center'>Electronics</div>
      </div>
    </div>
    <div className='col-md-2 col-6'>
      <div className='f-categories-item'>
        <div className='p-1 f-category'>
          <img className="img-fluid" width='140' src="/phones/221.jpg" />
        </div>
        <div className='text-center'>Fashion</div>
      </div>
    </div>
    <div className='col-md-2 col-6'>
      <div className='f-categories-item'>
        <div className='p-1 f-category'>
          <img className="img-fluid" width='140' src="/phones/77.jpg" />
        </div>
        <div className='text-center'>Food cupboard</div>
      </div>
    </div>
    <div className='col-md-2 col-6'>
      <div className='f-categories-item'>
        <div className='p-1 f-category'>
          <img className="img-fluid" width='140' src="/phones/154.jpg" />
        </div>
        <div className='text-center'>Generators</div>
      </div>
    </div>
    <div className='col-md-2 col-6'>
      <div className='f-categories-item'>
        <div className='p-1 f-category'>
          <img className="img-fluid" width='140' src="/phones/876.jpg" />
        </div>
        <div className='text-center'>Laptops</div>
      </div>
    </div>
    <div className='col-md-2 col-6'>
      <div className='f-categories-item'>
        <div className='p-1 f-category'>
          <img className="img-fluid" width='140' src="/phones/465.jpg" />
        </div>
        <div className='text-center'>Printers</div>
      </div>
    </div>
    <div className='col-md-2 col-6'>
      <div className='f-categories-item'>
        <div className='p-1 f-category'>
          <img className="img-fluid" width='140' src="/phones/88.jpg" />
        </div>
        <div className='text-center'>Sensors</div>
      </div>
    </div>
    <div className='col-md-2 col-6'>
      <div className='f-categories-item'>
        <div className='p-1 f-category'>
          <img className="img-fluid" width='140' src="/phones/44.jpg" />
        </div>
        <div className='text-center'>Drinks</div>
      </div>
    </div>
    <div className='col-md-2 col-6'>
      <div className='f-categories-item'>
        <div className='p-1 f-category'>
          <img className="img-fluid" width='140' src="/phones/113.jpg" />
        </div>
        <div className='text-center'>Laundry</div>
      </div>
    </div>
    <div className='col-md-2 col-6'>
      <div className='f-categories-item'>
        <div className='p-1 f-category'>
          <img className="img-fluid" width='140' src="/phones/444.jpg" />
        </div>
        <div className='text-center'>Game consoles</div>
      </div>
    </div>
    <div className='col-md-2 col-6'>
      <div className='f-categories-item'>
        <div className='p-1 f-category'>
          <img className="img-fluid" width='140' src="/phones/555.jpg" />
        </div>
        <div className='text-center'>Mobile Phones</div>
      </div>
    </div>
  </div>
</div>
</div>
<div className='clothings'>
<div className='container'>
  <h1 className="text-center font-weight-bold mt-2 mb-4">Featured Categories</h1>
  <div className='mb-2'>
    <div className='row'>
      <div className='col-md-3 col-6'>
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
      <div className='col-md-3 col-6'>
        <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
          <div className='item-discount'>15%</div>
          <div>
            <img src="/phones/w54.jpg" className="img-fluid" />
          </div>
          <div className='pt-2'>
            <h6 className='mb-0'>Umidigi A3 Pro</h6>
            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
          </div>
        </div>
      </div>
      <div className='col-md-3 col-6'>
        <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
          <div className='item-discount'>15%</div>
          <div>
            <img src="/phones/w21.jpg" className="img-fluid" />
          </div>
          <div className='pt-2'>
            <h6 className='mb-0'>Umidigi A3 Pro</h6>
            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
          </div>
        </div>
      </div>
      <div className='col-md-3 col-6'>
        <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
          <div className='item-discount'>15%</div>
          <div>
            <img src="/phones/w33.jpg" className="img-fluid" />
          </div>
          <div className='pt-2'>
            <h6 className='mb-0'>Umidigi A3 Pro</h6>
            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
          </div>
        </div>
      </div>
    </div>
    <div className='text-center mt-3'>
      <div className='btn spt border-0'><a className='c-outline' href='#'>View All</a></div>
    </div>
  </div>
</div>
</div>
<div className=''>
<img className='img-fluid w-100' src='/phones/2b.jpg' />
</div>
<div className='clothings'>
<div className='container'>
  <h1 className="text-center font-weight-bold mt-1 mb-2">Kitchen Heroes | 40% OFF</h1>
  <div className='mb-2'>
    <div className='row'>
      <div className='col-md-3 col-6'>
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
      <div className='col-md-3 col-6'>
        <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
          <div className='item-discount'>15%</div>
          <div>
            <img src="/phones/w54.jpg" className="img-fluid" />
          </div>
          <div className='pt-2'>
            <h6 className='mb-0'>Umidigi A3 Pro</h6>
            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
          </div>
        </div>
      </div>
      <div className='col-md-3 col-6'>
        <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
          <div className='item-discount'>15%</div>
          <div>
            <img src="/phones/w21.jpg" className="img-fluid" />
          </div>
          <div className='pt-2'>
            <h6 className='mb-0'>Umidigi A3 Pro</h6>
            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
          </div>
        </div>
      </div>
      <div className='col-md-3 col-6'>
        <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
          <div className='item-discount'>15%</div>
          <div>
            <img src="/phones/w33.jpg" className="img-fluid" />
          </div>
          <div className='pt-2'>
            <h6 className='mb-0'>Umidigi A3 Pro</h6>
            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
          </div>
        </div>
      </div>
    </div>
    <div className='text-center mt-3'>
    <div className='btn spt border-0'><a className='c-outline' href='#'>View All</a></div>
    </div>
  </div>
</div>
</div>
<div className=''>
<img className='img-fluid w-100' src='/phones/3b.jpg' />
</div>
<div className='clothings'>
<div className='container'>
  <h1 className="text-center font-weight-bold mt-1 mb-2">Kitchen Heroes | 40% OFF</h1>
  <div className='mb-2'>
    <div className='row'>
      <div className='col-md-3 col-6'>
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
      <div className='col-md-3 col-6'>
        <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
          <div className='item-discount'>15%</div>
          <div>
            <img src="/phones/w54.jpg" className="img-fluid" />
          </div>
          <div className='pt-2'>
            <h6 className='mb-0'>Umidigi A3 Pro</h6>
            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
          </div>
        </div>
      </div>
      <div className='col-md-3 col-6'>
        <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
          <div className='item-discount'>15%</div>
          <div>
            <img src="/phones/w21.jpg" className="img-fluid" />
          </div>
          <div className='pt-2'>
            <h6 className='mb-0'>Umidigi A3 Pro</h6>
            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
          </div>
        </div>
      </div>
      <div className='col-md-3 col-6'>
        <div className='bg-white px-3 py-4 fancy-box-shadow mb-4 rounded shop-items shadow-hover'>
          <div className='item-discount'>15%</div>
          <div>
            <img src="/phones/w33.jpg" className="img-fluid" />
          </div>
          <div className='pt-2'>
            <h6 className='mb-0'>Umidigi A3 Pro</h6>
            <h5 className='mb-0 mt-1 font-weight-bold'>$220 <span className='line-through'>($75)</span></h5>
          </div>
        </div>
      </div>
    </div>
    <div className='text-center mt-3'>
      <div className='btn spt border-0'><a className='c-outline' href='#'>View All</a></div>
    </div>
  </div>
</div>
</div>

<div className=''>
<img className='img-fluid w-100' src='/phones/4b.jpg' />
</div>
<div className='py-4'>
<div className='container'>
  <h1 className="text-center font-weight-bold mt-3 mb-4">Popular Brands</h1>
  <div className='my-4'>
    <div className='d-flex flex-row flex-wrap justify-content-between'>
      <div className='w-18 mb-4 popular-brand' data-tilt>
       <img className='img-fluid w-100 c-animate' src='/phones/s54.jpg' />
      </div>
      <div className='w-18 mb-4 popular-brand' data-tilt>
       <img className='img-fluid w-100 c-animate' src='/phones/s90.jpg' />
      </div>
      <div className='w-18 mb-4 popular-brand' data-tilt>
       <img className='img-fluid w-100 c-animate' src='/phones/s33.jpg' />
      </div>
      <div className='w-18 mb-4 popular-brand' data-tilt>
       <img className='img-fluid w-100 c-animate' src='/phones/s11.jpg' />
      </div>
      <div className='w-18 mb-4 popular-brand' data-tilt>
       <img className='img-fluid w-100 c-animate' src='/phones/s44.jpg' />
      </div>
      <div className='w-18 mb-4 popular-brand' data-tilt>
       <img className='img-fluid w-100 c-animate' src='/phones/s77.jpg' />
      </div>
      <div className='w-18 mb-4 popular-brand' data-tilt>
       <img className='img-fluid w-100 c-animate' src='/phones/s18.jpg' />
      </div>
      <div className='w-18 mb-4 popular-brand' data-tilt>
       <img className='img-fluid w-100 c-animate' src='/phones/s89.jpg' />
      </div>
      <div className='w-18 mb-4 popular-brand' data-tilt>
       <img className='img-fluid w-100 c-animate' src='/phones/s67.jpg' />
      </div>
      <div className='w-18 mb-4 popular-brand' data-tilt>
       <img className='img-fluid w-100 c-animate' src='/phones/s98.jpg' />
      </div>
    </div>
  
  </div>
</div>
</div>
</div>
    </div>
  );
};

export default Landing;
