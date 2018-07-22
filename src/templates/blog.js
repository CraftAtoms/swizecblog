import React from "react";
import Link from "gatsby-link";
import styled from 'styled-components';

import Layout from "../components/layout";
import Sidebar from '../components/sideBar';
import Header from '../components/header'


const NavLink = props => {
    if (!props.test) {
        return <Link to={props.url}>{props.text}</Link>;
    } else {
        return <span>{props.text}</span>;
    }
};

const IndexPage = ({ data, pageContext }) => {
    const { group, index, first, last } = pageContext;
    const previousUrl = index - 1 === 1 ? "" : (index - 1).toString();
    const nextUrl = (index + 1).toString();

    console.log(group)

    return (
        <Layout>
            <Grid>
            <Sidebar/>
            <Header/>
            
            <BlogList>
            {group.map(({ node }) => (
                <div key={node.slug} className={"post"} style={{ marginBottom: 50 }}>
                    <StyledLink to={'/post/' + node.slug}>
                        <h3>{node.title}</h3>
                    </StyledLink>

                    <div className={"post-content"} dangerouslySetInnerHTML={{__html: node.excerpt}} />

                    {node.date}
                </div>
            ))}
            <div className="previousLink">
                <NavLink test={'/blog/' + first} url={previousUrl} text="Go to Previous Page" />
            </div>
            <div className="nextLink">
                <NavLink test={last} url={'/blog/' + nextUrl} text="Go to Next Page" />
            </div>
            </BlogList>
            </Grid>
        </Layout>
    );
};
export default IndexPage;

const BlogList = styled.div`
grid-area: PL;
h3 {
    color: #7c51a1;
    line-height: 25px;
    padding: 0 0 0px 0;
    margin: 0 0 10px 0;
}
h5 {
    color: grey;
    margin: 0 0 35px 0;
}
`
const StyledLink = styled(Link)`
text-decoration: none;
:hover {
    text-decoration: underline;
  }
}
`
const Grid = styled.div`
@media only screen and (min-width: 760px) {
margin: 0 0 0 0;
font-family: 'Lora', serif;
line-height: 1.5;
padding: 3rem 0rem;
display: grid;
grid-template-columns: auto 2fr;
grid-template-areas: 
" SB HD "
" SB PL "
}
@media only screen and (max-width: 760px) {
margin: 0 0 0 0;
font-family: 'Lora', serif;
line-height: 1.5;
padding: 3rem 0rem;
display: grid;
grid-template-columns: auto;
grid-template-areas: 
" HD "
" PL "
" SB "
}
@media only screen and (max-width: 260px) {
margin: 0 0 0 0;
font-family: 'Lora', serif;
line-height: 1.5;
padding: 3rem 0rem;
display: grid;
grid-template-columns: auto;
grid-template-areas: 
" HD "
" PL "
" SB "
}
`

