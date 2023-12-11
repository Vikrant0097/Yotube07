
import Navbar from '../components/header/Navbar'
import '../App.css'
import { useEffect,useState } from 'react'
import VideoData from '../data/video1.json';
import Music from '../components/UI/Music'
function Videopage() {
  const [video, setVideo] = useState({}); 

  useEffect(() => {
       
    const params= window.location.pathname.split('/Videopage/');
      
    VideoData.forEach(item => {
      if(item.id==params[1]) {
       //   console.log(item);
          setVideo(item);
      }
    })
 
  },[])

  return (
    <>
     <Navbar/>
     <div className='row'>
      <div className='col-8'>
 


<div className='ms-4 mt-3'>
<iframe width="950" height="500" src={video.video_url} className='rounded-4' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>
<div className='col-4'>
<Music/>
<Music/>
<Music/>
<Music/>


</div>
</div>
     

     

    
    </>
  )
}

export default Videopage
