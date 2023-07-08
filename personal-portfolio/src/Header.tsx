import React from "react"
import styled from "styled-components"

// https://www.kindacode.com/article/react-get-the-position-x-y-of-an-element/

// SCROLL BETTER!!

const NavBar = styled.nav`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.palette.main.background};
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

  &: hover {
    cursor: pointer;
  }
`

const Name = styled.div`
  font-family: ${props => props.theme.fonts.headingFonts};
  justify-self: end;
  font-size: 1.25rem;
  height: min-content;
  margin: 0 1.5rem;
`

interface HeaderProps {
  divRefs: {
    about: React.RefObject<HTMLDivElement>,
    projects: React.RefObject<HTMLDivElement>,
    contact: React.RefObject<HTMLDivElement>
  }
}

const Header = (props: HeaderProps) => {
 
  return(
    <NavBar>
      <Name>
        CHRIS
      </Name>
      <NavButton onClick={() => { { props.divRefs.about.current?.scrollIntoView({ behavior: 'smooth', block: 'end',  })} } } >
        About
      </NavButton>
      <NavButton onClick={() => { { props.divRefs.projects.current?.scrollIntoView({ behavior: 'smooth', block: 'end',  })} } } >
        Projects
      </NavButton>
      <NavButton onClick={() => { { props.divRefs.contact.current?.scrollIntoView({ behavior: 'smooth', block: 'end',  })} } }>
        Contact
      </NavButton>
    </NavBar>
  )
}

export default Header