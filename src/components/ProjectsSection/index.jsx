import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import { ProjectsContainer, ImageContainer, ProjectsH1 } from './ProjectsSectionElements'

const ProjectsSection = () => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>Projects</ProjectsH1>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>

        <Carousel.Item>
          <ImageContainer>
            <a href="https://github.com/wkycode/Project1" target="_blank" rel="noreferrer">
              <img
                className="d-block w-100"
                src="https://i.imgur.com/nDHgGwf.png?2"
                alt="First slide"
              />
            </a>
          </ImageContainer>
          <Carousel.Caption id="carousel-caption">
            <h3>Project 1</h3>
            <p>Retro-style Game</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <ImageContainer>
            <a href="https://github.com/wkycode/Project2" target="_blank" rel="noreferrer">
              <img
                className="d-block w-100"
                src="https://i.imgur.com/qthAC5Z.png?1"
                alt="Second slide"
              />
            </a>
          </ImageContainer>
          <Carousel.Caption id="carousel-caption">
            <h3>Project 2</h3>
            <p>Instagram Clone</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <ImageContainer>
            <a href="https://github.com/wkycode/project3" target="_blank" rel="noreferrer">
              <img
                className="d-block w-100"
                src="https://i.imgur.com/iQMnov5.png?1"
                alt="Thrid slide"
              />
            </a>
          </ImageContainer>
          <Carousel.Caption id="carousel-caption">
            <h3>Project 3</h3>
            <p>Digital Service Website</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <ImageContainer>
            <a href="https://github.com/wkycode/unit-4-mobileApp" target="_blank" rel="noreferrer">
              <img
                className="d-block w-100"
                src="https://i.imgur.com/HXdthRs.png?1"
                alt="Fourth slide"
              />
            </a>
          </ImageContainer>
          <Carousel.Caption id="carousel-caption">
            <h3>Project 4</h3>
            <p>Youtube Viewer Boosting App</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </ProjectsContainer>
  )
}

export default ProjectsSection
