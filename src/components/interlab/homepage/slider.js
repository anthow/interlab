import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const sliderEntrepeneurs = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulEntrepreneurs(
        filter: {switch: {eq: false}}
        limit: 4
        sort: {createdAt: ASC}
      ) {
        edges {
          node {
            photoentrepreneur {
                gatsbyImageData(aspectRatio: 1.1, width: 250)
            }
            slug
            switch
            nomduprojet
            nomDeLentrepreneur
          }
        }
      }
    }
  `)
  return <>
    <h2 className="font-black text-xl  text-orange-interra  bg-white ">Ils sont passés par chez nous</h2>
  <article className="flex flex-col w-full m-auto gap-10 md:grid grid-cols-4 ">
  {data.allContentfulEntrepreneurs.edges.map(({ node }) => {
    const slug = node.slug
          return (
            <>
              <Link to={"entrepreneurs/" + slug }>
                <section className="  gap-x-10 flex flex-col gap-y-5 md:gap-y-0  ">
                  <div className="relative block  bg-orange-interra group">
                    <figure
                      className="md:justify-self-center absolute
                         inset-0 object-cover w-full h-full group-hover:opacity-50"
                    >
                      <GatsbyImage
                        image={node.photoentrepreneur.gatsbyImageData}
                        alt=""
                        className="h-full w-full"
                      />
                    </figure>
                    <div class="relative ">
                      <div class=" p-10 py-24">
                        <div
                          class="transition-all transform 
                translate-y-2 w-12/12 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
                        >
                          <div class="">
                            <p class="text-lg text-center text-white ">
                              {node.nomduprojet}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    {/*}<h2 className="font-black text-3xl mb-2 text-orange-interra"> {node.organisateur}</h2>{*/}
                    {/*}<div dangerouslySetInnerHTML={{ __html: node.presentationAtelier }}></div>{*/}
                  </div>
                </section>
                <h3 className="font-black text-lg text-center p-2 mb-5 text-orange-interra">
                  {node.nomDeLentrepreneur}
                </h3>
              </Link>
            </>
          );
        })}
    
    </article>
    <Link className="underline text-orange-interra" to="/entrepreneurs">Voir tous les entrepeneurs</Link>

    </>
}

export default sliderEntrepeneurs

