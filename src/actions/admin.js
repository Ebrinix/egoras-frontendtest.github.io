import axios from "axios";
import { setAlert } from "./alert";
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    FETCH_COMPANIES_SUCCESS,
    FETCH_COMPANIES_FAILED,
    FETCH_REQUESTS_SUCCESS,
    FETCH_REQUESTS_FAILED,
    FETCH_STATISTICS_SUCCESS,
    FETCH_STATISTICS_FAILED,
    API_URL as api_url
    
} from "./types";


// Add Loan
export const createUser = ({first_name, last_name, other_name, email, sex, date_of_birth, designation, aRole, phone, passport, branch , staffId , meansOfID , password}) => async dispatch => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    const body = JSON.stringify({
      first_name, last_name, other_name, email, sex, date_of_birth, designation, aRole, phone, passport, branch , staffId , meansOfID , password
    });
    console.log(body);
  
    // try {
    //   const res = await axios.post(api_url+'/api/users', body, config);
  
    //   dispatch({
    //     type: REGISTER_SUCCESS,
    //     payload: res.data
    //   });
    //   return {
    //     success: true
    //   }
  
    //   //dispatch(loadUser());
    // } catch (err) {
    //   const errors = err.response.data.errors;
    //   console.log(errors);
  
    //   if (errors) {
    //     errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    //   }
  
    //   dispatch({
    //     type: REGISTER_FAIL
    //   });
  
    //   return {
    //     success: false
    //   }
    // }
  };