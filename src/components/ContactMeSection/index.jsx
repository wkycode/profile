import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { DlButton, LinkButton } from '../ButtonElement'
import { ContactMeContainer, ContactMeH1, ContactMeWrapper, BtnWrap } from './ContactMeElements'

const ContactMeSection = () => (
  <ContactMeContainer id="contact-me">
    {/* <ContactMeH1>Contact Me</ContactMeH1> */}
    <ContactMeWrapper>

      <BtnWrap>
        <LinkButton href="https://github.com/wkycode" primary="true" dark="true">
          <FaGithub />
          <span style={{ marginLeft: '3px' }}>https://github.com/wkycode</span>
        </LinkButton>
      </BtnWrap>

      <BtnWrap>
        <LinkButton href="https://www.linkedin.com/in/kayu-james-wu-21767521b/" primary="true" dark="true">
          <FaLinkedin />
          <span style={{ marginLeft: '3px' }}>kayu-james-wu-21767521b</span>
        </LinkButton>
      </BtnWrap>

      <BtnWrap>
        <LinkButton href="mailto:misterwky@gmail.com" primary="true" dark="true">
          <MdEmail />
          <span style={{ marginLeft: '3px' }}>misterwky@gmail.com</span>
        </LinkButton>
      </BtnWrap>

    </ContactMeWrapper>
  </ContactMeContainer>
)

export default ContactMeSection
