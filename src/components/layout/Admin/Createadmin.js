import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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


export const Createadmin = ({}) => {
    const classes = makeStyles();
    const [value, onChange] = useState(new Date());
    const [open2, setOpen2] = React.useState(false);
    const [sexValue, setSexValue] = React.useState('male');
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
        firstname: "",
        lastname: "",
        middlename: "",
        phoneNumber: "",
        passportPhoto: "",
        branch: "",
        staffId: "",
        meansOfId: "",
        password: "",
        confirmPassword: "",
    });

    const checkMimeType = (event) => {
        //getting file object
        // let files = event.target.files 
        let passportPhoto = document.getElementById("passportPhoto")
        
        //define message container
        let err = ''
        // list allow mime type
        const types = ['image/png', 'image/jpeg', 'image/jpg']
        // loop access array
        if (passportPhoto) {
          for(var x = 0; x<passportPhoto.length; x++) {
            // compare file type find doesn't match
           
                if (types.every(type => passportPhoto[x].type !== type)) {
                // create error message and assign to container   
                err += passportPhoto[x].type+' is not a supported format\n';
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
            if (e.currentTarget.id == "passportPhoto") {
                if (e.currentTarget.files.length == 0) {
                    setUserInfo({ ...userInfo, passportPhoto: "" });
                    document.getElementById("output1").src = "";
                } else {
                    image1 = document.getElementById('output1');
                    var objectUrl1 = URL.createObjectURL(e.currentTarget.files[0]);
                    setUserInfo({ ...userInfo, passportPhoto: e.currentTarget.files[0].name });
                    image1.src  = objectUrl1;
                    
                }
            } 
        }
    }

    const onChange1 = e =>
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });

    const { firstname, lastname, middlename, email, phoneNumber, passportPhoto, branch , staffId , meansOfId , password, confirmPassword } = userInfo;  

    const onSubmit = async e => {
        e.preventDefault();
        console.log(firstname+' '+lastname+' '+middlename+' '+phoneNumber+' '+email+' '+passportPhoto+' '+branch+' '+staffId+' '+designation+' '+password+' '+confirmPassword);

        if (firstname === '' || lastname === '' || middlename === '' || phoneNumber === '' || email === '' || passportPhoto === '' || branch === '' || staffId === '' || designation === '' || password === '' || confirmPassword === '') {
            console.log('empty');
            // setAlert('All fields are required', 'danger');
        
        } else {  
            if (password !== confirmPassword) {
                // setAlert('passwords do not match', 'danger');
                // setIsLoading(false);
            }else if(password.length < 7){
                // setAlert('passwords must be seven(7) characters long or more!', 'danger');
                // setIsLoading(false);
            }
        }
        
    };

    return (
        <div>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-6 mx-auto'>
                        <div className='text-center mb-3'>
                            <h3>Add User</h3>
                        </div>
                        
                        <form onSubmit={e => onSubmit(e)}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    {/* <input type="text" className="form-control" placeholder="First name" /> */}
                                    <TextField
                                        label="Firstname"
                                        placeholder="Firstname"
                                        multiline
                                        variant="outlined"
                                        className='custom-inputs w-100'
                                        name='firstname' 
                                        // value={firstname} 
                                        onChange={e => onChange1(e)}
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
                                        onChange={e => onChange1(e)}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <TextField
                                        label="Middlename"
                                        placeholder="Middlename"
                                        multiline
                                        variant="outlined"
                                        className='custom-inputs w-100'
                                        name='middlename' 
                                        value={middlename} 
                                        onChange={e => onChange1(e)}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <TextField
                                        label="Email"
                                        placeholder="Email"
                                        multiline
                                        type="email"
                                        variant="outlined"
                                        className='custom-inputs w-100'
                                        name='email' 
                                        value={email} 
                                        onChange={e => onChange1(e)}
                                    />
                                </div>
                                
                                <div className="form-group col-md-6">
                                    <FormControl component="fieldset" className='custom-radio'>
                                        <FormLabel className='mb-0' component="legend">Gender</FormLabel>
                                        <RadioGroup className='sex-input' aria-label="gender" name="gender1" value={sexValue} onChange={handleChange}>
                                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                                <div className="form-group col-md-6">
                                    
                                    <label for="" style={{marginBottom: '3px'}}>Date of Birth</label>
                                    <DatePicker
                                        onChange={onChange}
                                        value={value}
                                        className='custom-datepicker w-100 h-50'
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <TextField
                                        id="outlined-number"
                                        label="Phone Number"
                                        placeholder="Phone Number"
                                        type="number"
                                        className='custom-inputs w-100 remove-arrow'
                                        variant="outlined"
                                        name='phoneNumber' 
                                        value={phoneNumber} 
                                        onChange={e => onChange1(e)}
                                    />
                                    
                                </div>
                                <div className="form-group col-md-6">
                                    <TextField
                                        label="Branch"
                                        placeholder="Branch"
                                        multiline
                                        variant="outlined"
                                        className='custom-inputs w-100'
                                        name='branch' 
                                        value={branch} 
                                        onChange={e => onChange1(e)}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                   
                                    <div className='mr-2'>
                                        <FormControl className={classes.formControl+ " w-100" }>
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
                                <div className="form-group col-md-6">
                                    <TextField
                                        label="Staff Id"
                                        placeholder="Staff Id"
                                        multiline
                                        variant="outlined"
                                        className='custom-inputs w-100'
                                        name='staffId' 
                                        value={staffId} 
                                        onChange={e => onChange1(e)}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <TextField
                                        label="Means of Id"
                                        placeholder="Means of Id"
                                        multiline
                                        variant="outlined"
                                        className='custom-inputs w-100'
                                        name='meansOfId' 
                                        value={meansOfId} 
                                        onChange={e => onChange1(e)}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="">Passport Photo</label><br />
                                    <input className='dark-input' type='file' name='passportPhoto' id='passportPhoto'  onChange={onFileChange} />
                                    <img id="output1" className="img-fluid mt-4" />
                                </div>
                                <div className="form-group col-md-6">
                                    <TextField
                                        label="Password"
                                        placeholder="Password"
                                        multiline
                                        variant="outlined"
                                        className='custom-inputs w-100'
                                        name='password' 
                                        value={password} 
                                        onChange={e => onChange1(e)}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <TextField
                                        label="Confirm Password"
                                        placeholder="Confirm Password"
                                        multiline
                                        variant="outlined"
                                        className='custom-inputs w-100'
                                        name='confirmPassword' 
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
        
    );
};

export default Createadmin;