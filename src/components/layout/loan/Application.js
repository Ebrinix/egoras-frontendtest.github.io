import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

// import Alert from '../Alert';
import { setAlert } from '../../../actions/alert';
import { loanApplication } from '../../../actions/loans';



const Styleclasses = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Step 1', 'Step 2', 'Step 3', 'Step 4'];
}
// export default function Application({ setAlert } ) {
  export const Application =( { setAlert, loanApplication } ) => {

  // const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [meansOfId, setMeansOfId] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [showNewGuarantor, setShowNewGuarantor] = useState(true);

  // const paymentDuration = (event) => {
  //   setAge(event.target.value);
  // };
  

  const MeansOI = [
    {
      value: 'Voters Card',
      label: 'Voters Card',
    },
    {
      value: 'Drivers License',
      label: 'Drivers License',
    },
    {
      value: 'National ID Card',
      label: 'National ID Card',
    },
    {
      value: 'Internationl Passport',
      label: 'Internationl Passport',
    },
  ];

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };

  const [sexValue, setSexValue] = React.useState('male');
  const [nextOfKinSex, setnextOfKinSex] = React.useState('male');
  const [gaurantorSex, setgaurantorSex] = React.useState('male');
  const [gaurantorSex2, setgaurantorSex2] = React.useState('male');

  const handleChange = (event) => {
    setSexValue(event.target.value);
  };

  const nextOfKinSexHandler = (event) => {
    setnextOfKinSex(event.target.value);
  };

  const gaurantorSexHandler = (event) => {
    setgaurantorSex(event.target.value);
  };

  const gaurantorSexHandler2 = (event) => {
    setgaurantorSex2(event.target.value);
  };

  const handleAge = (event) => {
    setAge(Number(event.target.value) || '');
  };
  
  const handleMOI = (event) => {
    setMeansOfId(event.target.value || '');
    // console.log('handleMOI');
    
  };
  
  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    middlename: "",
    phoneNumber: "",
    address: "",
    accName: "",
    accNumber: "",
    actualId: "",
    bankName: "",
    nextOfKinName: "",
    nextOfKinAddr: "",
    nextOfKinNumber: "",
    gaurantor: "",
    gaurantorAddr: "",
    gaurantorNumber: "",
    gaurantor2: "",
    gaurantorAddr2: "",
    gaurantorNumber2: "",
    // meansOfId: "",


    // For images
    applicantImg: "",
    meansOfIdImg: "",
    NextOfKinImg: "",
    guarantorImg1: "",
    guarantorImg2: "",
  });

  const onChange = e =>
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  const classes = Styleclasses();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <div>
            
            <div className="form-row">
              <div className="form-group col-md-6">
                <TextField
                  
                  label="Firstname"
                  placeholder="Firstname"
                  multiline
                  variant="outlined"
                  className='custom-inputs w-100'
                  name='firstname' 
                  value={firstname} 
                  onChange={e => onChange(e)}
                />
              </div>
              <div className="form-group col-md-6">
                <TextField
                  
                  label="Lastname"
                  placeholder="Lastname"
                  multiline
                  variant="outlined"
                  className='custom-inputs w-100'
                  name='lastname' 
                  value={lastname} 
                  onChange={e => onChange(e)}
                />
              </div>
            </div>
            <div className="form-group">
              <TextField
                  
                  label="Middlename"
                  placeholder="Middlename"
                  multiline
                  variant="outlined"
                  className='custom-inputs w-100'
                  name='middlename' 
                  value={middlename} 
                  onChange={e => onChange(e)}
                />
            </div>
            <div className="form-group">
             
                <TextField
                  id="outlined-number"
                  label="Phone Number"
                  placeholder="Phone Number"
                  type="number"
                  className='custom-inputs w-100 remove-arrow'
                  variant="outlined"
                  name='phoneNumber' 
                  value={phoneNumber} 
                  onChange={e => onChange(e)}
                />
            </div>
            <div className="form-group">
              <TextField
                  
                  label="Address"
                  placeholder="Address"
                  multiline
                  variant="outlined"
                  className='custom-inputs w-100'
                  name='address' 
                  value={address} 
                  onChange={e => onChange(e)}
                />
            </div>
            <div className='form-row mt-3'>
              <div className='form-group col-md-7'>
                <label for="">Passport Photo</label><br />
                <input className='dark-input' type='file' name='applicantImg' id='applicantImg'  onChange={onFileChange} />
                <img id="output1" className="img-fluid mt-4" />
              </div>
              <div className='form-group col-md-5'>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup className='sex-input' aria-label="gender" name="gender1" value={sexValue} onChange={handleChange}>
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            
          </div>
        );
      case 1:
        return (
          <div>
            <div className="form-row">
              <div className="form-group col-md-6">
                {/* <label for="">Bank</label>
                <input type="text" className="form-control c-form-control" name='bankName' value={bankName} onChange={e => onChange(e)} placeholder="" /> */}
                <TextField
                  
                  label="Bank"
                  placeholder="Bank"
                  multiline
                  variant="outlined"
                  className='custom-inputs w-100'
                  name='bankName' 
                  value={bankName} 
                  onChange={e => onChange(e)}
                />
              </div>
              <div className="form-group col-md-6">
                {/* <label for="">Account Number</label>
                <input type="text" className="form-control c-form-control" name='accNumber' value={accNumber} onChange={e => onChange(e)} placeholder="" /> */}
                {/* <TextField
                  id="standard-number"
                  label="Account Number"
                  placeholder="Account Number"
                  type="number"
                  multiline
                  variant="outlined"
                  className='custom-inputs w-100 remove-arrow'
                  name='accNumber' 
                  value={accNumber} 
                  onChange={e => onChange(e)}
                /> */}
                <TextField
                  id="outlined-number"
                  label="Account Number"
                  placeholder="Account Number"
                  type="number"
                  className='custom-inputs w-100 remove-arrow'
                  variant="outlined"
                  name='accNumber' 
                  value={accNumber} 
                  onChange={e => onChange(e)}
                />
              </div>
            </div>
            <div className="form-group">
              
              <TextField
                  
                  label="Account Name"
                  placeholder="Account Name"
                  multiline
                  variant="outlined"
                  className='custom-inputs w-100'
                  name='accName' 
                  value={accName} 
                  onChange={e => onChange(e)}
                />
            </div>
            <div className='form-row'>
              <div className='form-group col-md-6'>
                <div className="form-group">
                  
                    <div className='mr-2'>
                      <FormControl className={classes.formControl+ " w-100" }>
                        <InputLabel id="demo-controlled-open-select-label">Means of ID</InputLabel>
                        <Select
                          labelId="demo-controlled-open-select-label"
                          id="demo-controlled-open-select"
                          open={open2}
                          onClose={handleClose2}
                          onOpen={handleOpen2}
                          value={meansOfId}
                          onChange={handleMOI}
                        >
                          {/* <MenuItem value="">
                            <em>None</em>
                          </MenuItem> */}
                          {MeansOI.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                         
                        </Select>
                      </FormControl>
                    </div>
                   
                </div>
              </div>
              
              <div className='form-group col-md-6'>
                <TextField
                  
                  label="Actual Id"
                  placeholder="Actual Id"
                  multiline
                  variant="outlined"
                  className='custom-inputs w-100'
                  name='actualId' 
                  value={actualId} 
                  onChange={e => onChange(e)}
                />
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group col-md-7'>
                <label for="">Document Photo</label><br />
                <input className='dark-input' type='file' name='meansOfIdImg' id='meansOfIdImg'  onChange={onFileChange} />
                <img id="output2" className="img-fluid mt-4" />
              </div>
              <div className='form-group col-md-5'>
                <div className='mr-2'>
                  <FormControl className={classes.formControl+ " w-100" }>
                    <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      open={open}
                      onClose={handleClose}
                      onOpen={handleOpen}
                      value={age}
                      onChange={handleAge}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={18}>18-25</MenuItem>
                      <MenuItem value={26}>26-35</MenuItem>
                      <MenuItem value={36}>36-45</MenuItem>
                      <MenuItem value={36}>46-55</MenuItem>
                      <MenuItem value={56}>56-65</MenuItem>
                      <MenuItem value={66}>66+</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
            
            
          </div>
        );
        case 2:
          return (
            <div>
              <div className="form-group">
                <TextField
                  
                  label="Next of kin"
                  placeholder="Next of kin"
                  multiline
                  variant="outlined"
                  className='custom-inputs w-100'
                  name='nextOfKinName' 
                  value={nextOfKinName} 
                  onChange={e => onChange(e)}
                />
              </div>
              <div className="form-group">
                <TextField
                  
                  label="Address"
                  placeholder="Address"
                  multiline
                  variant="outlined"
                  className='custom-inputs w-100'
                  name='nextOfKinAddr' 
                  value={nextOfKinAddr} 
                  onChange={e => onChange(e)}
                />
              </div>
              <div className="form-group">
                <TextField
                  id="outlined-number"
                  label="Phone Number"
                  placeholder="Phone Number"
                  type="number"
                  className='custom-inputs w-100 remove-arrow'
                  variant="outlined"
                  name='nextOfKinNumber' 
                  value={nextOfKinNumber} 
                  onChange={e => onChange(e)}
                />
              </div>
              <div className='form-row'>
                <div className='form-group col-md-7'>
                  <label for="">Passport Photo</label><br />
                  <input className='dark-input' type='file' name='NextOfKinImg' id='NextOfKinImg'  onChange={onFileChange} />
                  <img id="output3" className="img-fluid mt-4" />
                </div>
                <div className="form-group col-md-5">
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup className='sex-input' aria-label="gender" name="nextOfKinSex" value={nextOfKinSex} onChange={nextOfKinSexHandler}>
                      <FormControlLabel value="male" control={<Radio />} label="Male" />
                      <FormControlLabel value="female" control={<Radio />} label="Female" />
                      {/* <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" /> */}
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>
            </div>
          );
        case 3:
          return (
            <div>
              <div className="form-group">
                <TextField
                  
                  label="Guarantor"
                  placeholder="Guarantor"
                  multiline
                  variant="outlined"
                  className='custom-inputs w-100'
                  name='gaurantor' 
                  value={gaurantor} 
                  onChange={e => onChange(e)}
                />
              </div>
              <div className="form-group">
                <TextField
                  
                  label="Address"
                  placeholder="Address"
                  multiline
                  variant="outlined"
                  className='custom-inputs w-100'
                  name='gaurantorAddr' 
                  value={gaurantorAddr} 
                  onChange={e => onChange(e)}
                />
              </div>
              <div className="form-group">
                
                <TextField
                  id="outlined-number"
                  label="Phone Number"
                  placeholder="Phone Number"
                  type="number"
                  className='custom-inputs w-100 remove-arrow'
                  variant="outlined"
                  name='gaurantorNumber' 
                  value={gaurantorNumber} 
                  onChange={e => onChange(e)}
                />
                
              </div>
              <div className='form-row'>
                <div className='form-group col-md-7'>
                  <label for="">Passport Photo</label><br />
                  <input className='dark-input' type='file' name='guarantorImg1' id='guarantorImg1'  onChange={onFileChange} />
                  <img id="output4" className="img-fluid mt-4" />
                </div>
                <div className="form-group col-md-5">
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup className='sex-input' aria-label="gender" name="gaurantorSex" value={gaurantorSex} onChange={gaurantorSexHandler}>
                      <FormControlLabel value="male" control={<Radio />} label="Male" />
                      <FormControlLabel value="female" control={<Radio />} label="Female" />
                      {/* <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" /> */}
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>
              <Button  size="small" color="primary" onClick={() => setShowNewGuarantor(!showNewGuarantor)}><i className={showNewGuarantor ? "fas fa-plus mr-2" : "fas fa-minus mr-2"}></i> {showNewGuarantor ? "Add Guarantor" : "Remove Guarantor"}</Button>
              {
                    <div>
                        {!showNewGuarantor ? (
                            <div className='mt-2'>
                              <div className="form-group">
                                <TextField
                                  
                                  label="Guarantor"
                                  placeholder="Guarantor"
                                  multiline
                                  variant="outlined"
                                  className='custom-inputs w-100'
                                  name='gaurantor2' 
                                  value={gaurantor2} 
                                  onChange={e => onChange(e)}
                                />
                              </div>
                              <div className="form-group">
                                <TextField
                                  
                                  label="Address"
                                  placeholder="Address"
                                  multiline
                                  variant="outlined"
                                  className='custom-inputs w-100'
                                  name='gaurantorAddr2' 
                                  value={gaurantorAddr2} 
                                  onChange={e => onChange(e)}
                                />
                              </div>
                              <div className="form-group">
                                <TextField
                                  id="outlined-number"
                                  label="Phone Number"
                                  placeholder="Phone Number"
                                  type="number"
                                  className='custom-inputs w-100 remove-arrow'
                                  variant="outlined"
                                  name='gaurantorNumber2' 
                                  value={gaurantorNumber2} 
                                  onChange={e => onChange(e)}
                                />
                              </div>
                              <div className='form-row'>
                                <div className='form-group col-md-7'>
                                  <label for="">Passport Photo</label><br />
                                  <input className='dark-input' type='file' name='guarantorImg2' id='guarantorImg2' onChange={onFileChange} />
                                  <img id="output5" className="img-fluid mt-4" />
                                </div>
                                <div className="form-group col-md-5">
                                  <FormControl component="fieldset">
                                    <FormLabel component="legend">Gender</FormLabel>
                                    <RadioGroup className='sex-input' aria-label="gender" name="gaurantorSex2" value={gaurantorSex2} onChange={gaurantorSexHandler2}>
                                      <FormControlLabel value="male" control={<Radio />} label="Male" />
                                      <FormControlLabel value="female" control={<Radio />} label="Female" />
                                      {/* <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" /> */}
                                    </RadioGroup>
                                  </FormControl>
                                </div>
                              </div>
                            </div>
                        ) : null}
                    </div>
                }
            </div>
          );
      default:
        return 'Unknown step';
    }
  }
  const handleNext = () => {
    if (activeStep == 0) {
      if (firstname === '' || lastname === '' || middlename === '' || phoneNumber === '' || address === '' || applicantImg === '') {
        console.log('empty');
        setAlert('All fields are required', 'danger');
        
      } else {
        console.log(firstname+' '+lastname+' '+middlename+' '+phoneNumber+' '+address+' '+sexValue+' '+applicantImg);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        
      }
    } else if (activeStep == 1) {
      if (accName === '' || accNumber === '' || bankName === '' || meansOfId === '' || actualId === '' || age === '' || meansOfIdImg === '') {
        setAlert('All fields are required', 'danger');
        
      } else {
        console.log(accName+' '+accNumber+' '+bankName+' '+meansOfId+' '+actualId+' '+age);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        
      }
    } else if (activeStep == 2) {
      if (nextOfKinName === '' || nextOfKinAddr === '' || nextOfKinNumber === '' || NextOfKinImg === '') {
        setAlert('All fields are required', 'danger');
        
      } else {
        console.log(nextOfKinName+' '+nextOfKinAddr+' '+nextOfKinNumber+' '+nextOfKinSex);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        
      }
    } else if (activeStep == 3) {
      if (gaurantor === '' || gaurantorAddr === '' || gaurantorNumber === '' || guarantorImg1 === '') {
        console.log('empty');
        setAlert('All fields are required', 'danger');
        
      } else {
        console.log(gaurantor+' '+gaurantorAddr+' '+gaurantorNumber+' '+gaurantorSex);
        

        if (showNewGuarantor == true) {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
          // console.log(showNewGuarantor);
        } else {
          // console.log(showNewGuarantor);
          if (gaurantor2 === '' || gaurantorAddr2 === '' || gaurantorNumber2 === '' || guarantorImg2 === '') {
            setAlert('All fields are required', 'danger');
          } else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
          }
          
        }
        
      }
    }
    
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  if (activeStep === steps.length) {
    console.log(activeStep);
    console.log(steps.length);
    
  }

  const checkMimeType = (event) => {
    //getting file object
    // let files = event.target.files 
    let applicantImg = document.getElementById("applicantImg")
    let meansOfIdImg = document.getElementById("meansOfIdImg")
    let NextOfKinImg = document.getElementById("NextOfKinImg")
    let guarantorImg1 = document.getElementById("guarantorImg1")
    let guarantorImg2 = document.getElementById("guarantorImg2")
    //define message container
    let err = ''
    // list allow mime type
   const types = ['image/png', 'image/jpeg', 'image/jpg']
    // loop access array
    if (applicantImg) {
      for(var x = 0; x<applicantImg.length; x++) {
        // compare file type find doesn't matach
       
            if (types.every(type => applicantImg[x].type !== type)) {
            // create error message and assign to container   
            err += applicantImg[x].type+' is not a supported format\n';
          }
        };
     
      if (err !== '') { // if message not same old that mean has error 
          //  event.target.value = null // discard selected file
           console.log(err)
            return false; 
       } 
      return true;
    } else if (meansOfIdImg) {
      for(var x = 0; x<meansOfIdImg.length; x++) {
        // compare file type find doesn't matach
       
            if (types.every(type => meansOfIdImg[x].type !== type)) {
            // create error message and assign to container   
            err += meansOfIdImg[x].type+' is not a supported format\n';
          }
        };
     
      if (err !== '') { // if message not same old that mean has error 
          //  event.target.value = null // discard selected file
           console.log(err)
            return false; 
       } 
      return true;
    } else if (NextOfKinImg) {
      for(var x = 0; x<NextOfKinImg.length; x++) {
        // compare file type find doesn't matach
       
            if (types.every(type => NextOfKinImg[x].type !== type)) {
            // create error message and assign to container   
            err += NextOfKinImg[x].type+' is not a supported format\n';
          }
        };
     
      if (err !== '') { // if message not same old that mean has error 
          //  event.target.value = null // discard selected file
           console.log(err)
            return false; 
       } 
      return true;
    } else if (guarantorImg1) {
      for(var x = 0; x<guarantorImg1.length; x++) {
        // compare file type find doesn't matach
       
            if (types.every(type => guarantorImg1[x].type !== type)) {
            // create error message and assign to container   
            err += guarantorImg1[x].type+' is not a supported format\n';
          }
        };
     
      if (err !== '') { // if message not same old that mean has error 
          //  event.target.value = null // discard selected file
           console.log(err)
            return false; 
       } 
      return true;
    } else if (guarantorImg2) {
      for(var x = 0; x<guarantorImg2.length; x++) {
        // compare file type find doesn't matach
       
            if (types.every(type => guarantorImg2[x].type !== type)) {
            // create error message and assign to container   
            err += guarantorImg2[x].type+' is not a supported format\n';
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
    var image2;
    var image3;
    var image4;
    var image5;
    e.preventDefault();
    
    if(checkMimeType(e)){ 
      // let afiles = document.getElementById("files")
      // let files2 = document.getElementById("files2")
      if (e.currentTarget.id == "applicantImg") {
        if (e.currentTarget.files.length == 0) {
            setUserInfo({ ...userInfo, applicantImg: "" });
            document.getElementById("output1").src = "";
          } else {
            image1 = document.getElementById('output1');
            var objectUrl1 = URL.createObjectURL(e.currentTarget.files[0]);
            setUserInfo({ ...userInfo, applicantImg: e.currentTarget.files[0].name });
            image1.src  = objectUrl1;
            
        }
      } else if (e.currentTarget.id == "meansOfIdImg") {
        if (e.currentTarget.files.length == 0) {
            setUserInfo({ ...userInfo, meansOfIdImg: "" });
            document.getElementById("output2").src = "";
          } else {
            image2 = document.getElementById('output2');
            var objectUrl2 = URL.createObjectURL(e.currentTarget.files[0]);
            setUserInfo({ ...userInfo, meansOfIdImg: e.currentTarget.files[0].name });
            image2.src  = objectUrl2;
            
        }
      } else if (e.currentTarget.id == "NextOfKinImg") {
        if (e.currentTarget.files.length == 0) {
            setUserInfo({ ...userInfo, NextOfKinImg: "" });
            document.getElementById("output3").src = "";
          } else {
            image3 = document.getElementById('output3');
            var objectUrl3 = URL.createObjectURL(e.currentTarget.files[0]);
            setUserInfo({ ...userInfo, NextOfKinImg: e.currentTarget.files[0].name });
            image3.src  = objectUrl3;
            
        }
      } else if (e.currentTarget.id == "guarantorImg1") {
        if (e.currentTarget.files.length == 0) {
            setUserInfo({ ...userInfo, guarantorImg1: "" });
            document.getElementById("output4").src = "";
          } else {
            image4 = document.getElementById('output4');
            var objectUrl4 = URL.createObjectURL(e.currentTarget.files[0]);
            setUserInfo({ ...userInfo, guarantorImg1: e.currentTarget.files[0].name });
            image4.src  = objectUrl4;
            
        }
      } else if (e.currentTarget.id == "guarantorImg2") {
        if (e.currentTarget.files.length == 0) {
            setUserInfo({ ...userInfo, guarantorImg2: "" });
            document.getElementById("output5").src = "";
          } else {
            image5 = document.getElementById('output5');
            var objectUrl5 = URL.createObjectURL(e.currentTarget.files[0]);
            setUserInfo({ ...userInfo, guarantorImg2: e.currentTarget.files[0].name });
            image5.src  = objectUrl5;
            
        }
      }

   }

  } 

  const { firstname, lastname, middlename, phoneNumber, address , accName , bankName , accNumber, actualId , nextOfKinName , nextOfKinAddr , nextOfKinNumber , gaurantor , gaurantorAddr , gaurantorNumber , gaurantor2 , gaurantorAddr2 , gaurantorNumber2 , 
  // All Images
    applicantImg , meansOfIdImg , NextOfKinImg , guarantorImg1 , guarantorImg2 } = userInfo;  
  // console.log(applicantImg);

  const onSubmit = async e => {
    // setIsLoading(true);
    e.preventDefault();
    console.log(firstname+' '+lastname+' '+middlename+' '+phoneNumber+' '+address+' '+sexValue+' '+accName+' '+accNumber+' '+bankName+' '+meansOfId+' '+actualId+' '+age+' '+nextOfKinName+' '+nextOfKinAddr+' '+nextOfKinNumber+' '+nextOfKinSex+' '+gaurantor+' '+gaurantorAddr+' '+gaurantorNumber+' '+gaurantorSex+' '+applicantImg+' '+meansOfIdImg+' '+NextOfKinImg+' '+guarantorImg1+' '+guarantorImg2);

    await loanApplication({firstname , lastname , middlename , phoneNumber , address , sexValue , accName , accNumber , bankName , meansOfId , actualId , age , nextOfKinName , nextOfKinAddr , nextOfKinNumber , nextOfKinSex , gaurantor , gaurantorAddr , gaurantorNumber , gaurantorSex , applicantImg , meansOfIdImg , NextOfKinImg , guarantorImg1 , guarantorImg2})

  };

  return (
    <div className='container-fluid mt-5'>
      <div className='row'>
        <div className='col-md-6 mx-auto'>
          <div className='text-center'>
            <h3>Loan Application</h3>
          </div>
          <div>
            <form onSubmit={e => onSubmit(e)}>
              <div className={classes.root}>
                <Stepper activeStep={activeStep} orientation="vertical">
                  {steps.map((label, index) => (
                    <Step key={label}>
                      <StepLabel className='step-label'>{label}</StepLabel>
                      <StepContent>
                        <Typography>{getStepContent(index)}</Typography>
                        <div className={classes.actionsContainer}>
                          <div>
                            <Button
                              disabled={activeStep === 0}
                              onClick={handleBack}
                              className={classes.button}
                            >
                              Back
                            </Button>
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={handleNext}
                              className={classes.button+' next-btn'}
                            >
                              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                          </div>
                        </div>
                      </StepContent>
                    </Step>
                  ))}
                </Stepper>
                {activeStep === steps.length && (
                  <Paper square elevation={0} className={classes.resetContainer}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <Button onClick={handleReset} className={classes.button}>
                      Reset
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      type='submit'
                      className={classes.button}
                    >
                      Submit
                    </Button>
                  </Paper>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Application.propTypes = {
  setAlert: PropTypes.func.isRequired
};


export default connect(null, { setAlert, loanApplication })(Application);
// export default Application;
