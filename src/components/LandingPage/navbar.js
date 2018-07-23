import React from 'react'
import styled from 'styled-components';


const Nav = styled.nav`
margin: 0px 0 50px 0;
grid-area: Nav;
padding: 0px 16px;
background: #fff;
color: #000;
position: sticky;
top: 0;

background: -moz-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 43%, rgba(255, 255, 255, 0) 100%);
    /* FF3.6+ */
    background: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(255, 255, 255, 1)), color-stop(43%, rgba(255, 255, 255, 1)), color-stop(100%, rgba(255, 255, 255, 0)));
    /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 43%, rgba(255, 255, 255, 0) 100%);
    /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 43%, rgba(255, 255, 255, 0) 100%);
    /* Opera 11.10+ */
    background: -ms-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 43%, rgba(255, 255, 255, 0) 100%);
    /* IE10+ */
    background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 43%, rgba(255, 255, 255, 0) 100%);
    /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff', GradientType=1);
    /* IE6-9 */

h1 {
  margin: 0;
  font-family: "Lora",Georgia,"Times New Roman",Times,serif;

}
.links a {
    padding: 0 0 0 5px;
    font-size: 16px;
    
}
`

const NavBar = () => (
<Nav>

        <h1 id="about">Swizec Teller</h1>
        <small>Helping you become a better engineer</small>
        <br></br>
        <navi className='links'>
          <a href="#about">about</a> |
          <a href="#workshops">workshops</a> |
          <a href="#books">books</a> |
          <a href="#consulting">consulting</a> |
          <a href="#talks">talks</a> |
          <a href="#projects">side-projects</a> |
          <a href="/blog">blog</a>
        </navi>
      
</Nav>

)



export default NavBar

