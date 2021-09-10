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
        <SidebarLink
          to="skills"
          smooth
          duration={500}
          spy
          exact="true"
          offset={-80}
          onClick={toggle}
        >
          Skills
        </SidebarLink>
        <SidebarLink
          to="projects"
          smooth
          duration={500}
          spy
          exact="true"
          offset={-80}
          onClick={toggle}
        >
          Projects
        </SidebarLink>
        <SidebarLink
          to="contact-me"
          smooth
          duration={500}
          spy
          exact="true"
          offset={-80}
          onClick={toggle}
        >
          Contact Me
        </SidebarLink>
      </SidebarMenu>
    </SidebarWrapper>
  </SidebarContainer>

)

export default Sidebar
