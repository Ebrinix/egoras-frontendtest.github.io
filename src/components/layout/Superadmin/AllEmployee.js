import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import MaterialTable from 'material-table';


import { makeStyles } from '@material-ui/core/styles';


import { faHome, faFile, faStream, faGlobe, faPlug, faIdCard, faCreditCard, faHandHoldingUsd, faExchangeAlt, faWallet, faFileInvoiceDollar, faHeadset, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { setAlert } from '../../../actions/alert';

import '../../../css/Dashboard.css';
import '../../../css/Module.css';
import '../../../css/Perfect-scrollbar.css';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
}));


export const AllEmployee = ({ }) => {
    const classes = makeStyles();

    return (
        <div>

            <div>

                <nav className="navbar navbar-expand-sm bg-white py-3">
                    <div className="hamburger">
                        <div className="cta">
                            <div className="toggle-btn type14"></div>
                        </div>
                    </div>

                    {/* <a className="navbar-brand" href="#">
                        <span className='text-dark'>230,340.00 <span style={{fontSize: '11px'}}>USD</span></span>
                    </a> */}

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link btn btn-header p-2" href="#">Online Support</a>
                        </li>
                    </ul>
                </nav>


                <section className="side-bar-warp py-0">
                    <div className="sidebar-menu small-side-bar flowHide">
                        <nav className="" style={{marginTop: '80px'}}>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link cus-nav-link" href="#">
                                    <span className="sidebar-icon d-block text-center">
                                        <FontAwesomeIcon className='fa-1x text-gray' icon={faHome} />
                                        <div className='fadeInRight animated side-name font-weight-bold'>Home</div>
                                    </span>
                                    <span className="fadeInRight animated nav-link-name name-hide tax-show">Home</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link cus-nav-link" href="">
                                    <span className="sidebar-icon d-block text-center">
                                        <FontAwesomeIcon className='fa-1x text-gray' icon={faUserCheck} />
                                        <div className='fadeInRight animated side-name'>Verify</div>
                                    </span>
                                    <span className="fadeInRight animated nav-link-name name-hide tax-show">Verify</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link cus-nav-link" href="/admin/all-loans">
                                    <span className="sidebar-icon d-block text-center">
                                        <FontAwesomeIcon className='fa-1x text-gray' icon={faWallet} />
                                        <div className='fadeInRight animated side-name'>All Loans</div>
                                    </span>
                                    <span className="fadeInRight animated nav-link-name name-hide tax-show">All Loans</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link cus-nav-link" href="/admin/all-employees">
                                    <span className="sidebar-icon d-block text-center">
                                        <FontAwesomeIcon style={{color: '#89de00'}} className='fa-1x text-gray' icon={faFileInvoiceDollar} />
                                        <div className='fadeInRight animated side-name'>Employees</div>
                                    </span>
                                    <span className="fadeInRight animated nav-link-name name-hide tax-show">Employees</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link cus-nav-link" href="#">
                                    <span className="sidebar-icon d-block text-center">
                                        <FontAwesomeIcon className='fa-1x text-gray' icon={faHeadset} />
                                        <div className='fadeInRight animated side-name'>Support</div>
                                    </span>
                                    <span className="fadeInRight animated nav-link-name name-hide tax-show">Support</span>
                                    </a>
                                </li>
                                
                            </ul>
                        </nav>
                    </div>
                    
                </section>

                <div className='dash-con'>
                    <div className='container py-4'>
                        <div className='row'>
                            <div className='col-md-9 mx-auto'>
                                <div style={{ maxWidth: '100%' }}>
                                    <MaterialTable
                                    columns={[
                                        { title: 'Adı', field: 'name' },
                                        { title: 'Soyadı', field: 'surname' },
                                        { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
                                        { title: 'Doğum Yeri', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } }
                                    ]}
                                    data={[
                                        { 
                                            name: 'Mejkbhmet', 
                                            surname: 'Ba jhgran', 
                                            birthYear: 1987, 
                                            birthCity: 63 
                                        },
                                        { 
                                            name: 'Mehmfvjhvet', 
                                            surname: 'Bh vn aran', 
                                            birthYear: 1987, 
                                            birthCity: 63 
                                        },
                                        { 
                                            name: 'Mehmguket', 
                                            surname: 'Baguykgran', 
                                            birthYear: 1987, 
                                            birthCity: 63 
                                        },
                                        { 
                                            name: 'Mehjkhbmet', 
                                            surname: 'Baran', 
                                            birthYear: 1987, 
                                            birthCity: 63 
                                        },
                                        { 
                                            name: 'Mebjhk hmet', 
                                            surname: 'Baran', 
                                            birthYear: 1987, 
                                            birthCity: 63 
                                        },
                                        { 
                                            name: 'Mehfjcvhmet', 
                                            surname: 'Baran', 
                                            birthYear: 1987, 
                                            birthCity: 63 
                                        },
                                        { 
                                            name: 'Mehm ghet', 
                                            surname: 'Baran', 
                                            birthYear: 1987, 
                                            birthCity: 63 
                                        },
                                        { 
                                            name: 'Mehmet', 
                                            surname: 'Baran', 
                                            birthYear: 1987, 
                                            birthCity: 63 
                                        },
                                        { 
                                            name: 'Mehmet', 
                                            surname: 'Baran', 
                                            birthYear: 1987, 
                                            birthCity: 63 
                                        },
                                        { 
                                            name: 'Mehmet', 
                                            surname: 'Baran', 
                                            birthYear: 1987, 
                                            birthCity: 63 
                                        },
                                        { 
                                            name: 'Mehmet', 
                                            surname: 'Baran', 
                                            birthYear: 1987, 
                                            birthCity: 63 
                                        },
                                        { 
                                            name: 'Mehmet', 
                                            surname: 'Baran', 
                                            birthYear: 1987, 
                                            birthCity: 63 
                                        },
                                        { 
                                            name: 'Mehmet', 
                                            surname: 'Baran', 
                                            birthYear: 1987, 
                                            birthCity: 63 
                                        },
                                        { 
                                            name: 'Mehmet', 
                                            surname: 'Baran', 
                                            birthYear: 1987, 
                                            birthCity: 63 
                                        },
                                        { 
                                            name: 'Mehbihmet', 
                                            surname: 'Barvghv an', 
                                            birthYear: 1987, 
                                            birthCity: 63 
                                        },
                                        { 
                                            name: 'Mehb ujhmet', 
                                            surname: 'Barbujhban', 
                                            birthYear: 1987, 
                                            birthCity: 63 
                                        },
                                        { 
                                            name: 'Mehmetbuhjub', 
                                            surname: 'Bbybaran', 
                                            birthYear: 1987, 
                                            birthCity: 63 
                                        },
                                        { 
                                            name: 'Mehmetbyuhjb', 
                                            surname: 'Baranbujh', 
                                            birthYear: 1987, 
                                            birthCity: 63 
                                        },
                                        { 
                                            name: 'Mehmetb ujhb ', 
                                            surname: 'Baranbyuhb ', 
                                            birthYear: 1987, 
                                            birthCity: 63 
                                        },
                                        { 
                                            name: 'Mehmetbujhybuh', 
                                            surname: 'Baranguyuy', 
                                            birthYear: 1987, 
                                            birthCity: 63 
                                        },
                                            ]}
                                    title="All Employees"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
        
    );
};

// export default connect(null, {setAlert, createUser })(AllEmployee);
export default AllEmployee;