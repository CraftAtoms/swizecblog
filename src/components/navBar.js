import React, { Component } from 'react'
import Link from "gatsby-link";

import './navBar.css'
import '../components/css/all.css'



export default class NavBar extends Component {
  render() {
    return (
      <div>
        <header>
        <a href="#main-menu"
          className="menu-toggle"
          role="button"
          id="main-menu-toggle"
          aria-expanded="false"
          aria-controls="main-menu"
          aria-label="Open main menu">
          <span className="sr-only">Open main menu</span>
          <span className="fa fa-bars" aria-hidden="true"></span>
        </a>
        
        <nav id="main-menu"
            className="main-menu"
            role="navigation"
            aria-expanded="false"
            aria-label="Main menu">
          <a href="#main-menu-toggle"
            className="menu-close"
            role="button"
            id="main-menu-close"
            aria-expanded="false"
            aria-controls="main-menu"
            aria-label="Close main menu">
            <span className="sr-only">Close main menu</span>
            <span className="fa fa-close" aria-hidden="true"></span>
          </a>
          <ul>
            <Link to=''>Business</Link>
            <Link to=''>Personal</Link>
            <Link to=''>Technical</Link>
            <Link to=''>Thoughts</Link>
          </ul>
        </nav>
        <a href="#main-menu-toggle"
          className="backdrop"
          tabindex="-1"
          aria-hidden="true"
          hidden>Close</a>
      </header>
      </div>
    )
  }
}
