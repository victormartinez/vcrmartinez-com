import styled from "styled-components"
import media from "styled-media-query"

export const FooterWrapper = styled.footer`
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  justify-content: center;
  width: 70em;
  border-top: 1px solid #000;

  ${media.lessThan("small")`
    width: 100vw;
  `}
`

export const Copyright = styled.p`
  margin-bottom: 1em;
`
