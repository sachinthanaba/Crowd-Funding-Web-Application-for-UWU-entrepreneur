import React, { useState,useEffect }  from 'react'
import { Link } from "react-router-dom"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import GridViewTwoToneIcon from "@mui/icons-material/GridViewTwoTone"
import Logo from  '../assets/logo.png'
import './common.css'


const HeaderComponent = () => {
  const [sidebar, setSidebar] = useState(false);
  const [logged, setLoginStatus] = useState(false)

  //var userId = window.localStorage.getItem("userEmail");


  useEffect(()=> {
   if(null != window.localStorage.getItem("userEmail")){
    setLoginStatus(true)
   }
  },[]); 

  window.addEventListener("scroll",function() {
    const header =document.querySelector(".header")
    header.classList.toggle("active", window.screenY > 200)
  })
  return (
    <>
      <header className='header'>
        <div className='container flex'>
            <div className='logo'>
                <img src={Logo} alt='' width="130" height="130" />
            </div>
            <div className="nav">
              <ul className={sidebar ? "nav-links-sidebar" : "nav-links"} onClick={() => setSidebar(false)}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/advertisements'>Advertiestments</Link></li>
                <li ><Link to='/contact-us'>Contact Us</Link></li>
                <li><Link to='/submission'><button type="button" class={logged? "btn btn-warning":"btn btn-warning-disabled"}><mark class="white">Submit Your Ideas</mark></button></Link></li>
                {/* <li className="icon">
                  <SearchOutlinedIcon className='HeaderIcon'/>
                  <GridViewTwoToneIcon className='HeaderIcon' /> 
                </li> */}
              </ul>
             
            </div>
            
            <button className='navbar-items-icon' onClick={() => setSidebar(!sidebar)}>
              {sidebar? <CloseIcon/> : <MenuIcon/>}
            </button>
        </div>
      </header>
    </>
  )
}

export default HeaderComponent
