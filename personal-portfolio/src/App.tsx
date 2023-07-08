import React, { useState } from 'react'
import styled from "styled-components"
import LandingBanner from "./LandingBanner"
import Header from "./Header"
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"

// type JSON
// import JSON
// put project type as component prop

const Page = styled.div`
  overflow-x: hidden;
`

const Gradient = styled.div`
  width: 100vw;
  height: 10rem;
  background-image: linear-gradient(${props => props.theme.palette.main.background}, ${props => props.theme.palette.secondary.background});
`

function App() {
  const [count, setCount] = useState(0)
  return (
    <Page>
      <Header />
      <LandingBanner />
      <Gradient />
      <About />
      <Projects />
      <Contact />
    </Page>
  )
}

export default App
