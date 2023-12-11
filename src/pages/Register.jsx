import { useState } from "react";
import axios from 'axios';
import Auth from "../layouts/auth";


const Signin = () => {
  const [name, SetName] = useState('');
  const [email, SetEmail] = useState('');
  const [password, SetPass] = useState('');
  const [success, SetSuccess] = useState('');
  const [error, SetError] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    SetSuccess('');
    SetError('');

    if (name == "" || email == "" || password == "") {
      SetError("please fill all fields!");
      return false;
    }

    try {

      const res = await axios.post("http://127.0.0.1:5000/register", {
        name, email, password
      });

      if (res.data.status == true) {
        localStorage.setItem('verify_token', res.data.token);
        window.location.href = '/verifyRegister';
        SetSuccess(res.data.msg);

      } else {
        SetError(res.data.msg);

      }

    }

    catch (err) {
      SetError(err)

    }

  }

  return (
    <>
    <Auth title="Register Account" alert={[error,success]}>
   
<form className="signin  form-control-lg  " onSubmit={handleSubmit}>
    <center>
    <div className="form-floating">
      <input
        type="name"
        className="form-control"
        id="floatingInput"
        placeholder="name@example.com"
      onKeyUp={(e) => SetName(e.target.value)}
      />
      <label htmlFor="floatingInput">Name</label>
    </div>
    <div className="form-floating mt-2">
      <input
        type="email"
        className="form-control"
        id="floatingInput"
        placeholder="name@example.com"
        onKeyUp={(e) => SetEmail(e.target.value)}
      />
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating mt-2">
      <input
        type="text"
        className="form-control"
        id="floatingInput"
        placeholder="name@example.com"
        onKeyUp={(e) => SetPass(e.target.value)}
      />
      <label htmlFor="floatingInput">Password</label>
    </div>
  
   
    <button className="btn btn-danger py-2 mt-3 w-100" type="submit">
      Submit
    </button>
    <a href="/Login">
        <p className="text-danger fw-semibold small mt-3">Sign in to an existing account</p>
    </a>
    </center>
  </form>
    </Auth>

    </>
  )
}

export default Signin