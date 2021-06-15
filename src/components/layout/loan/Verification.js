import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DatePicker from 'react-date-picker';

import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { createUser } from '../../../actions/admin';

import { faHome, faFile, faStream, faGlobe, faPlug, faIdCard, faCreditCard, faHandHoldingUsd, faExchangeAlt, faWallet, faFileInvoiceDollar, faHeadset, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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


export const Verification = ({ createUser }) => {

    const onSubmit = async e => {
        alert('ook')
    }

    return (
        <div>
            <div className='container-fluid py-4'>
                <div className='row'>
                    <div className='col-md-6 mx-auto'>
                        <div className="widget widget-table-one bg-white p-3">
                            <div className="widget-content">
                                <div className='text-center mb-3'>
                                    <h3>Verify Loan Application</h3>
                                </div>
                                <div className='mt-4'>
                                    <div className='text-center'>
                                        <h4>Applicant Information</h4>
                                    </div>
                                    <div className='d-flex py-2 mb-2 border-bottom'>
                                        <div className='w-25 font-weight-bold'>Firstname</div>
                                        <div className='w-70'>Samuel</div>
                                    </div>
                                    <div className='d-flex py-2 mb-1 border-bottom'>
                                        <div className='w-25 font-weight-bold'>Lastname</div>
                                        <div className='w-70'>Smith</div>
                                    </div>
                                    <div className='d-flex py-2 mb-2 border-bottom'>
                                        <div className='w-25 font-weight-bold'>Middlename</div>
                                        <div className='w-70'>Anderson</div>
                                    </div>
                                    <div className='d-flex py-2 mb-2 border-bottom'>
                                        <div className='w-25 font-weight-bold'>Phone Number</div>
                                        <div className='w-70'>08094321497</div>
                                    </div>
                                    <div className='d-flex py-2 mb-2 border-bottom'>
                                        <div className='w-25 font-weight-bold'>Sex</div>
                                        <div className='w-70'>Male</div>
                                    </div>
                                    <div className='d-flex py-2 mb-2 border-bottom'>
                                        <div className='w-25 font-weight-bold'>Passport Photo</div>
                                        <div className='w-70'><img className='img-fluid' width='150' src='/passport.jpg' /></div>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='text-center'>
                                        <h4>Applicant Account Details</h4>
                                    </div>
                                    <div className='d-flex py-2 mb-2 border-bottom'>
                                        <div className='w-25 font-weight-bold'>Bank Name</div>
                                        <div className='w-70'>Access Bank</div>
                                    </div>
                                    <div className='d-flex py-2 mb-1 border-bottom'>
                                        <div className='w-25 font-weight-bold'>Account Name</div>
                                        <div className='w-70'>Samuel Smith</div>
                                    </div>
                                    <div className='d-flex py-2 mb-2 border-bottom'>
                                        <div className='w-25 font-weight-bold'>Account Number</div>
                                        <div className='w-70'>0092384734</div>
                                    </div>
                                    <div className='d-flex py-2 mb-2 border-bottom'>
                                        <div className='w-25 font-weight-bold'>Means of Identity</div>
                                        <div className='w-70'>National ID Card</div>
                                    </div>
                                    <div className='d-flex py-2 mb-2 border-bottom'>
                                        <div className='w-25 font-weight-bold'>ID Pin</div>
                                        <div className='w-70'>235RG7653YH88</div>
                                    </div>
                                    <div className='d-flex py-2 mb-2 border-bottom'>
                                        <div className='w-25 font-weight-bold'>Document Photo</div>
                                        <div className='w-70'><img className='img-fluid' width='150' src='/passport.jpg' /></div>
                                    </div>
                                    <div className='d-flex py-2 mb-2 border-bottom'>
                                        <div className='w-25 font-weight-bold'>Age</div>
                                        <div className='w-70'>53 Years Old</div>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='text-center'>
                                        <h4>Next of Kin Information</h4>
                                    </div>
                                    <div className='d-flex py-2 mb-2 border-bottom'>
                                        <div className='w-25 font-weight-bold'>Next of Kin's Name</div>
                                        <div className='w-70'>John Doe</div>
                                    </div>
                                    <div className='d-flex py-2 mb-1 border-bottom'>
                                        <div className='w-25 font-weight-bold'>Address</div>
                                        <div className='w-70'>No 23 Jefferson Street, LA, USA</div>
                                    </div>
                                    <div className='d-flex py-2 mb-2 border-bottom'>
                                        <div className='w-25 font-weight-bold'>Phone Number</div>
                                        <div className='w-70'>09035264366</div>
                                    </div>
                                    <div className='d-flex py-2 mb-2 border-bottom'>
                                        <div className='w-25 font-weight-bold'>Sex</div>
                                        <div className='w-70'>Male</div>
                                    </div>
                                    <div className='d-flex py-2 mb-2 border-bottom'>
                                        <div className='w-25 font-weight-bold'>Passport Photo</div>
                                        <div className='w-70'><img className='img-fluid' width='150' src='/passport.jpg' /></div>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='text-center'>
                                        <h4>Guarantor(s) Information</h4>
                                    </div>
                                    <div className='d-flex py-2 mb-2 border-bottom'>
                                        <div className='w-25 font-weight-bold'>Guarantor's Name</div>
                                        <div className='w-70'>Mickeal Bob</div>
                                    </div>
                                    <div className='d-flex py-2 mb-1 border-bottom'>
                                        <div className='w-25 font-weight-bold'>Address</div>
                                        <div className='w-70'>No 11 Emerson North, LA, USA</div>
                                    </div>
                                    <div className='d-flex py-2 mb-2 border-bottom'>
                                        <div className='w-25 font-weight-bold'>Phone Number</div>
                                        <div className='w-70'>0903648372</div>
                                    </div>
                                    <div className='d-flex py-2 mb-2 border-bottom'>
                                        <div className='w-25 font-weight-bold'>Sex</div>
                                        <div className='w-70'>Male</div>
                                    </div>
                                    <div className='d-flex py-2 mb-2 border-bottom'>
                                        <div className='w-25 font-weight-bold'>Passport Photo</div>
                                        <div className='w-70'><img className='img-fluid' width='150' src='/passport.jpg' /></div>
                                    </div>
                                </div>
                                <div className='report-section'>
                                    <form onSubmit={e => onSubmit(e)}>
                                        <div className='form-group'>
                                            <TextField
                                                id="outlined-multiline-static"
                                                label="Verifier Report"
                                                multiline
                                                rows={4}
                                                // defaultValue="Default Value"
                                                variant="outlined"
                                                className='w-100'
                                            />
                                        </div>
                                        <div>
                                            <Button type='submit' variant="contained">Verify</Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default connect(null, {  createUser })(Verification);