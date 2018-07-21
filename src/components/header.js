import React from 'react'
import styled from 'styled-components';


const Header = () => (
  <Wrapper>
    <h1>A geek with a hat</h1>
  </Wrapper>
)


const Wrapper = styled.div`
grid-area: HD;
h1 {
    border-bottom: 1px solid lightgrey;
    padding: 0 0 20px 0;
    font-size: 50px
    
}

`


export default Header
