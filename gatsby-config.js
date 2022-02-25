/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "Donny의 실장님",
    description: "자유로워야 한다, 단순해야 한다, 아름다워야 한다",
    author: "Jiam Seo",
    twitterUsername: "jams777",
    facebookUsername: "jiam.seo",
    instagramUsername: "jiamseo",
    linkedinUsername: "in/jams777",
    image: "/macbook-color.jpg",
    siteUrl: "https://jiam.kr",
    developerName: "Jiam Seo Development",
    developerUrl: "https://jiam.kr",
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://jiam.kr",
        sitemap: "https://jiam.kr/sitemap/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
  ],
}
