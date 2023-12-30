import React from 'react';
import { Link } from "react-router-dom";
import Logo from  '../assets/logo.png'

const FooterComponent = () => {
  return (
    <>
      <footer>
        <div className='container grid1'>
          <div className='box'>
            <img src={Logo} alt='' width="250" height="250" />
            
          </div>

          <div className='box'>
            <h2>Quick Links</h2>
            <ul>
              <li ><Link to='/'><mark class="white">Home</mark></Link></li>
              <li ><Link to='/advertiestments'><mark class="white">Advertiestments</mark></Link></li>
              <li ><Link to='/contact-us'><mark class="white">Contact Us</mark></Link></li>
            </ul>
          </div>

          <div className='box'>
            <h2>Recent Posts</h2>
            <div className='text'>
              <p>Most Popular Entrepreneurs</p>
              <span> 28 June 2022</span>
            </div>
            <div className='text'>
              <p>What are the Skills of Entrepreneurs</p>
              <span> 13 Feb 2022</span>
            </div>
            <div className='text'>
              <p>Entrepreneurs roles in Sri Lanka</p>
              <span> 9 April 2022</span>
            </div>
          </div>

          <div className='box'>
            <h2 id="footerh2">Get in Touch</h2>
            
            <div className='icon'>
              <i class='fa-solid fa-location-dot'></i>
              <label>2nd Mile Post, Passara Road, Badulla</label>
            </div>
            <div className='icon'>
              <i class='fa fa-phone'></i>
              <label>Phone:+94 7654 327 89</label>
            </div>
            <div className='icon'>
              <i class='fa fa-envelope'></i>
              <label>Email:CrowdBird@gmail.com</label>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default FooterComponent
