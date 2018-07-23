import React from 'react'
import Link from "gatsby-link";

import FormName from './form'
import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: "Lora",Georgia,"Times New Roman",Times,serif;

h1{
  font-weight: bold;
  font-size: 44px;
  display: block;
}

margin-top: rem;
input {
  width: 100%;
  display:inline-block;
  margin-bottom: 20px;
}
`
const Quotes = styled.div`
blockquote {
  border-left: 5px solid #eeeeee;
  padding: 0 0 0 10px;
}
`
const BTN = styled.p`
button {
  background-color: #71b565;
    border-radius: 5px;
    
    color: white;
    padding: 15px 25px;
    text-align: center;
    font-size: 20px;
    cursor: pointer;
}
`


const Jumbotron = () => (
<Wrapper>
    <h1>Want to become a better frontend engineer?</h1>
      <p>👋 Hi I'm Swizec the JavaScript guy — I'm here to help!</p>
      <p>Subscribe 💌 below and you'll get my
        <strong> interactive JavaScript cheatsheet</strong> 📖 right away.</p>
      <p>After that I'll send you weekly emails about
        <strong> React</strong>,
        <strong> JavaScript</strong>, and
        <strong> lessons learned</strong> in my 20 years of writing code for companies ranging from tiny startups to Fortune5 behemoths.</p>

    {/* Form Component Directly Below */} 
    <FormName/>
     
      <Quotes>
        <blockquote>
          your newsletter is one of my favorite, always interesting and full of useful content.
          <br />~ Gaël
        </blockquote>
        <blockquote>
          I just love the way you write an email.
          <br />~ Prashen
        </blockquote>
        <blockquote>
          Man, I love your way of writing these newsletters. Often very relatable and funny perspectives about the mundane struggles
          of a dev. Lightens up my day.
          <br /> ~ Kostas
        </blockquote>
      </Quotes>
      
      <BTN>
      <Link to="/blog"><button>Jump to the Blog 👉</button></Link>
      </BTN>
      
      </Wrapper>
)

export default Jumbotron
