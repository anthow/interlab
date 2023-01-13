import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"


const SlideFooter = () => (
  <StaticQuery
  query={graphql`
  {
    datoCmsFooter {
          soutiens {
            gatsbyImageData (height:170)
            alt
            customData
      }
    }
  }
  `}
    render={data => 

<>
      
<ul className="flex flex-col flex-wrap 
md:grid grid-cols-6 md:gap-x-10 
   gap-y-5 md:gap-y-10  ">


{data.datoCmsFooter.soutiens.map(node => 
        <li className=" place-self-center ">
          <a href={node.customData.url} rel="noreferrer" target="_blank" >

                <figure className="md:w-12/12 w-1/2 m-auto mb-8 md:m-0  ">
                <GatsbyImage image={node.gatsbyImageData} className=" w-full "
                alt={node.alt}
                  />
                </figure>
                </a>
                </li>
            
            )}

  



</ul>
            
</>
        
     }

     
  ></StaticQuery>
)

export default SlideFooter

