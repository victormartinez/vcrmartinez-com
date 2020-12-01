import React from "react"
import { Link } from "gatsby"

import Hero from "./Hero"
import TopBar from "./TopBar"
import Footer from "./Footer"

import GlobalStyles from "../styles/global"

import * as S from "./MainWrapper/styled"

const Layout = ({ title, description, heroSocial, footerSocial, children }) => {
  return (
    <>
      <GlobalStyles />
      <TopBar />
      <Hero title={title} description={description} social={heroSocial} />
      <S.MainWrapper>{children}</S.MainWrapper>
      <Footer social={footerSocial} />
    </>
  )
}

export default Layout
