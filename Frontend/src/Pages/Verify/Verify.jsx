import React, { useContext, useEffect } from 'react'
import './Verify.css'
import axios from 'axios';

import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext';
const Verify = () => {

    const[searchparams, setSearchParams] = useSearchParams() ;
    const success = searchparams.get("success");
    const orderId = searchparams.get("orderId");
    console.log(success, orderId);

    const {url} = useContext(StoreContext)
    const navigate = useNavigate()

    const verifyPayment = async () => {
        const response = await axios.post(url + "/api/order/verify", {success ,orderId});
        
        if (response.data.success) {
            navigate("/myorders");
            
        }
        else{
            navigate("/")
          
        }
    }
useEffect(()=>{
    verifyPayment()  // When component mounts, call the verifyPayment function.
    // If successful, navigate to myorders page. If not, navigate to home page.  // Call toast.success or toast.error accordingly.  // Remember to add necessary imports for toast.success and toast.error.  // You can also use the orderId for further processing or error handling.  // You can also use the success value to display a success or failure message to the user.  // Use useEffect to handle this logic.  // Use the navigate hook to change the URL.  // Remember to handle the case where the orderId is not provided in the URL.  // You can also add a loading spinner while waiting for the payment verification response.  // Remember to add necessary imports for the loading spinner.  // Use the useEffect hook to show the loading spinner when the orderId is provided in the URL.  // Call the fetchFoodList function when the component mounts to populate the
}, [])
  return (
    <div className='verify'>
        <div className="spinner"></div>
    </div>
  )
}

export default Verify