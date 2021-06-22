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
import Input from '@material-ui/core/Input';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { createUser } from '../../../actions/admin';

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


export const Createadmin = ({ setAlert, createUser }) => {
    const classes = makeStyles();
    const [date_of_birth, onChange] = useState(new Date());
    const [open2, setOpen2] = React.useState(false);
    const [sex, setSexValue] = React.useState('male');
    const [designation, setDesignation] = React.useState('');
    const handleChange = (event) => {
        setSexValue(event.target.value);
      };
    const handleClose2 = () => {
        setOpen2(false);
    };
    const handleOpen2 = () => {
        setOpen2(true);
    };

    const designationOption = [
        {
          value: 'Cashier',
          label: 'Cashier',
        },
        {
          value: 'Business Management',
          label: 'Business Management',
        },
        {
          value: 'Manager',
          label: 'Manager',
        },
        {
          value: 'Accountant',
          label: 'Accountant',
        },
    ];

    const handleMOI = (event) => {
        setDesignation(event.target.value || '');
        // console.log('handleMOI');
        
    };

    const [userInfo, setUserInfo] = useState({
        first_name: "",
        last_name: "",
        other_name: "",
        phone: "",
        passport: "",
        branch: "",
        staffId: "",
        mainRole: "",
        meansOfID: "",
        password: "",
        confirmPassword: "",
        errors: {
            password: '',
            confirmPassword: '',
          }
    });

    const checkMimeType = (event) => {
        //getting file object
        // let files = event.target.files 
        let passport = document.getElementById("passport")
        
        //define message container
        let err = ''
        // list allow mime type
        const types = ['image/png', 'image/jpeg', 'image/jpg']
        // loop access array
        if (passport) {
          for(var x = 0; x<passport.length; x++) {
            // compare file type find doesn't match
           
                if (types.every(type => passport[x].type !== type)) {
                // create error message and assign to container   
                err += passport[x].type+' is not a supported format\n';
              }
            };
         
          if (err !== '') { // if message not same old that mean has error 
              //  event.target.value = null // discard selected file
               console.log(err)
                return false; 
           } 
          return true;
        }
      
    }

    const onFileChange = async e => {
        var image1;
        e.preventDefault();
        
        if(checkMimeType(e)){ 
            if (e.currentTarget.id == "passport") {
                if (e.currentTarget.files.length == 0) {
                    setUserInfo({ ...userInfo, passport: "" });
                    document.getElementById("output1").src = "";
                } else {
                    image1 = document.getElementById('output1');
                    var objectUrl1 = URL.createObjectURL(e.currentTarget.files[0]);
                    setUserInfo({ ...userInfo, passport: e.currentTarget.files[0].name });
                    image1.src  = objectUrl1;
                    
                }
            } 
        }
    }

    const [aRole, setRole] = React.useState('in-house');
    const [toggleDesignation, setToggleDesignation] = React.useState('in-house');

    const handleChange23 = (event) => {
        setRole(event.target.value);
        console.log(event.target.value);
        
        // $('#getForm input[type="text"]').val('');
        document.getElementById("getForm").reset();

        if (event.target.value === 'in-house') {
            setToggleDesignation('in-house');
            setUserInfo({
                mainRole: event.target.value,
              });
        } else if (event.target.value === 'super-admin') {
            setToggleDesignation('super-admin');
            setUserInfo({
                mainRole: event.target.value,
              });
        } else if (event.target.value === 'admin') {
            setToggleDesignation('admin');
            setUserInfo({
                mainRole: event.target.value,
              });
        }
        
    };

    const onChange1 = e => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
        // const { name, value } = e.target;
        
        // switch (name) {
        //     case 'password': 
        //       errors.password = 
        //         value.length < 7
        //           ? 'Password must be 7 characters long!'
        //           : '';
            
        //       break;
        //     case 'confirmPassword': 
        //         errors.confirmPassword = 
        //         value.length < 7
        //           ? 'Password must be 7 characters long!'
        //           : '';
        //       break;
        //     case 'password': 
        //     //   errors.password = 
        //     //    value.length < 8
        //     //       ? 'Password must be 8 characters long!'
        //     //       : '';
        //       break;
        //     default:
        //       break;
        //   }

        //   console.log(errors.password);
    }

    // var str = 'hellsorld';
    // var result = regex.test(str);
    // console.log(result);
    
    const { first_name, last_name, other_name, email, phone, passport, branch , staffId , meansOfID , password, confirmPassword, errors } = userInfo;  
    
    const onSubmit = async e => {
        e.preventDefault();
        var regex1 = /\d/g;
        var regex2 = /[a-z]/;
        var regex3 = /[A-Z]/;
        var regex4 = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        

        if (toggleDesignation === 'in-house') {
            if (first_name === '' || last_name === '' || other_name === '' || phone === '' || email === '' || passport === '' || branch === '' || staffId === '' || designation === '' || password === '' || confirmPassword === '') {
                console.log('empty');
                setAlert('All fields are required', 'danger');
            
            } else {  
                if (password !== confirmPassword) {
                    setAlert('passwords do not match', 'danger');
                    // setIsLoading(false);
                }else if(password.length < 7){
                    setAlert('passwords must be seven(7) characters long or more!', 'danger');
                    // setIsLoading(false);
                } else {
        
                    if (regex1.test(confirmPassword) && regex2.test(confirmPassword) && regex3.test(confirmPassword) && regex4.test(confirmPassword)) {
                        createUser({first_name, last_name, other_name, email, sex, date_of_birth, designation, phone, passport, branch , staffId , meansOfID , password})
                        
                    } else {
                        console.log('not ok');
                        setAlert('Password must contain atleast one uppercase, a number and a special chracter', 'danger');
                        
                    }
                    
                }
            }
        } else {
            if (first_name === '' || last_name === '' || other_name === '' || phone === '' || email === '' || passport === '' || branch === '' || staffId === '' || password === '' || confirmPassword === '') {
                console.log('empty');
                setAlert('All fields are required', 'danger');
            
            } else {  
                if (password !== confirmPassword) {
                    setAlert('passwords do not match', 'danger');
                    // setIsLoading(false);
                }else if(password.length < 7){
                    setAlert('passwords must be seven(7) characters long or more!', 'danger');
                    // setIsLoading(false);
                } else {
        
                    if (regex1.test(confirmPassword) && regex2.test(confirmPassword) && regex3.test(confirmPassword) && regex4.test(confirmPassword)) {
                        createUser({first_name, last_name, other_name, email, sex, date_of_birth, aRole, phone, passport, branch , staffId , meansOfID , password})
                        
                    } else {
                        console.log('not ok');
                        setAlert('Password must contain atleast one uppercase, a number and a special chracter', 'danger');
                        
                    }
                    
                }
            }
        }

        
    };

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
                                        <FontAwesomeIcon style={{color: '#89de00'}} className='fa-1x text-gray' icon={faHome} />
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
                                    <a className="nav-link cus-nav-link" href="#">
                                    <span className="sidebar-icon d-block text-center">
                                        <FontAwesomeIcon className='fa-1x text-gray' icon={faWallet} />
                                        <div className='fadeInRight animated side-name'>Accounts</div>
                                    </span>
                                    <span className="fadeInRight animated nav-link-name name-hide tax-show">Accounts</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link cus-nav-link" href="#">
                                    <span className="sidebar-icon d-block text-center">
                                        <FontAwesomeIcon className='fa-1x text-gray' icon={faFileInvoiceDollar} />
                                        <div className='fadeInRight animated side-name'>Payments</div>
                                    </span>
                                    <span className="fadeInRight animated nav-link-name name-hide tax-show">Payments</span>
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
                            <div className='col-md-6 mx-auto'>
                                <div className="widget widget-table-one bg-white p-3">
                                    <div className="widget-content">
                                        <div className='text-center mb-3'>
                                            <h3>Add User</h3>
                                        </div>
                                        
                                        <form id='getForm' onSubmit={e => onSubmit(e)}>
                                        <FormControl className='custom-radio' component="fieldset">
                                            {/* <FormLabel component="legend">Gender</FormLabel> */}
                                            <RadioGroup className='sex-input' aria-label="gender" name="gender" value={aRole} onChange={handleChange23}>
                                                <FormControlLabel value="in-house" control={<Radio />} label="In-house" />
                                                <FormControlLabel value="super-admin" control={<Radio />} label="Super Admin" />
                                                <FormControlLabel value="admin" control={<Radio />} label="Admin" />
                                            </RadioGroup>
                                        </FormControl>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    {/* <TextField
                                                        label="Firstname"
                                                        placeholder="Firstname"
                                                        multiline
                                                        variant="outlined"
                                                        className='custom-inputs w-100'
                                                        name='first_name' 
                                                        type="text"
                                                        value={first_name} 
                                                        onChange={e => onChange1(e)}
                                                    /> */}
                                                    <label>Firstname</label>
                                                    <Input 
                                                        placeholder="Firstname" 
                                                        inputProps={{ 'aria-label': 'description' }}
                                                        className='custom-inputs w-100'
                                                        name='first_name' 
                                                        type="text"
                                                        value={first_name} 
                                                        onChange={e => onChange1(e)} 
                                                    />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    {/* <TextField
                                                        label="Lastname"
                                                        placeholder="Lastname"
                                                        multiline
                                                        variant="outlined"
                                                        className='custom-inputs w-100'
                                                        name='last_name' 
                                                        value={last_name} 
                                                        onChange={e => onChange1(e)}
                                                    /> */}
                                                    <label>Lastname</label>
                                                    <Input 
                                                        placeholder="Lastname" 
                                                        inputProps={{ 'aria-label': 'description' }}
                                                        className='custom-inputs w-100'
                                                        name='last_name' 
                                                        type="text"
                                                        value={last_name} 
                                                        onChange={e => onChange1(e)} 
                                                    />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    {/* <TextField
                                                        label="Middlename"
                                                        placeholder="Middlename"
                                                        multiline
                                                        variant="outlined"
                                                        className='custom-inputs w-100'
                                                        name='other_name' 
                                                        value={other_name} 
                                                        onChange={e => onChange1(e)}
                                                    /> */}
                                                    <label>Middlename</label>
                                                    <Input 
                                                        placeholder="Middlename" 
                                                        inputProps={{ 'aria-label': 'description' }}
                                                        className='custom-inputs w-100'
                                                        name='other_name' 
                                                        type="text"
                                                        value={other_name} 
                                                        onChange={e => onChange1(e)} 
                                                    />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    {/* <TextField
                                                        label="Email"
                                                        placeholder="Email"
                                                        multiline
                                                        type="email"
                                                        variant="outlined"
                                                        className='custom-inputs w-100'
                                                        name='email' 
                                                        value={email} 
                                                        onChange={e => onChange1(e)}
                                                    /> */}
                                                    <label>Email</label>
                                                    <Input 
                                                        placeholder="Email" 
                                                        inputProps={{ 'aria-label': 'description' }}
                                                        className='custom-inputs w-100'
                                                        name='email' 
                                                        type="text"
                                                        value={email} 
                                                        onChange={e => onChange1(e)} 
                                                    />
                                                </div>
                                                
                                                <div className="form-group col-md-6">
                                                    <FormControl component="fieldset" className='custom-radio'>
                                                        <FormLabel className='mb-0' component="legend">Gender</FormLabel>
                                                        <RadioGroup className='sex-input' aria-label="gender" name="gender1" value={sex} onChange={handleChange}>
                                                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                                                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                        </RadioGroup>
                                                    </FormControl>
                                                </div>
                                                {/* {
                                                    <div> */}
                                                        {toggleDesignation === 'in-house' || toggleDesignation === 'admin' ? (
                                                            <div className="form-group col-md-6">
                                                    
                                                                <label for="" style={{marginBottom: '3px'}}>Date of Birth</label>
                                                                <DatePicker
                                                                    onChange={onChange}
                                                                    value={date_of_birth}
                                                                    name={date_of_birth}
                                                                    className='custom-datepicker w-100 h-50'
                                                                />
                                                            </div>
                                                        ) : null}
                                                    {/* </div>
                                                } */}
                                                <div className="form-group col-md-6">
                                                    {/* <TextField
                                                        id="outlined-number"
                                                        label="Phone Number"
                                                        placeholder="Phone Number"
                                                        type="number"
                                                        className='custom-inputs w-100 remove-arrow'
                                                        variant="outlined"
                                                        name='phone' 
                                                        value={phone} 
                                                        onChange={e => onChange1(e)}
                                                    /> */}
                                                    <label>Phone Number</label>
                                                    <Input 
                                                        placeholder="Phone Number" 
                                                        inputProps={{ 'aria-label': 'description' }}
                                                        className='custom-inputs w-100'
                                                        name='phone' 
                                                        type="number"
                                                        value={phone} 
                                                        onChange={e => onChange1(e)} 
                                                    />
                                                    
                                                </div>
                                                <div className="form-group col-md-6">
                                                    {/* <TextField
                                                        label="Branch"
                                                        placeholder="Branch"
                                                        multiline
                                                        variant="outlined"
                                                        className='custom-inputs w-100'
                                                        name='branch' 
                                                        value={branch} 
                                                        onChange={e => onChange1(e)}
                                                    /> */}
                                                    <label>Branch</label>
                                                    <Input 
                                                        placeholder="Branch" 
                                                        inputProps={{ 'aria-label': 'description' }}
                                                        className='custom-inputs w-100'
                                                        name='branch' 
                                                        type="text"
                                                        value={branch} 
                                                        onChange={e => onChange1(e)} 
                                                    />
                                                </div>
                                                {/* {
                                                    <div> */}
                                                        {toggleDesignation === 'in-house' ? (
                                                            <div className="form-group col-md-6">
                                                                <div className='mr-2'>
                                                                    <FormControl className={classes.formControl+ " mt-1 w-100" }>
                                                                        <InputLabel id="demo-controlled-open-select-label">Designation</InputLabel>
                                                                        <Select
                                                                            labelId="demo-controlled-open-select-label"
                                                                            id="demo-controlled-open-select"
                                                                            open={open2}
                                                                            onClose={handleClose2}
                                                                            onOpen={handleOpen2}
                                                                            value={designation}
                                                                            onChange={handleMOI}
                                                                            className='mt-4'
                                                                        >
                                                                    
                                                                        {designationOption.map((option) => (
                                                                            <MenuItem key={option.value} value={option.value}>
                                                                            {option.label}
                                                                            </MenuItem>
                                                                        ))}
                                                                        
                                                                        </Select>
                                                                    </FormControl>
                                                                </div>
                                                            </div>
                                                        ) : null}
                                                    {/* </div>
                                                } */}
                                                
                                                <div className="form-group col-md-6">
                                                    {/* <TextField
                                                        label="Staff Id"
                                                        placeholder="Staff Id"
                                                        multiline
                                                        variant="outlined"
                                                        className='custom-inputs w-100'
                                                        name='staffId' 
                                                        value={staffId} 
                                                        onChange={e => onChange1(e)}
                                                    /> */}
                                                    <label>Staff Id</label>
                                                    <Input 
                                                        placeholder="Staff Id" 
                                                        inputProps={{ 'aria-label': 'description' }}
                                                        className='custom-inputs w-100'
                                                        name='staffId' 
                                                        type="text"
                                                        value={staffId} 
                                                        onChange={e => onChange1(e)} 
                                                    />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    {/* <TextField
                                                        label="Means of Id"
                                                        placeholder="Means of Id"
                                                        multiline
                                                        variant="outlined"
                                                        className='custom-inputs w-100'
                                                        name='meansOfID' 
                                                        value={meansOfID} 
                                                        onChange={e => onChange1(e)}
                                                    /> */}
                                                    <label>Means of Id</label>
                                                    <Input 
                                                        placeholder="Means of Id" 
                                                        inputProps={{ 'aria-label': 'description' }}
                                                        className='custom-inputs w-100'
                                                        name='meansOfID' 
                                                        type="text"
                                                        value={meansOfID} 
                                                        onChange={e => onChange1(e)} 
                                                    />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label for="">Passport Photo</label><br />
                                                    <input className='dark-input w-100' type='file' name='passport' id='passport'  onChange={onFileChange} />
                                                    <img id="output1" className="img-fluid mt-4" />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    {/* <TextField
                                                        label="Password"
                                                        placeholder="Password"
                                                        multiline
                                                        variant="outlined"
                                                        className='custom-inputs w-100'
                                                        name='password' 
                                                        value={password} 
                                                        onChange={e => onChange1(e)}
                                                    /> */}
                                                    <label>Password</label>
                                                    <Input 
                                                        placeholder="Password" 
                                                        inputProps={{ 'aria-label': 'description' }}
                                                        className='custom-inputs w-100'
                                                        name='password' 
                                                        type="text"
                                                        value={password} 
                                                        onChange={e => onChange1(e)} 
                                                    />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    {/* <TextField
                                                        label="Confirm Password"
                                                        placeholder="Confirm Password"
                                                        multiline
                                                        variant="outlined"
                                                        className='custom-inputs w-100'
                                                        name='confirmPassword' 
                                                        value={confirmPassword} 
                                                        onChange={e => onChange1(e)}
                                                    /> */}
                                                    <label>Confirm Password</label>
                                                    <Input 
                                                        placeholder="Confirm Password" 
                                                        inputProps={{ 'aria-label': 'description' }}
                                                        className='custom-inputs w-100'
                                                        name='confirmPassword' 
                                                        type="text"
                                                        value={confirmPassword} 
                                                        onChange={e => onChange1(e)} 
                                                    />
                                                </div>
                                            </div>
                                            <Button
                                                variant="contained"
                                                color="success"
                                                type='submit'
                                                className={classes.button}
                                            >
                                                Submit
                                            </Button>
                                        </form>
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
Createadmin.propTypes = {
    setAlert: PropTypes.func.isRequired
  };
export default connect(null, {setAlert, createUser })(Createadmin);