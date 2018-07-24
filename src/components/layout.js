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
         <Grid>
            <Head>
              <List to="/blog/" >
                <h3>Swizec Teller</h3>
              </List>
            </Head>

            <Menu>
            <NavBar/>
            </Menu>
            </Grid>
           
            

           
            
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

const Grid = styled.div`
display: grid;
grid-template-columns: 2fr;
grid-template-areas: 
" LO MN "
`

const Wrapper = styled.div`
margin: 3rem auto;
max-width: 960px;
padding: 1.25rem 1rem;
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
grid-area: LO;
margin: 0 3rem 1.5rem;
padding: 1rem 0 0 0;

`
const Menu = styled.div`
grid-area: MN;

`
