import React, {useEffect, useState, useRef} from "react"
import styled from "styled-components"

interface AnimateOnShowProps {
  children?: React.ReactNode;
}

const ContainerDiv = styled.div`
  @media(prefers-reduced-motion: no-preference) {
    transition: all 1.1s;
  }
  height: 100%;
  width: 100%;
`

const styleUnseen:React.CSSProperties = {
  opacity: 0,
  transform: "translateX(-10%)"
}

const styleSeen:React.CSSProperties = {
  opacity: 1,
  transform: "translateX(0)"
}

const AnimateOnShow = (props: AnimateOnShowProps) => {
  const containerRef = useRef<HTMLElement>(null)
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false)
  const [style, setStyle] = useState<React.CSSProperties>(styleUnseen)

  useEffect(() => {
    if (containerRef.current !== null){
      const observer = new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      );

      observer.observe(containerRef.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [containerRef]);

  useEffect(() => {
    if (isIntersecting) {
      setStyle(styleSeen)
    }
  }, [isIntersecting])

  return(
    <ContainerDiv style={style} ref={containerRef as React.RefObject<HTMLDivElement>}>
      {props.children}
    </ContainerDiv>
  )
}

export default AnimateOnShow