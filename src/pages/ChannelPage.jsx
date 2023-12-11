
import Navbar from '../components/header/Navbar'
import '../App.css'
import { useEffect,useState } from 'react'
import ChannelData from '../data/channel.json';
import Sidebar from '../components/header/Sidebar';
import VideoData from '../data/video1.json';
import Video from '../components/UI/Video'
function ChannelPage() {
  const [channel, setChannel] = useState({}); 

  useEffect(() => { 
       
    const params= window.location.pathname.split('/');
    //    console.log(ChannelData);
        ChannelData.forEach(item => {
      if(item.slug==params[1]) {
       //   console.log(item);
       setChannel(item);
      }
    })
 
    console.log(channel);
  },[])

  return (
    <>
     <Navbar/>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-2'>
            <Sidebar/>
   

            </div>
            <div className='col-10 p-0'>
                <img src={channel.banner_img} className='img-fluid ppp'/>
                <div className='row m-4'>
                    <div className='col-2'>
                        <img src={channel.logo} className='img-fluid rounded-pill' />
                    </div>
                    <div className='col-8  py-4 px-5'>
                       <h2> {channel.name}</h2>
                       <p>{channel.slug} <span>10.7M subscribers</span> <span>10K videos</span></p>
                       <span>{channel.description}</span>
                    </div>
                    <div className='col-2'>
                    <button type="button" className="btn btn-dark rounded-pill mt-3">Subscribe</button>
                  

                    </div>

                </div>
                <div className='col-12 mt-3'>

<ul className="nav nav-underline border-bottom" id="myTab" role="tablist">
    <li className="nav-item" role="presentation">
      <button
        className="nav-link active text-dark me-5"
        id="home-tab"
        data-bs-toggle="tab"
        data-bs-target="#home-tab-pane"
        type="button"
        role="tab"
        aria-controls="home-tab-pane"
        aria-selected="true"
        >
        HOME
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link text-dark me-5"
        id="profile-tab"
        data-bs-toggle="tab"
        data-bs-target="#profile-tab-pane"
        type="button"
        role="tab"
        aria-controls="profile-tab-pane"
        aria-selected="false"
        >
        VIDEOS
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link text-dark me-5"
        id="contact-tab"
        data-bs-toggle="tab"
        data-bs-target="#contact-tab-pane"
        type="button"
        role="tab"
        aria-controls="contact-tab-pane"
        aria-selected="false"
        >
         LIVE
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link text-dark me-5"
        id="disabled-tab"
        data-bs-toggle="tab"
        data-bs-target="#disabled-tab-pane"
        type="button"
        role="tab"
        aria-controls="disabled-tab-pane"
        aria-selected="false"
        disabled=""
        >
        PLAYLISTS
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link text-dark me-5"
        id="home-tab"
        data-bs-toggle="tab"
        data-bs-target="#new-tab-pane"
        type="button"
        role="tab"
        aria-controls="home-tab-pane"
        aria-selected="true"
        >
      COMMUNITY
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link text-dark me-5"
        id="home-tab"
        data-bs-toggle="tab"
        data-bs-target="#old-tab-pane"
        type="button"
        role="tab"
        aria-controls="home-tab-pane"
        aria-selected="true"
        >
        CHANNELS
      </button>
    </li>
    
  </ul>
  


  <div className="tab-content" id="myTabContent">

    <div
      className="tab-pane fade show active"
      id="home-tab-pane"
      role="tabpanel"
      aria-labelledby="home-tab"
      tabIndex={0}
      >
         <div className='row mt-3 mx-0'>
       {VideoData && VideoData.map(item => {

       return (
        <div className='col-3  '>
        <Video video1={item}/>
        </div>
       
       )

       })}
     
  </div>

     
  
      
    </div>
    <div
      className="tab-pane fade"
      id="profile-tab-pane"
      role="tabpanel"
      aria-labelledby="profile-tab"
      tabIndex={0}
      >
      nitbjnir
    </div>
    <div
      className="tab-pane fade"
      id="contact-tab-pane"
      role="tabpanel"
      aria-labelledby="contact-tab"
      tabIndex={0}
      >
      dencinevo
      
    </div>
    <div
      className="tab-pane fade"
      id="disabled-tab-pane"
      role="tabpanel"
      aria-labelledby="disabled-tab"
      tabIndex={0}
      >
    
      ,em cl
      
    </div>
    <div
      className="tab-pane fade"
      id="new-tab-pane"
      role="tabpanel"
      aria-labelledby="disabled-tab"
      tabIndex={0}
      >
    
      ,em cl
      
    </div>
    <div
      className="tab-pane fade"
      id="old-tab-pane"
      role="tabpanel"
      aria-labelledby="disabled-tab"
      tabIndex={0}
      >
    
      ,em cl
      
    </div>
  </div>


</div>
            </div>

        </div>

    </div>

     

    
    </>
  )
}

export default ChannelPage
