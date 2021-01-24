module.exports = {
    siteMetadata: {
        title: "Ojo Saiba Cosplay",
    },
    plugins: [
        {
            resolve: "gatsby-source-wordpress-experimental",
            options: {
                url: "http://craplezz.de/blog-mara/graphql",
            },
        },
        "gatsby-plugin-sass",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-extract-schema",
        "gatsby-plugin-sharp",
    ],
};
