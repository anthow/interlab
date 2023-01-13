/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `interlab`,
    description: `interlab`,
    author: `interlab`,
    siteUrl:'https://www.interra-asbl.be/'
  },
  plugins: [
    {
    resolve: 'gatsby-source-datocms',
    options: {
      "apiToken": "70922149b5b6ab9f2cbf4f2a23171a"
    }
  },
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `Oxygen`,
        `Roboto` // you can also specify font weights and styles
      ],
      display: 'swap'
    }
  },

  {
    resolve: `gatsby-source-contentful`,
    options: {
      "accessToken": "p80WLxedAVZy48yZ_h7yEnxJYzxlzI-y-tBiKiUERlc",
      "spaceId": "t0kynlkq1wsw"
    }
  },
  
  "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-postcss", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-transformer-remark", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};