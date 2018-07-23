import React from 'react'
import styled from 'styled-components'
import Docs from '../../images/swizec-at-writethedocs.jpg'

const Wrapper = styled.div`
  grid-area: TK;
  margin: 0 0 100px 0;
  
  ul {
    list-style-type: none;
    line-height: 1.5rem;

    font-size: 16px;
}
blockquote {
  border-left: 5px solid #eeeeee;
  padding: 0 0 0 10px;
}

`

const Talks = () => (
    
<Wrapper>
        <h2>Some of my talks</h2>
          <p class="center talks">
          <img src={Docs} alt='' class="talks" />
          <small>Photo by
            <a href="https://www.flickr.com/photos/122201294@N05/">WriteTheDocs</a>
          </small>
        </p>
        <blockquote>Swizec had every­one simul­ta­ne­ously laugh­ing, com­mis­er­at­ing and applaud­ing with his epic tale of blood, sweat,
          tears and rewrites. This ses­sion also fea­tured the sin­gle best quote of the entire con­fer­ence: “Edi­tors are
          hor­ri­ble people”.
          <br></br>~
          <a href="http://kay.smoljak.com/2014/04/write-the-docs/">Kay Smoljak</a> about my talk at WTD Hungary 2014
        </blockquote>
        <blockquote>
          First talk of the conference that made me want to close my laptop
          <br></br>~
          <a href="http://twitter.com/lowk3y">lowk3y</a> about my keynote at Drupal Alpe Adria 2014
        </blockquote>

        <div>
        <ul>
          <li>2014 -
            <a href="https://www.youtube.com/watch?v=LED7ezyT7l0">Wat ... are we doing to ourselves?</a></li>
            <li>2014 -
              <a href="https://www.youtube.com/watch?v=xVT19ZBL2g8">Why programmers work at night</a>, keynote</li>
            <li>2014 -
              <a href="https://www.youtube.com/watch?v=w1L2SgQuv6Q">What I learned writing a lousy tech book</a>
            </li>
            <li>2013 -
              <a href="http://video.kiberpipa.org/samozaloznistvo_da_ali_ne/">Self-publishing yes or no</a>
            </li>
            <li>2012 -
              <a href="http://2012.webcampzg.org/swizec-teller-why-programmers-code-at-night/">Why programmers work at night</a>
            </li>
            <li>2012 -
              <a href="http://video.kiberpipa.org/py_swizec_modern_python_idioms/">Modern Python idioms</a>
            </li>
            <li>2012 -
              <a href="http://video.hekovnik.com/stc_4_p_2_swizec_i_dont_like_servers/">I don't like servers</a>
            </li>
            <li>2012 -
              <a href="http://video.kiberpipa.org/pot_dml_0522/">Django SQL optimisation</a>
            </li>
            <li>2012 -
              <a href="http://video.kiberpipa.org/SU_Swizec_Teller-Bloganje_klobuki/">Blogging, hats, stuff</a>
            </li>
            <li>2011 -
              <a href="http://video.webcamp.si/wc2011_teller_tools_that_get_you_laid/">Tools that get you laid</a>
            </li>
            <li>2010 -
              <a href="http://video.kiberpipa.org/su_swizec_teller-ciscenje_divjih_internetov/">Scraping the wild internets</a>
            </li>
            <li>2010 -
              <a href="http://video.kiberpipa.org/pot_swizec-the_future_internet/">The future internet</a>
            </li>
            <li>2010 -
              <a href="http://video.kiberpipa.org/camp_swizec_teller-lazysharer/">LazySharer</a>
            </li>
            <li>2009 -
              <a href="http://video.kiberpipa.org/camp_swizec-the_synaptic_web/">The Synaptic Web</a>
            </li>
        </ul>       
      </div>
      
</Wrapper>
     
    
    )
    
    export default Talks
    