import React from 'react'
import styled from 'styled-components';
import Link from "gatsby-link";

import Me from "../images/me.png"
import './sideBar.css'

const Wrapper = styled.div`

height: 100%;
width: 200px;
margin:  0 2rem ;
padding: 0px 1.0875rem 1.45rem 0;
text-align: right;
grid-area: SB;
color: grey;
img {
    height: 100px
}
`

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

const Sidebar = () => (
  
      <Wrapper>
        <img src={Me} alt="Logo" />
        <p>
        Hi I'm
        <br></br>
        <b>Swizec Teller</b>
        </p>

        <p>I build things and write about it to help <strong>coders become engineers.</strong></p>
        
        <p>Over the years I've helped over <strong>10,000 engineers</strong> hone their craft. Engineers have used my books, articles, and talks to improve their technical skills, get promotions, change jobs, and ship their products faster.
        </p>

        <Icons>
        <Link to='/'>
        <h4>More About Me</h4>
        </Link>
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
      </Wrapper>
)


export default Sidebar;