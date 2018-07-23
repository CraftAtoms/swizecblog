import React from 'react'
import InstagramEmbed from 'react-instagram-embed'

import styled from 'styled-components'

const Wrapper = styled.div`
  grid-area: WS;
  margin: 0 0 100px 0;


`

const Workshops = () => (
    <Wrapper>
      <div>
      <h3>My workshops</h3>
       
        <InstagramEmbed
          url='https://www.instagram.com/p/BghreGJgStj/?utm_source=ig_embed'
          maxWidth={620}
          hideCaption={false}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      
      
      <div>
        <p>Need hands on help to bring your team up to speed with React and its ecosystem?</p>
        <p>I offer a few different workshops centered around
          <b> React and its ecosystem</b>. My workshops focus on practical exercises, having fun, and exploring interesting technologies
          together. I believe in a
          <b> personal</b> touch and making sure people
          <b> enjoy the experience</b>. The goal is to inspire confidence and empower engineers to dig deeper on their own.</p>
      </div>
     
      <div>
        <p>My
          <b> React Data Visualization</b> workshop has been enjoyed by hundreds of people at conferences, public events, and
          private in-house engagements. You and your team will learn all about integrating React and D3 to build scalable
          visualizations. Both in terms of code speed and coding speed.</p>
      </div>
      <div>
        <blockquote>Even though the material covered is/was online somewhere and maybe even in a video, there was a ton of value gained
          by being there in person in front of Swizec (instructor). Well worth the trip/cost!</blockquote>
      </div>
      
      <div>
        <p>My
          <b> React & Redux</b> workshop is newer but just as fun. Your team will go from React beginners to experts who can
          utilize advanced patterns, understand tradeoffs of different styles, and can design architectures that will be
          a joy to work with.
        </p>
      </div>
      <div>
        <blockquote>Your workshop was definitely worth while and traveling for.</blockquote>
      </div>
      
      <div>
        <p>
          <big>Want to train your team?
            <a href="mailto:hi@swizec.com ">email me at hi@swizec.com</a>
          </big>
        </p>
        <p>I'm always working on new workshops and materials. If you have an idea for something new, I'd love to hear it.</p>
      </div>
      
        
    
    </div>
    </Wrapper>
    )
    
    export default Workshops
    