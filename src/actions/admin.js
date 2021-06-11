import axios from "axios";
import { setAlert } from "./alert";
// import {
//     FETCH_LOAN_SUCCESS,
//     FETCH_LOAN_FAILED,
//     FETCH_COMPANIES_SUCCESS,
//     FETCH_COMPANIES_FAILED,
//     FETCH_REQUESTS_SUCCESS,
//     FETCH_REQUESTS_FAILED,
//     FETCH_STATISTICS_SUCCESS,
//     FETCH_STATISTICS_FAILED,
//     API_URL as api_url
    
// } from "./types";


// Add Loan
export const createUser = ({firstname, lastname, middlename, email, phoneNumber, passportPhoto, branch , staffId , meansOfId , password}) => async dispatch => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    const body = JSON.stringify({
        firstname, lastname, middlename, email, phoneNumber, passportPhoto, branch , staffId , meansOfId , password
    });
    console.log(body);
  
    // try {
    //   const res = await axios.post(
    //     api_url + "/api/loans/add",
    //     body,
    //     config
    //   );
    //   console.log(res);
    //   //dispatch(setAlert("Added Successfully!", "success"));
    //  // dispatch(fetch(3000));
     
  
    //   return {
    //     status: true,
    //     id: res.id,
    //     cover_image: res.data.cover_image
    //   };
    // } catch (err) {
    //   console.log(err);
  
    //   const errors = err.response.data.errors;
    //   console.log(errors);
    //   if (errors) {
    //     errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    //   }
     
    //     return {
    //     status: false,
    //     id: null
    //   }
    // }
  };