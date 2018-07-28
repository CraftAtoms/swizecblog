'use strict'

module.exports = `
    {
        
        allWordpressPost {
            edges {
                node {
                    id  
                    slug
                    tags {
                        name
                      }
                      categories {
                        name
                      }
                    status
                    template
                    format
                    title
                    date(formatString: "MMMM DD, YYYY")
                }
            }
        }
        allFile {
            edges {
              node {
                extension
                dir
                modifiedTime
              }
            }
          }
          allWordpressPage {
            edges {
              node {
                slug
                title
                id
              }
            }
          }
        
    }
`