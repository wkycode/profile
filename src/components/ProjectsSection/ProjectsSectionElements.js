import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 1050px) {
    height: 600px;
  }

  @media screen and (max-width: 480px) {
    height: 500px;
  }
`
export const ProjectsH1 = styled.div`
  font-size:2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width:1050px){
    font-size: 2.25rem;
  }

  @media screen and (max-width:480px){
    font-size: 2rem;
  }
`
export const ImageContainer = styled.div`
  height: 100%;
  width: 1100px;
  padding: 30px;

  @media screen and (max-width: 1200px){
    max-height: 400px;
    height: 100%;
    width: 100vw;
    padding: 20px;
  }

  img {
    object-fit: contain;
  }
`
