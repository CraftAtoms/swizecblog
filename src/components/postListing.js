import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';


class PostListing extends React.Component {
  getPostList() {
    const postList = []
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.slug,
        cover: postEdge.node.cover,
        title: postEdge.node.title,
        date: postEdge.node.date,
        excerpt: postEdge.node.excerpt,
        authorName: postEdge.node.author.name,
        
      })
    })
    return postList
  }

  render() {
    const postList = this.getPostList()
    return (
      <Wrapper>
        {/* Your post list here. */
        postList.map(post => (
          <div>
            <StyledLink className="post-link" to={'/blog/' + post.path} key={post.title}>
              
              <h4>{post.title}</h4>
      
            </StyledLink>
            <h5>
                {post.date} 
            </h5>

          </div>
        ))}
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
grid-area: PL;
h4 {
    color: #7c51a1;
    line-height: 25px;
    padding: 0 0 0px 0;
    margin: 0 0 10px 0;
}
h5 {
    color: grey;
    margin: 0 0 35px 0;
}
`
const StyledLink = styled(Link)`
text-decoration: none;
:hover {
    text-decoration: underline;
  }
}
`

export default PostListing