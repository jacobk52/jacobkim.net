module.exports = {
    siteMetadata: {
      title: `Personal Website`,
      description: `Personal website for Jacob Kim.`,
      author: `Jacob Kim`,
    },
    plugins: [
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `gatsby-starter-default`,
          short_name: `starter`,
          start_url: `/`,
          background_color: `#663399`,
          theme_color: `#663399`,
          display: `minimal-ui`,
          icon: `src/images/favicon.png`,
        },
      },
      `gatsby-plugin-sass`,
      `gatsby-plugin-smoothscroll`
    ]
  }