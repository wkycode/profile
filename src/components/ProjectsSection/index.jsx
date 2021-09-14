import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import { ProjectsContainer, ImageContainer, ProjectsH1 } from './ProjectsSectionElements'

const carouselItems = [
  {
    link: 'https://github.com/wkycode/Project1',
    image: 'https://i.imgur.com/nDHgGwf.png?2',
    title: 'Project 1',
    description: 'Retro-style Game'
  }, {
    link: 'https://github.com/wkycode/Project2',
    image: 'https://i.imgur.com/qthAC5Z.png?1',
    title: 'Project 2',
    description: 'Instagram Clone'
  }, {
    link: 'https://github.com/wkycode/project3',
    image: 'https://i.imgur.com/iQMnov5.png?1',
    title: 'Project 3',
    description: 'Digital Service Website'
  }, {
    link: 'https://github.com/wkycode/unit-4-mobileApp',
    image: 'https://i.imgur.com/HXdthRs.png?1',
    title: 'Project 4',
    description: 'Youtube Viewer Boosting App'
  }
]

const ProjectsSection = () => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>Projects</ProjectsH1>
      <div className="container">
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
          {
            carouselItems && carouselItems.map((item, idx) => (
              <Carousel.Item>
                <ImageContainer>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <img
                      className="d-block w-100  "
                      src={item.image}
                      alt={`${idx}-slide`}
                    />
                  </a>
                </ImageContainer>
                <Carousel.Caption id="carousel-caption">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))
          }
        </Carousel>
      </div>
    </ProjectsContainer>
  )
}

export default ProjectsSection
