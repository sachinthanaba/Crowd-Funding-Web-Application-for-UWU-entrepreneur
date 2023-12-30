import React from 'react'

const BrandingComponent = () => {
    const data = [
        {
          id: "01",
          heading: "Digital Branding",
          desc: "The digital brand sometimes can be called digital brand management because it operates and controls brand identity, visibility, and credibility.",
        },
        {
          id: "02",
          heading: "Team Management",
          desc: "Team management is the ability of an individual or an organization to administer and coordinate a group of individuals to perform a task.",
        },
        {
          id: "03",
          heading: "Creative Mind",
          desc: "A creative mind is the one that sees information particularly from the world around it and relates it to their experiences and existing knowledge in order to create.",
        },
      ]


  return (
    <>
    <section className='Branding'>
        <div className='container grid'>
            {data.map((value) =>{
                return( 
                <div className="box flex">
                    <div className="text">
                        <h1>{value.id}</h1>
                        
                    </div>
                    <div className="para">
                        <h2>{value.heading}</h2>
                        <p>{value.desc}</p>

                    </div>
                </div>
                )
            })}
        </div>
    </section>
        
    </>
  )
}

export default BrandingComponent