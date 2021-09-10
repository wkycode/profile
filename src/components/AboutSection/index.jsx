import React from 'react'
import { DlButton } from '../ButtonElement'
import { AboutContainer, AboutWrapper, AboutRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Column2, ImgWrap, Img } from './AboutElements'

const AboutSection = ({ imgStart, topLine, buttonLabel, headline, description, alt, id }) => (
  <>
    <AboutContainer id={id}>
      <AboutWrapper>
        <AboutRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading>{headline}</Heading>
              <Subtitle>{description}</Subtitle>
              <BtnWrap>
                <DlButton href="/files/Cv.pdf" download="" primary="true" dark="true">{buttonLabel}</DlButton>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src="/images/svg-1.svg" alt={alt} />
            </ImgWrap>
          </Column2>
        </AboutRow>
      </AboutWrapper>
    </AboutContainer>
  </>
)

export default AboutSection
