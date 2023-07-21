import React from "react"
import styled, { keyframes } from "styled-components"
import sunPng from "./assets/sun.png"

const FULL_DESKTOP_CUTOFF = "1250px"
const RAY_RADIUS_PX = 300

const lift = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(10px, -10px, 0);
    color: yellow;
    text-shadow: -5px 4px 3px rgb(0, 0, 0, .3);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`

const spinAround = keyframes`
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg);
  }
`

const growLetterSpacing = keyframes`
  0% {
    letter-spacing: 0rem;
  }
  50% {
    letter-spacing: .15rem;
  }
  100% {
    letter-spacing: 0rem;
  }
`

const shimmer = keyframes`
  0% {
    color: ${props => props.theme.palette.main.primary};
  }
  15% {
    color: #ffffde;
  }
  30% {
    color: yellow;
  }
  100% {
    color: ${props => props.theme.palette.main.primary};
  }
`

const DisplayOnCompact = styled.span`
  @media (min-width: ${FULL_DESKTOP_CUTOFF}) {
    display: none;
  }
`

const DisplayOnDesktop = styled.span`
  @media (max-width: ${FULL_DESKTOP_CUTOFF}) {
    display: none;
  }
`

const Page = styled.div`
  background-color: ${props => props.theme.palette.main.background};
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 43% 57%;
  grid-template-rows: 40% 60%;
`

const NameContainer = styled.div`
grid-column: 1;
grid-row: 2;
align-self: start;
justify-self: end;
`

const Name = styled.div`
  font-family: ${props => props.theme.fonts.headingFonts};
  font-size: 75px;
  line-height: 100%;
  margin-bottom: 10px;
  text-shadow: -5px 4px 2px ${props => props.theme.palette.main.primary};
  text-align: right;
  z-index: 10;
`

const Subname = styled.div`
  font-family: ${props => props.theme.fonts.titleFonts};
  line-height: 100%;
  font-size: 40px;
  text-align: right;
  text-shadow: -5px 4px 0px ${props => props.theme.palette.main.primary};
  user-select: none;
`

const Letter = styled.span`
display: inline-block;
animation: ${lift} 1.8s;
animation-iteration-count: 1;

  &:nth-child(2) {
    animation-delay: .2s;
  }
  &:nth-child(3) {
    animation-delay: .3s;
  }
  &:nth-child(4) {
    animation-delay: .4s;
  }
  &:nth-child(5) {
    animation-delay: .5s;
  }
  &:nth-child(6) {
    animation-delay: .6s;
  }
  &:nth-child(7) {
    animation-delay: .7s;
  }
  &:nth-child(8) {
    animation-delay: .8s;
  }
  &:nth-child(9) {
    animation-delay: .9s;
  }
  &:nth-child(10) {
    animation-delay: 1s;
  }

  transition: all .5s;
  user-select: none;

  &:hover {
    transform: translate3d(10px, -10px, 0);
    color: yellow;
    text-shadow: -5px 4px 3px rgb(0, 0, 0, .3);
  }
`

//  animation: ${spin} 20s linear infinite;

const SunImg = styled.div`
position: absolute;
top: 50%;
left: 50%;
translate: -50% -50%;
height: 250px;
width: 250px;
background-color: ${props => props.theme.palette.main.primary};
border-radius: 50%;
`

const SunContainer = styled.div`
  width: 100%;
  height: 100%;
  grid-row: 1;
  grid-column: 2;
  display: grid;
  justify-content: center;
  position: relative;
  left: 20%;
  top: -20%;
`
// ${props => props.theme.palette.main.primary}
const RayWrapper = styled.div`
  position: absolute;
  inset: 0;
  animation-fill-mode: forwards;
  animation: ${spinAround} 120s infinite linear;
`


// 

//

interface RayProps {
  rayNum: number;
}

const SunRay = styled.div<RayProps>`
color: ${props => props.theme.palette.main.primary};
opacity: 85%;
letter-spacing: 15px;
direction: rtl;
width: 80px;
  font-family: ${props => props.theme.fonts.titleFonts};
  line-height: 100%;
  font-size: 34px;

  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;

  margin-left: ${props => Math.sin(((Math.PI) / 8) * props.rayNum) * RAY_RADIUS_PX}px;
  margin-top: ${props => Math.cos(((Math.PI) / 8) * props.rayNum) * RAY_RADIUS_PX}px;
  transform: rotate(${props => (-360 / 16) * (props.rayNum + 4)}deg);
  animation-delay: ${props => props.rayNum * 1}s;
  animation-fill-mode: backwards;
  user-select: none;
`

const LandingPage = () => {
 
  return(
    <Page>
      <SunContainer>
        <SunImg />
        <RayWrapper>
          <SunRay rayNum={1} > REACT.JS </SunRay>
          <SunRay rayNum={2} > PYTHON </SunRay>
          <SunRay rayNum={3} > NODE.JS </SunRay>
          <SunRay rayNum={4} > HTML/CSS </SunRay>
          <SunRay rayNum={5} > JAVA </SunRay>
          <SunRay rayNum={6} > MONGODB </SunRay>
          <SunRay rayNum={7} > POSTGRES </SunRay>
          <SunRay rayNum={8} > ++C</SunRay>
          <SunRay rayNum={9} > REACT.JS </SunRay>
          <SunRay rayNum={10} > PYTHON </SunRay>
          <SunRay rayNum={11} > NODE.JS </SunRay>
          <SunRay rayNum={12} > HTML/CSS </SunRay>
          <SunRay rayNum={13} > JAVA </SunRay>
          <SunRay rayNum={14} > MONGODB </SunRay>
          <SunRay rayNum={15} > POSTGRES </SunRay>
          <SunRay rayNum={16} > ++C</SunRay>
        </RayWrapper>
      </SunContainer>
      <NameContainer>
        <Name>
          <Letter>
            C
          </Letter>
          <Letter>
            h
          </Letter>
          <Letter>
            r
          </Letter>
          <Letter>
            i
          </Letter>
          <Letter>
            s
          </Letter>
          <span>
            <DisplayOnDesktop>&nbsp;</DisplayOnDesktop>
            <DisplayOnCompact><br></br></DisplayOnCompact>
          </span>
          <Letter>
            G
          </Letter>
          <Letter>
            o
          </Letter>
          <Letter>
            l
          </Letter>
          <Letter>
            d
          </Letter>
        </Name>
        <Subname>
          Full Stack <DisplayOnCompact><br></br></DisplayOnCompact> Developer
        </Subname>
      </NameContainer>
    </Page>
  )
}

export default LandingPage