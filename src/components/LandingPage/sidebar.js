import React from 'react'
import styled from 'styled-components';

const SideBarWrapper = styled.div`
background: #fff;
margin-bottom: 1.45rem;
height: 100%;
width: 180px;
margin:  0;
max-width: 960;
padding: 0px 1.0875rem 1.45rem;
float: left;

`;

const Sidebar = ({ }) => (
  
      <SideBarWrapper>
        <p>
        Hi I'm
        <br></br>
        <b>Swizec Teller</b>
        <br></br>

        I build things and write about it to help coders become engineers.
        <br></br>
        
        Over the years I've helped over 10,000 engineers hone their craft. Engineers have used my books, articles, and talks to improve their technical skills, get promotions, change jobs, and ship their products faster.
        </p>
      </SideBarWrapper>
)


export default Sidebar;