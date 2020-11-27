import styled from "styled-components"

export const HeroWrapperBg = styled.div`
  display: flex;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1931&q=80");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 30rem;
`

export const HeroWrapperColor = styled.div`
  display: flex;
  background-color: #000;
  height: 30rem;
`

export const HeroContainer = styled.div`
  margin: 0 auto;
  width: 70em;
  margin-top: 10em;
`

export const Title = styled.h1`
  margin: 0 auto;
  color: #fff;
`
export const Description = styled.p`
  color: #fff;
`