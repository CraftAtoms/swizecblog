import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import PostListing from '../components/PostListing'

export default class TagTemplate extends React.Component {
  render() {
    const tag = this.props.pathContext.id
    const postEdges = this.props.data.allWordpressPost.edges
    return (
      <div className="tag-container">
        <Helmet title={`Posts tagged as "${tag}" | ${siteTitle}`} />
        
        <MainContentContainer>
          <h1>Posts with Tag: {tag}</h1>
          <PostListing postEdges={postEdges} />
        </MainContentContainer>
      </div>
    )
  }
}

const MainContentContainer = styled.main`
  width: 600px;
  margin: 50px auto;
  h1 {
    text-align: center;
    font-weight: 700;
    margin-bottom: 25px;
  }
  p {
    font-size: 16px;
    margin-bottom: 25px;
  }
  pre {
    background-color: grey;
  }
`

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query TagPage {
    allWordpressPost {
      edges {
        node {
          
          author {
            name
            
          }
          date
          slug
          title
          modified
          excerpt
          id
          
          categories {
            name
          }
          tags {
            name
          }
          content
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
