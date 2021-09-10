import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements'

const Sidebar = ({ isOpened, toggle }) => (

  <SidebarContainer isOpened={isOpened} onClick={toggle}>
    <Icon onClick={toggle}>
      <CloseIcon />
    </Icon>
    <SidebarWrapper>
      <SidebarMenu>
        <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
        <SidebarLink to="skills" onClick={toggle}>Skills</SidebarLink>
        <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
        <SidebarLink to="portfolio" onClick={toggle}> Portfolio</SidebarLink>
        <SidebarLink to="contact-me" onClick={toggle}> Contact Me</SidebarLink>
      </SidebarMenu>
    </SidebarWrapper>
  </SidebarContainer>

)

export default Sidebar
