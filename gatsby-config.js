/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
module.exports = {
  pathPrefix: process.env.PATH_PREFIX || '/',
  siteMetadata: {
    siteTitle: 'Bear的跑步记录',
    siteUrl: 'https://shixiongyan.github.io/running/',
    logo: 'https://bpic.588ku.com/element_origin_min_pic/19/03/06/0671794ec57e4e4afcc9146971f618fd.jpg',
    description: 'Personal site and blog',
    navLinks: [
      {
        name: 'blibli',
        url: 'https://space.bilibili.com/388110416',
      },
      {
        name: 'CSDN',
        url: 'https://blog.csdn.net/qq_40757240?spm=1010.2135.3001.5343',
      },
      {
        name: 'About',
        url: 'https://shixiongyan.github.io/running/',
      },
    ],
  },
  plugins: [
    'gatsby-transformer-json',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',

    {
      resolve: 'gatsby-plugin-vercel',
      options: {
        // (optional) Prints metrics in the console when true
        debug: false,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/static/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/images/',
      },
    },
    {
      resolve: 'gatsby-alias-imports',
      options: {
        rootFolder: '.',
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#e1e1e1',
        theme_color: '#e1e1e1',
        display: 'standalone',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
  ],
};
