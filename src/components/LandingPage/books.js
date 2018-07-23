import React from 'react'
import styled from 'styled-components'
import NightOwls from '../../images/nightowls.png'
import Data from '../../images/data-visualization-with-d3js.png'
import ReactD3 from '../../images/reactd3js.png'

const Wrapper = styled.div`
  grid-area: BK;
  margin: 0 0 100px 0;
  
  h2 {
      font-family: "Lora",Georgia,"Times New Roman",Times,serif;
}
`

const Books = () => (
    <Wrapper>
        <div>
      <h2>My Books</h2>
      <div>
        <a href="http://nightowlsbook.com ">
          <img src={NightOwls} title="Why programmers work at night " alt="Why programmers work at night " />
        </a>
      </div>
      <h5>
        <a href="http://nightowlsbook.com ">Why programmers work at night</a>
      </h5>
      <p>The early bird does not always catch the worm, sometimes it meets a cat.</p>
      <p>Programmers often work on unusual schedules that do not jive with the modern 9-5 office culture. They don't even do
        their best work at offices.</p>
      <p>This book shows programmers and those around them that there's a better way.</p>
      <p>
        <quote>"My girlfriend loved your book! "</quote> ~ Jan Hančič</p>
        </div>
    
    <div>
        <div>
            <a href="http://www.packtpub.com/data-visualization-with-d3js/book ">
            <img src={Data} title="Data visualization with d3.js " alt="Data visualization
            with d3.js " />
            </a>
        </div>
        <h5>
            <a href="http://www.packtpub.com/data-visualization-with-d3js/book ">Data Visualization with d3.js</a>
        </h5>
        <p>When you're learning d3.js on your own you often feel like Step
            <em>1: Draw two circles</em>, is followed by
            <em>Step 2: Draw the rest of the owl</em>. My book aims to bridge that gap.</p>
        <p>I guide you through complete examples from basic shapes on a page to full blown visualisations. There is no magic here,
            no steps left unexplained. You will understand everything that goes into making a visualization with d3.js.</p>
        </div>
    
           <div>
                <a href="http://swizec.com/reactd3js ">
                <img src={ReactD3} title="React D3v4 " alt="React+d3.js " />
                </a>
            </div>
            <h5>
                <a href="http://swizec.com/reactd3js ">React + D3v4</a>
            </h5>
            <p>Creating dynamic data visualizations on the web is a pain in the ass.</p>
            <p>You either have to use dumbed down libraries that won't let you do what you want, or make everything from scratch.
                Every time.</p>
            <p>You want a quick way to build complex visualizations. Build once, use everywhere. In every project. Don't believe me?
                Scroll down.</p>
            <p>With React + D3v4 you'll learn how to build re-usable visualization components in about an hour.</p>
     
    </Wrapper>
    )
    
    export default Books
    