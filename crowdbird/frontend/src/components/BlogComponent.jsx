import React from "react"
import Blogdata from "../assets/Blogdata"
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight"

const BlogComponent = () => {
  return (
    <>
      <section className='blog Services'>
        <div className='container topMarign'>
          <div className='heading'>
            <h3>LATEST BLOG</h3>
            <h1>Read Inspirational Story Every Week</h1>
          </div>

          <div className='contain grid topMarign'>
            {Blogdata.map((val) => {
              return (
                <div className='box'>
                  <div className='img'>
                    <img src={val.cover} alt='' width="350px" height="300px"/>
                  </div>
                  <div className='text'>
                    <span>{val.date}</span>
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                    <a href='https://startuptalky.com/famous-entrepreneur-world/'>
                      Read More
                      <KeyboardDoubleArrowRightIcon className='icon' />
                    </a>
                  </div>
                  <br/>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogComponent