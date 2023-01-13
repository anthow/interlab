import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Seo from "../components/seo";
import { GatsbyImage } from "gatsby-plugin-image";
import NavbarInterlab from "../components/navbar/interlab";
import { Link } from "gatsby";

const partenaires = ({ data }) => (
  <Layout>
    <Seo title="Page des partenaires de l'Interlab" />

    <article className="w-10/12 flex flex-col  my-10 gap-20  m-auto">
      <section className="flex flex-col gap-10">
        <h1 className="font-black text-4xl  text-orange-interra  bg-white text-center">
          {data.contentfulPagePartenaires.titre}
        </h1>
        <p className="  text-center px-3 m-auto paragraphe">
          {data.contentfulPagePartenaires.texteDintroduction.texteDintroduction}
        </p>
      </section>
      <NavbarInterlab />

      {/*} feed {*/}
      <section className="flex flex-col gap-10 md:grid grid-cols-4 ">
        {data.allContentfulPartenaires.edges.map(({ node }) => {
          return (
            <>
              <Link to={node.slug}>
                <section className="  gap-x-10 flex flex-col gap-y-5 md:gap-y-0  ">
                   <div className="relative block  bg-orange-interra group"> 
                    <figure
                      className="md:justify-self-center absolute
                         inset-0 object-cover w-full h-full group-hover:opacity-50"
                    >
                      <GatsbyImage
                        image={node.imagePartenaire.gatsbyImageData}
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
                              {/*}   par {node.nomDeLentrepreneur} {*/}
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
                  {node.nomPartenaire}
                </h3>
              </Link>
            </>
          );
        })}
      </section>
    </article>
  </Layout>
);

export const query = graphql`
  query {
    allContentfulPartenaires {
      edges {
        node {
          slug
          nomPartenaire
          imagePartenaire {
            gatsbyImageData(aspectRatio: 1.1, width: 250)
          }
        }
      }
    }
    contentfulPagePartenaires {
      texteDintroduction {
        texteDintroduction
      }
      titre
    }
  }
`;

export default partenaires;
