import React from 'react'

import WelcomeComponent from '../components/WelcomeComponent'
import BrandingComponent from '../components/BrandingComponent'
import AboutComponent from '../components/AboutComponent'
import BlogComponent from '../components/BlogComponent'


const IndexView = () => {
  return (
    <div>
      {/* COMPONENTS BINDING */}
      <WelcomeComponent />
      <BrandingComponent/>
      <AboutComponent/>
      <BlogComponent />
    </div> 
  )
}

export default IndexView
