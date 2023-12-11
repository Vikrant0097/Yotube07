import { useState } from "react";
import axios from 'axios';
import Auth from "../layouts/auth";


const VerifyRegister = () =>{
     const [otp, SetOTP] = useState('');
     const [success, SetSuccess] = useState('');    
     const [error, SetError] = useState('');


  const handleSubmit = async(e) => {
   e.preventDefault();  
   SetSuccess('');
   SetError('');

   if(otp=="" || otp<6){
    SetError("please enter 6 digit OTP!");
         return false;
   }

   try {
    axios.defaults.headers.common['Authorization']= localStorage.getItem('verify_token');
    const res = await axios.post("http://127.0.0.1:5000/verify",{
      otp
     }); 
   
   if(res.data.status==true){
    SetSuccess(res.data.msg);
    localStorage.removeItem('verify_token')
    
     window.location.href="/login";
   }else{
    SetError(res.data.msg);

   }

   }

   catch(err ) {
    SetError(err)

   }
       
  } 

    return (
        <>
        
        <Auth alert={[error,success]}>
<form className="signin  form-control-lg  " onSubmit={handleSubmit}>
    <center>
     
    
    <h1 className="h3 mb-3 fw-bold fst-italic">Verify OTP </h1>
    
    <div className="form-floating w-100 mt-2">
      <input
        type="number"
        className="form-control"
        id="floatingInput"
        placeholder="OTP"
        onKeyUp={(e) => SetOTP(e.target.value)}
      />
      <label htmlFor="floatingInput">OTP 6 Digit</label>
    </div>
   
  
   
    <button className="btn btn-danger w-100 py-2 mt-3" type="submit">
      Verify OTP
    </button>
    <p className=" mb-3 text-body-secondary">© 2017–2023</p>
    </center>
  </form>
</Auth>
</>
    )
}

export default VerifyRegister
