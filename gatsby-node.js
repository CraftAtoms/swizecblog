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
                const tags = []
                const categories = []
                const posts = result.data.allWordpressPost.edges

              
                _.each(result.data.allWordpressPost.edges, edge => {
                    // grab all the tags and categories for later use
                    edge.node.tags.forEach(tag => {
                      tags.push(tag.name)
                    })
                    edge.node.categories.forEach(category => {
                      categories.push(category.name)
                    })
                    })

                createPaginatedPages({
                    edges: posts,
                    createPage: createPage,
                    pageTemplate: "src/templates/blog.js",
                    pageLength: 30,
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
                const tagsTemplate = path.resolve(`./src/templates/tag.js`)
                const categoriesTemplate = path.resolve(
                  `./src/templates/category.js`
                )
                const tagsSet = new Set(tags)
                const catSet = new Set(categories)
                tagsSet.forEach(tag => {
                  createPage({
                    path: `/tags${_.kebabCase(tag)}/`,
                    component: slash(tagsTemplate),
                    context: {
                      id: tag
                    }
                  })
                })
                catSet.forEach(cat => {
                    createPage({
                      path: `/categories${_.kebabCase(cat)}/`,
                      component: slash(categoriesTemplate),
                      context: {
                        id: cat
                      }
                    })
                  })
                  resolve()
   

            })
        )
    });
};