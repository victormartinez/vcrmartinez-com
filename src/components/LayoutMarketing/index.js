import React from "react"

import Hero from "../Hero"
import Sidebar from "../Sidebar"
import TopBar from "../TopBar"
import SocialLinks from "../SocialLinks"

import GlobalStyles from "../../styles/global"

const LayoutMarketing = ({ title, description, social }) => {
  return (
    <>
      <GlobalStyles />
      <TopBar />
      <Sidebar social={social} />
      <Hero title={title} description={description}>
        <SocialLinks data={social} />
      </Hero>
    </>
  )
}

export default LayoutMarketing
