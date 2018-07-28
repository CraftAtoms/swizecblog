import React, { Component } from "react"
import styled from 'styled-components';
import FormName from '../components/LandingPage/form'
import Footer from '../components/LandingPage/footer'

import Layout from "./layout";
import './prism.css'
import 'prismjs';

const Signup = styled.div`
blockquote {
  border-left: 5px solid #eeeeee;
  padding: 0 0 0 10px;
}`


class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost

        return (
            <Layout>
                       

                <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                <hr></hr>
                <Signup>
                <h2>Learned something new? Want to become a better engineer? <span role="img" aria-label="Snowman">💌</span></h2>
                <h4>Join <strong>9,400+</strong> people just like you already improving their skills.</h4>
                <h3>Here's how it works <span role="img" aria-label="Snowman">👇</span></h3>
                <p>Leave your email and I'll send you an Interactive Modern JavaScript Cheatsheet <span role="img" aria-label="Snowman">📖</span> right away. After that you'll get a thoughtfully written email every week about React, JavaScript,  and lessons learned in my 20 years of writing code for companies ranging from tiny startups to Fortune5 behemoths.</p>
                <h3>Your Email Address <span role="img" aria-label="Snowman">👇</span></h3>
                <FormName/>
                <blockquote>Man, I love your way of writing these newsletters. Often very relatable and funny perspectives about the mundane struggles of a dev. Lightens up my day. ~ Kostas</blockquote>
                <h4>PS: You should also follow me on twitter <span role="img" aria-label="Snowman">👉</span> <a href='https://twitter.com/swizec'>Here</a></h4>
                <h4>It's where I go to shoot the shit about programming.</h4>
                </Signup>
                <Footer />
            </Layout>
        )
    }
}


export default PostTemplate

export const pageQuery = graphql`
    query currentPostQuery($id: String!) {
        wordpressPost(id: { eq: $id }) {
            title
            content
        }
        site {
            siteMetadata {
                title
                subtitle
            }
        }
    }
`