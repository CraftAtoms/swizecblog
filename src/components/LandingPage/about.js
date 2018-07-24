import React from 'react'
import styled from 'styled-components';
import LH from '../../images/lifehacker.73b077b0.png'
import PH from '../../images/pragpub.074cd1c1.png'
import MP from '../../images/magpi.82085d33.png'
import RT from '../../images/reactathonlogo.png'
import BBC from '../../images/bbc_radio.835047ce.png'
import BI from '../../images/business_insider.59c4e130.png'
import DZ from '../../images/download-1.png'
import SP from '../../images/download-2.png'
import FW from '../../images/download-3.png'
import BU from '../../images/download-4.png'
import HP from '../../images/download.png'
import DV from '../../images/html5devconf-logo.f95e3ec1.svg'
import JW from '../../images/javascript_weekly.c54ac964.png'
import WAD from '../../images/WAD18logo.png'
import WEB from '../../images/webcamp_lj.90266938.svg'
import WEBC from '../../images/webcamp_zg.496e8214.png'

const Wrapper = styled.div`
  grid-area: AU;
  margin: 0 0 100px 0;
  h2 {
    font-family: "Lora",Georgia,"Times New Roman",Times,serif;
    }


`

const Featured = styled.img`
width: 110px; 
padding: 5px; 
max-height: 80px; 
filter: grayscale(100%)
`

const Container = styled.section`
padding: .5em;
`

const About = ({ siteTitle }) => (
   <Wrapper>
    <h2>About Swizec Teller
      </h2>
      
      
      <p>Hi, I’m Swizec <span role="img" aria-label="Wave">👋 </span>I help you become a better engineer</p>
      <p>Over the years I've helped hundreds of people just like you improve their craft through
        <b> books, articles, workshops,</b> and
        <b> talks</b>. Engineers from companies like Uber, Apple, 23andMe, and many others have used my writing to get better
        <b> jobs, promotions,</b> and
        <b> quickly ramp up</b> to new technologies.
      </p>
      <p>I publish
        <a href="https://swizec.com/blog/"> new articles on my blog</a> every week, host a
        <a href="https://youtube.com/SwizecTeller"> livecoding session</a> on my
        <a href="https://youtube.com/SwizecTeller"> YouTube channel</a> every Sunday and write a special letter just for my email subscribers every Monday. You can
        <a href="https://twitter.com/Swizec"> catch me on Twitter</a> a lot.</p>
      <p>Sometimes I take on 1-on-1 coaching clients and help them build an MVP for their startup idea, or ramp up skills for
        a new job.</p>
      <p>
        <big>If you or your team need help learning React and its ecosystem
          <a href="mailto:hi@swizec.com"> email me</a>
        </big>
      </p> 
      <div>
      <Container>
          <p>Some of my work has been featured in <span role="img" aria-label="Point">👇</span></p>
          <Featured src={LH} alt='LifeHacker'/>
          <Featured src={PH} alt='PragHub'/>
          <Featured src={MP} alt='Magpi'/>
          <Featured src={RT} alt='Reactathon'/>
          <Featured src={BBC} alt='BBCRadio'/>
          <Featured src={BI} alt='BusinessInsider'/>
          <Featured src={DZ} alt='DownloadZone'/>
          <Featured src={SP} alt='SitePoint'/>
          <Featured src={FW} alt='Forward'/>
          <Featured src={BU} alt='BlackUnicorn'/>
          <Featured src={HP} alt='HuffPost'/>
          <Featured src={DV} alt='DevCon'/>
          <Featured src={JW} alt='JavascriptWeekly'/>
          <Featured src={WAD} alt='WAD'/>
          <Featured src={WEB} alt='WEB'/>
          <Featured src={WEBC} alt='WEBC'/>
      </Container> 
      </div>
    </Wrapper>

  )
  
  export default About
  