import React, { useRef } from 'react'
import styled from "styled-components"
import LandingBanner from "./LandingBanner"
import Header from "./Header"
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"
import Footer from "./Footer"

// responsiveness
// loading page
// landing page buttons?
// remove header pre-scroll
// onload
// font-face-observer (https://stackoverflow.com/questions/66879446/react-how-to-check-if-a-specific-font-face-has-been-loaded)

const PageContainer = styled.div`
position: relative;
margin-left: 0;
overflow-x: hidden;
overflow-y: hidden;
min-height: 100vh;
`

const Page = styled.div`
  padding-bottom: ${props => props.theme.footerHeight};
`

const Gradient = styled.div`
  width: 100vw;
  height: 10rem;
  background-image: linear-gradient(${props => props.theme.palette.main.background}, ${props => props.theme.palette.secondary.background});
`

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <PageContainer>
      <Page>
        <Header divRefs={{"about": aboutRef, "projects": projectsRef, "contact": contactRef}} />
        <LandingBanner />
        <Gradient/>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </Page>
      <Footer />
    </PageContainer>
  )
}

export default App
