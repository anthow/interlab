import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"

const Experts = ({ data }) => (
  <>
 <Layout>
      <main className="flex flex-col md:grid grid-cols-4 w-10/12 m-auto content-start gap-10">
        <aside className="col-span-1  flex flex-col">
          <figure className="">
            <GatsbyImage
              image={
                data.contentfulCoachs.imageExperts.gatsbyImageData
              }
              alt=""
              className=""
            />
          </figure>

          <h2 className=" bg-orange-interra text-white text-3xl p-2 mb-5 text-center">
            {data.contentfulCoachs.nomDeLexpert}
          </h2>
          <nav>
            <ul className="flex flex-col gap-2">
              <li className="flex flex-row gap-2 items-center">
                <svg
                  width="25"
                  className="text-bleu-interra"
                  height="25"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  >
                    <path d="M3.338 17A9.996 9.996 0 0 0 12 22a9.996 9.996 0 0 0 8.662-5M3.338 7A9.996 9.996 0 0 1 12 2a9.996 9.996 0 0 1 8.662 5" />
                    <path d="M13 21.95s1.408-1.853 2.295-4.95M13 2.05S14.408 3.902 15.295 7M11 21.95S9.592 20.098 8.705 17M11 2.05S9.592 3.902 8.705 7M9 10l1.5 5l1.5-5l1.5 5l1.5-5M1 10l1.5 5L4 10l1.5 5L7 10m10 0l1.5 5l1.5-5l1.5 5l1.5-5" />
                  </g>
                </svg>
                <a
                  href={data.contentfulCoachs.siteInternet}
                  target="_blank"
                  rel="noreferrer"
                >                  <p className=" hover:text-orange-interra hover:decoration-solid">

                  {data.contentfulCoachs.siteInternet}
                  </p>
                </a>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <svg
                  width="25"
                  height="25"
                  className="text-bleu-interra"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"
                  />
                </svg>
                <a
                  href={data.contentfulCoachs.mail}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className=" hover:text-orange-interra hover:decoration-solid">
                    {" "}
                    {data.contentfulCoachs.mail}
                  </p>
                </a>
              </li>
            </ul>
            <div className="flex flex-row gap-2 mt-5 items-center">
              <a
                href={data.contentfulCoachs.facebook}
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="25"
                  className="text-bleu-interra hover:text-orange-interra"
                  height="25"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
                  />
                </svg>{" "}
              </a>
              <a
                href={data.contentfulCoachs.intagram}
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="25"
                  className="text-bleu-interra hover:text-orange-interra"
                  height="25"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
                  />
                </svg>
              </a>
            </div>
          </nav>
        </aside>
        <article className="col-span-3 flex flex-col ">
          <div
            className=" description flex flex-col gap-2 "
            dangerouslySetInnerHTML={{
              __html:
                data.contentfulCoachs.description.childMarkdownRemark
                  .html,
            }}
          />
        </article>
      </main>
    </Layout>
  </>
);

export const query = graphql`
  query CoachspageQuery($slug: String) {
    contentfulCoachs(slug: { eq: $slug }) {
      description {
        childMarkdownRemark {
          html
        }
      }
      facebook
      intagram
      mail
      nomDeLexpert
      slug
      siteInternet
      imageExperts {
        gatsbyImageData(height: 250, width: 250)
      }
      
    }
  }
`;

export default Experts
