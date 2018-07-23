import React from 'react'
import styled from 'styled-components';
import Layout from '../components/layout'

import Jumbotron from '../components/LandingPage/jumbotron'
import Header from '../components/LandingPage/header'
import About from '../components/LandingPage/about'
import NavBar from '../components/LandingPage/navbar'
import Workshops from '../components/LandingPage/workshops'
import Books from '../components/LandingPage/books'
import Consulting from '../components/LandingPage/consulting'
import Talks from '../components/LandingPage/talks'
import SideProjects from '../components/LandingPage/sideprojects'
import Footer from '../components/LandingPage/footer'



const Grid = styled.div`
margin: 0 0 0 0;
font-family: 'Lora', serif;
line-height: 1.5;
padding: 3rem 2rem 0 2rem;







@media (min-width: 760px){

display: grid;
grid-template-columns: 1fr;
grid-template-areas: 
" Head "
" Tron "
"  Nav "
"  AU "
"  WS "
"  BK "
"  CS "
"  TK "
"  SP "
"  FT "
}

@media (min-width: 260px){

display: grid;
grid-template-columns: 1fr;
grid-template-areas: 
" Head "
" Tron "
"  Nav "
"  AU "
"  WS "
"  BK "
"  CS "
"  TK "
"  SP "
"  FT "
}

@media (min-width: 960px){

display: grid;
grid-template-columns: 1fr 2fr;
grid-template-areas: 
" Head Tron "
" Nav Nav "
" AU AU "
" WS WS "
" BK BK "
" CS CS "
" TK TK "
" SP SP "
" FT FT "
}
`


const IndexPage = () => (
  <Layout>
  <Grid> 
      <Header/>
      <Jumbotron/> 
      <About/> 
      <NavBar/>
      
      <Workshops /> 
      <Books />
      <Consulting />
      <Talks />
      <SideProjects />
      <Footer />
      
  </Grid>
  </Layout>
)

export default IndexPage
