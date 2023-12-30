import React from 'react'
import { Link } from "react-router-dom"
import './common.css'


const WelcomeComponent = () => {
  return (
    <>
      <selection className='home'>
        <div className='container flex'>
            <div className='left'>
                <div className='img'>
                    <img src='./assets/home.png' alt='' />

                </div>
            </div>
              <div classNAme='right topMargin'>
                <h1>
                    I AM AN <br/>
                    ENTREPRENEUR 
                </h1>
                
             <p>An entrepreneur is an innovator or a creator who introduces <br/> something new to the firm or economy. <br/> It can be a new method of production, a new product, a new<br/> source of material, a new market or any other similar innovation.</p>
            <Link to='/login'>  <button className="primary-btn">Login</button></Link> 
            </div>  

        </div>
        </selection>
    </>
  )
}

export default WelcomeComponent
