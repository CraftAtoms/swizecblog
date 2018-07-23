import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

import logo from '../../images/swizeclogo.png'



const Icons = styled.div`
color: #7c51a1;
a {
  margin: 0 .3rem;
  text-decoration: none;
  color: #7c51a1;
}
a:hover {
  color: #000;
}
h4:hover {
text-decoration: underline;
}
`

const HeaderWrapper = styled.div`
grid-area: Head;
text-align: center;
`;

const HeaderContainer = styled.div`

img{
  height: 150px;
}
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>    
        <Link to="/">
        <img src={logo} alt='swizeclogo'/>        </Link>
      
    </HeaderContainer>
      
    <Icons>
          <a href="mailto:hi@swizec.com?subject=Hi!" className="social" title="Email me">
            <i class="ss-icon">email</i>
          </a>
          <a href="https://github.com/Swizec" className="social" title="See my github profile">
            <i className="ss-icon">octocat</i>
          </a>
          <a href="https://twitter.com/Swizec" class="social" title="Follow me on twitter">
            <i className="ss-icon">twitter</i>
          </a>
          <a href="http://swizec.com/blog/feed" class="social" title="Subscribe to RSS">
            <i className="ss-icon">rss</i>
          </a>
        </Icons>
      
  </HeaderWrapper>
)


export default Header
