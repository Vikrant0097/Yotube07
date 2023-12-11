
import Home from './pages/Home'
import  Login from './pages/Login'
import Register from './pages/Register'
import  Trending from './pages/Trending'
import  Forget from './pages/Forget'
import  Videopage from './pages/Videopage'
import  ChannelPage from './pages/ChannelPage'



import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VerifyRegister from './pages/VerifyRegister'
import VerifyLogin from './pages/VerifyLogin'


function App() {

  return (
    <>
      <Router>
      <Routes>
       <Route path="/" element={<Home/>}/> 
       <Route path="/trending" element={<Trending/>}/>    
       <Route path="/register" element={<Register/>}/> 
       <Route path="/login" element={<Login/>}/> 
       <Route path="/verifyRegister" element={<VerifyRegister/>}/> 
       <Route path="/verifyLogin" element={<VerifyLogin/>}/> 
       <Route path="/forget" element={<Forget/>}/> 
       <Route path="/videopage/:id" element={<Videopage/>}/> 
       <Route path="/:channel" element={<ChannelPage/>}/> 
     

      </Routes>
      </Router>
      </> 
  );
}  

export default App
