import React from 'react'
import styled from 'styled-components';


const Wrapper = styled.div`
  grid-area: FT;
  margin: 50px 0 0px 0;
`


const Footer = ({ siteTitle }) => (
    <Wrapper>
        <hr></hr>
        <p> &copy; Swizec Teller</p>
    </Wrapper>
    
)


export default Footer
