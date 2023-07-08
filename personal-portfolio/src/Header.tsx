import React from "react"
import styled from "styled-components"

const NavBar = styled.nav`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0);
  height: 3rem;
  width: 100vw;
  font-family: ${props => props.theme.fonts.bodyFonts};
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: ${props => props.theme.palette.common.black};
`

const NavButton = styled.button`
  all: unset;
  font-family: ${props => props.theme.fonts.titleFonts};
  font-size: 1.25rem;
  height: min-content;
  margin: 0 .5rem;
`

const Name = styled.div`
  font-family: ${props => props.theme.fonts.headingFonts};
  justify-self: end;
  font-size: 1.25rem;
  height: min-content;
  margin: 0 1.5rem;
`

const Header = () => {
 
  return(
    <NavBar>
      <Name>
        CHRIS
      </Name>
      <NavButton>
        About
      </NavButton>
      <NavButton>
        Projects
      </NavButton>
      <NavButton>
        Contact
      </NavButton>
    </NavBar>
  )
}

export default Header