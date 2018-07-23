import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
  grid-area: SP;

  ul {
    list-style-type: none;
    line-height: 1.5rem;
    font-size: 16px;
}

`

const SideProjects = () => (
    
    <Wrapper>
    <h2>Side-Projects</h2>
    <p>Some of my more notable personal projects.</p>
    <ul>
      <li>
        <a href="http://www.meetup.com/Ljubljana-JavaScript-User-Group/">JavaScript Meetup Group Ljubljana</a>
      </li>
      <li>
        <a href="https://github.com/Swizec/Personal-Runway">Personal Runway</a> - bank balance prediction in your email
      </li>
      <li>
        <a href="https://github.com/Swizec/node-unshortener">node-unshortener</a> - node library to unshorten shortened links
      </li>
      <li>
        <a href="https://github.com/Swizec/Le-Thesis">automatic poetry generator</a>
      </li>
      <li>
        Postme.me - service for sending funny pictures as postcards
      </li>
      <li>
        hipstervision.org - location-based search engine for Instagram
      </li>
      <li>
        Preona - startup trying to create a smart RSS reader for tablets
      </li>
    </ul>
  </Wrapper>
     
    
    )
    
    export default SideProjects
    