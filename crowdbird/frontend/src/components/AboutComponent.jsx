import React from 'react'
import { Link } from "react-router-dom"

const AboutComponent = () => {

  const data = [
    {
      title: "Who is an Entrepreneur and ", 
      title1: "what he can do",
      desc1: "Entrepreneurs develop, design, produce, market, and eventually sell businesses with the end goal of financial profit. There are entrepreneurs behind every business in the country,",
      desc2: "no matter what the size and scope (think Coca Cola, Microsoft, Facebook, Amazon, McDonald's etc).Entrepreneurs own and operate everything from small shoe stores to tech startups",
      desc3: "A modern day interpretation may associate being an entrepreneur with having an innovative and creative idea for online use, and with someone who can use the power of the internet to fill a niche.",
      cover: "./assets/homeback.jpg",
    },
  ]


  return (
    <>
      <section className='about topMarign'>
        <div className='container flex'>
          {data.map((value) => {
            return (
              <>
                <div className='left mtop'>
                  <div className='heading'>
                    <h3>From an Entrepreneur</h3>
                    <h1>{value.title}</h1>
                    <h1>{value.title1}</h1>
                  </div>

                  <p>{value.desc1}</p>
                  <p>{value.desc2}</p>
                  <p>{value.desc3}</p>
                  <Link to='/contact-us'><button className='primary-btn'>Contact Us</button></Link>
                </div>
                <div className='right'>
                  <div className='img'>
                    <img src={value.cover} alt='' />
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}
    
export default AboutComponent