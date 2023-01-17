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
                    <figure
                    >
                      <GatsbyImage
                        image={node.imagePartenaire.gatsbyImageData}
                        alt=""
                        className="w-max"
                        
                      />
                    </figure>
                
         
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
          nomPartenaire
          imagePartenaire {
            gatsbyImageData(height:70)
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
