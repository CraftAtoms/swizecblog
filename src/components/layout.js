import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from "gatsby-link";
import NavBar from '../components/navBar.js'

import styled from 'styled-components';
import { StaticQuery, graphql } from "gatsby"

import './layout.css'



const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
         
         <Wrapper>
            <Head>
              <List to="/blog/" >
                <h3>Swizec Teller</h3>
              </List>
            </Head>
          
            <NavBar/>
           
            
            {children}
            
        </Wrapper>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Wrapper = styled.div`

margin: 3rem auto;
max-width: 960px;
padding: 1.25rem 1rem;
`
const Pages = styled(Link)`
text-decoration: none;
text-align: right;
margin: 0 .5rem 0 .5rem;
padding: 10px;
background-color: ;
color: #7c51a1;
:hover {
    color: #fff;
    background-color: #7c51a1;

  }
`

const List = styled(Link)`
text-decoration: none;
color: black;
:hover {
    text-decoration: underline;
    color: #7c51a1;
  }
h3 {
  display: inline;
  font-size: 30px;

}

`
const Head = styled.div`
margin: 0 3rem 4.5rem ;

`
