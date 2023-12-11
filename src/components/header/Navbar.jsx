import { useEffect, useState } from "react"
import axios from "axios";
const Navbar = () => {
  const [user,setUser] = useState({});
  useEffect(()=> {
    
    if(localStorage.getItem('token')) {
     
      getUser();
    }

  })

  const getUser = async() => {
    axios.defaults.headers.common['Authorization']= localStorage.getItem('token');
    const res = await axios.get("http://127.0.0.1:5000/getUser"); 
    console.log(res.data);
    setUser(res.data.user);
  }
  const handleLogout = () => {
    if(confirm("Are you sure? Click 'OK' to Logout")){
    localStorage.removeItem('token')
    window.location.href='/'
    }

  }

  return (
    <>

      <div className="container-fluid pb-3 mt-1 bg-light sticky-top align-item-center">
        <div className="row ">
          <div className="col-14 d-flex">
            <div className="col-3 mt-2 d-flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="currentColor" className="fw-bold mt-2" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
              <a href="/">
                <img src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg" className="w-50 h-100"></img></a>

            </div>

            <div className="col-6 mt-2 d-flex">
              <input type="text" className="rounded-start-pill ps-3 border-1 w-100" placeholder="Search"></input>
              <button className="btn btn-outline-dark rounded-end-pill" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg></button>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="50" fill="currentColor" class="bi bi-mic-fill ms-3" viewBox="0 0 16 16">
                <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
              </svg>

            </div>

            <div className="col-3 d-flex justify-content-end">
              {!user._id && <a href="/Login">
                <button type="button" class="btn btn-outline-primary mt-3 rounded-pill me-3"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" className="bi bi-person-circle me-2" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                </svg>Log In</button>
              </a> }

              {user._id && <div className="btn border-0 ">
  <button type="button" className="btn btn-outline-primary mt-2 rounded-pill dropdown-toggle pt-2 pb-2 fs-6 fw-bold position-relative" data-bs-toggle="dropdown" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" className="bi bi-person-circle me-2" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                </svg>
    {user.name} <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
  99+
  <span className="visually-hidden">unread messages</span>
</span>


  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Profile</a></li>
    <li><a className="dropdown-item" href="#">Setting</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
    <li><hr className="dropdown-divider" /></li>
    <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
  </ul>
</div>

 }
           


            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Navbar