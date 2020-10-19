import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
require("typeface-rubik");

const NavItem = styled(Link)`
  text-decoration: none;
  color: white;
  display: inline-block;
  font: 400 18px Rubik, sans-serif;
  float:right;
  padding-bottom : 20px;
  white-space: nowrap;
  margin-left: 20px;
  margin-top: -10px;
  transition: all 200ms ease-in;
  position: relative;

  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`



const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">Contact Me</NavItem>
      <NavItem to="/404">My Projects</NavItem>
      <NavItem to="/">About Me</NavItem>
    </>
  )
}

export default NavbarLinks