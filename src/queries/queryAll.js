'use strict'

module.exports = `
    {
        
        allWordpressPost {
            edges {
                node {
                    id  
                    slug
                    status
                    template
                    format
                    title
                    date
                }
            }
        }
        
    }
`