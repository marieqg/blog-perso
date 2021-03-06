require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Marie Quittelier`,
    description: `Blog de photo de Marie `,
    author: `Blooming&Co.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `vilette`,
        path: `${__dirname}/src/images/vilette`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blanchisserie`,
        path: `${__dirname}/src/images/blanchisserie`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `philarmonique`,
        path: `${__dirname}/src/images/philarmonique`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663380`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: process.env.INSTAGRAM_TOKEN,
      },
    },
  ],
}
