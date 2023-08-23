import Home from "./Components/Home";
import Login from "./Components/Login";
import Services from "./Components/services";
import Contact  from "./Components/contact";
import {Link, Routes,Route} from  "react-router-dom" 
import { BsFillHousesFill } from "react-icons/bs";
import './App.css';
function App() {
  return ( 
    <>
      <div className="header">
         <div className="container">
        <div className="nav">
          {/* LOGO */}
          <Link to="/" className="logo"><BsFillHousesFill/>Jumeirah<span> Estates</span></Link>
           {/* Nav-bar */}
             <div className="navbar">
          <Link to="/Services" className="navlink">Services</Link>
          <Link to="/Contact" className="navlink">Contact</Link>
          <Link to="/Login" className="navlink">Log In</Link>
             </div>
        </div>
         </div>
      </div>
         {/* Routes */}
               <Routes>
                 <Route path="/" element={<Home/>} />
                 <Route path="/Login" element={<Login/>} />
                 <Route path="/Services" element={<Services/>} />
                 <Route path="/Contact" element={<Contact/>} />
               </Routes>
    </>
  )
}

export default App
