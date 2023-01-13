import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import NavbarInterlab from "../components/navbar/interlab"

const Interlab = ({ data }) => (
  <Layout>
            <Seo title="Page d'accueil de l'Interlab" />

  <article className="w-10/12 flex flex-col  my-10 gap-20  m-auto">
<section className="flex flex-col gap-10">
  <h1 className="font-black text-4xl  text-orange-interra  bg-white text-center">{data.contentfulPageDaccueil.titre}</h1>
  <p className="  text-center px-3 m-auto paragraphe">{data.contentfulPageDaccueil.texteIntroduction.texteIntroduction}</p>
  <NavbarInterlab/>

  </section>
  <article className="w-10/12  mt-10   m-auto">
                <section className="flex flex-col md:flex-row mb-10 justify-center items-center m-auto  gap-x-10 gap-y-10 md:gap-y-20">

                    <figure className="">
                        <GatsbyImage image={data.datoCmsIncubateurInclusif.image.gatsbyImageData} alt={data.datoCmsIncubateurInclusif.image.alt} className=" " />

                    </figure>
                    <div className="">
                        <div dangerouslySetInnerHTML={{ __html: data.datoCmsIncubateurInclusif.textePartieUn }} className="paragraphe"></div>
                    </div>

                </section>
                <div dangerouslySetInnerHTML={{ __html: data.datoCmsIncubateurInclusif.textePartieDeux }} className="paragraphe "></div>
               {/*} <Link to="/../devenir-membre">
                <button className=" mt-5 text-white font-black  p-1 px-2  bg-orange-interra hover:opacity-80 rounded"> Je veux soutenir le projet </button>
</Link>{*/}
                            </article>
  </article>
  </Layout>
)

export const query = graphql`
  query {
    contentfulPageDaccueil {
      titre
      texteIntroduction {
        texteIntroduction
      }
      titreInterlab
      texteInterlab {
        texteInterlab
      }
      imageInterlab {
        gatsbyImageData(aspectRatio: 1.5, width: 400)
      }
      titreEntrepreneurs
      texteEntrepreneurs {
        texteEntrepreneurs
      }
      imageEntrepreneurs {
        gatsbyImageData(aspectRatio: 1.5, width: 400)
      }
      titreExperts
      texteExperts {
        texteExperts
      }
      imageExperts {
        gatsbyImageData(aspectRatio: 1.5, width: 400)
      }
      titrePartenairesbon
      textePartenaires {
        textePartenaires
      }
      imagePartenaires {
        gatsbyImageData(aspectRatio: 1.5, width: 400)
      }
    }
    datoCmsIncubateurInclusif {
      image {
        gatsbyImageData
        alt
      }
      textePartieDeux
      textePartieUn
      titre
      titreIncubateurInclusif
    }
  }
`

export default Interlab