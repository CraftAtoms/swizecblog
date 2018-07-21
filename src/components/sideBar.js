import React from 'react'
import styled from 'styled-components';
import Me from "../images/me.png"

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
`;

const Sidebar = () => (
  
      <Wrapper>
        <img src={Me} alt="Logo" />
        <p>
        Hi I'm
        <br></br>
        <b>Swizec Teller</b>
        <br></br>
        I build things and write about it to help coders become engineers.
        <br></br>
        
        Over the years I've helped over 10,000 engineers hone their craft. Engineers have used my books, articles, and talks to improve their technical skills, get promotions, change jobs, and ship their products faster.
        </p>
      </Wrapper>
)


export default Sidebar;