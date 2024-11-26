module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    { 
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://gatsby-starter-portfolio-minimal-theme.netlify.app/", // Used for sitemap generation
        manifestSettings: {
          favicon: "./content/images/favicon.png", // Path is relative to the root
          siteName: "My Minimal Portfolio", // Used in manifest.json
          shortName: "Portfolio", // Used in manifest.json
          startUrl: "/", // Used in manifest.json
          backgroundColor: "#FFFFFF", // Used in manifest.json
          themeColor: "#000000", // Used in manifest.json
          display: "minimal-ui", // Used in manifest.json
        },
        contentDirectory: "./content",
        blogSettings: {
          path: "/blog", // Defines the slug for the blog listing page
          usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article)
        },
        // googleAnalytics: {
        //     trackingId: "UA-XXXXXX-X",
        //     anonymize: true, // Default true
        //     environments: ["production", "development"] // Default ["production"]
        // }
      },
    },
    'gatsby-plugin-image',
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `csyyf8ew`, // Found in Sanity's dashboard
        dataset: `production`, // Default is 'production'
        token: "skUu0sSxac8DZVjQQ3v3Hi02yCLqVMslwwAzceGjHtlBlk5IOxrUWx2oj67ZHFuBfnqDl1q14g1eqMzgUrwMJAV21zO7zc4ufN3O27FcG3uMqUjw7CdRMi5jGokjWHR7ugtqyPXWwd9DA6hL2vDplGwgbUgIGTBUM9iVYUgkpBeNB8In9zHR", // Optional, for private datasets
        watchMode: true, // Optional, for development
        overlayDrafts: true, // Optional, for development
      },
    },

  ],
};
