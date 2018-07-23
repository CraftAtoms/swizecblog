import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  grid-area: CS;
  margin: 0 0 100px 0;
  font-family: Lora,Georgia,"Times New Roman",Times,serif;


  blockquote {
  border-left: 5px solid #eeeeee;
  padding: 0 0 0 10px;
  
}

p {
  margin: 0;
}

h4 {
  margin: 40px 0 5px 0;
}

`

const Consulting = () => (
    
<Wrapper>
      <h2>Some of my consulting clients</h2>
      <p>These days I focus on being a force multiplier for your team moreso than writing your code.</p>

      <div>
        <h4>SeriousMumbo</h4>
        <blockquote>"Swizec grasped complex ideas imemdiately and required no micromanagement, which gave me more time to focus on overall
          strategy. A project lead 's dream. A beautiful dream."
          <br></br>
          ~ Sherman Boyd, founder</blockquote>
        <p>I developed custom software for a self-contained mail server device. As of early 2015 the project is gearing up for
          a Kickstarter launch.</p>
        <small>Tech: node.js, html5, Angular.js</small>
      </div>
    
     
      <div>
        <h4>Dwellers</h4>
        <blockquote>"Dude, if we never had you we woulda been so fucked"
          <br></br>~ Phillip Nazarian, cofounder</blockquote>
        <p>I was "the older guy" for a team of Stanford grads building a groceries on demand product. We went from idea to first
          paying customers in a month. As of early 2015, the team has pivoted into MathCrunch.</p>
        <small>Tech: Ruby on Rails, Less, Backbone.js, Heroku, Circle CI</small>
      </div>


      <div>
        <h4>Reciprocity</h4>
        <p>I joined a team developing custom risk and compliance software used internally at Google, Lyft and other web startups.
          On top of adding features and fixing bugs, I am streamlining their hiring and onboarding processes, and improving
          engineering practices.</p>
        <small>Tech: Flask, Can.js, Compass, AppEngine, Travis CI</small>
      </div>


      <div>
        <h4>ResponsiveAds</h4>
        <p>I built custom features required by MasterCard after the startup's old team fell apart. We ultimately failed to meet
          the deadline, but as of early 2015 the team is still going strong.</p>
        <small>Tech: node.js, Angular.js, HTML5</small>
      </div>


      <div>
        <h4>Ribbon</h4>
        <p>I added unit testing and proper currencies support to a global payments processing startup. The state of their codebase
          had started impacting their post Series A growth. As of early 2015, the company has pivoted into a pay-your-friends
          service.
        </p>
        <small>Tech: ruby on rails</small>
      </div>
      

      <div>
        <h4>Xicor</h4>
        <p>Improved the stability of a commodities trading platform for a Swiss startup. It was used by some major European
          banks and ultimately got acquired by Commerzbank.</p>
          
        <small>Tech: node.js, backbone.js, jQuery</small>
      </div>

</Wrapper>
     
    
    )
    
    export default Consulting
    