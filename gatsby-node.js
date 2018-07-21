const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
const queryAll = require(`./src/queries/queryAll.js`)
const createPaginatedPages = require("gatsby-paginate")


exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        // Templates
        
        const postTemplate = path.resolve("./src/components/post.js");

        resolve(
            graphql(queryAll).then(result => {
                if (result.errors) reject(result.errors)


                // Posts detail
                const posts = result.data.allWordpressPost.edges

                createPaginatedPages({
                    edges: posts,
                    createPage: createPage,
                    pageTemplate: "src/pages/blog.js",
                    pageLength: 10,
                    pathPrefix: "blog"
                    
                })

                posts.forEach(edge => {
                    createPage({
                        path: `/post/${edge.node.slug}/`,
                        component: slash(postTemplate),
                        context: {
                            id: edge.node.id,
                        },
                    });
                })

            })
        )
    });
};