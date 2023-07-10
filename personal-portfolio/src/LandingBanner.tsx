import React from "react"
import styled, { keyframes } from "styled-components"
import sunPng from "./assets/sun.png"

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

const spin = keyframes`
  100% {
    transform: rotate(360deg)
  }
`

const Page = styled.div`
  background-color: ${props => props.theme.palette.main.background};
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
`

const NameContainer = styled.div`
grid-column: 1;
grid-row: 2;
align-self: start;
justify-self: end;
`

const Name = styled.div`
  font-family: ${props => props.theme.fonts.headingFonts};
  font-size: 80px;
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

const SunImg = styled.img`
  grid-row: 1;
  grid-column: 2;
  place-self: center;
  width: 300px;
  animation: ${spin} 20s linear infinite;
  filter: opacity(0.5) drop-shadow(0, 0, 0, blue);
`

const LandingPage = () => {
 
  return(
    <Page>
      <SunImg src={sunPng} alt={"Sun"} />
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
            &nbsp;
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
          Full Stack Developer
        </Subname>
      </NameContainer>
    </Page>
  )
}

export default LandingPage