import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  height: 860px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  padding-bottom: 140px;

  @media screen and (max-width: 1050px) {
    height: 700px;
  }

  @media screen and (max-width: 480px) {
    height: 600px;
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
  max-height: 700px;
  height: 100%;
  /* width: 1100px; */
  /* padding: 20px; */

  @media screen and (max-width: 1200px){
    max-height: 700px;
    height: 100%;
    width: 100%;
  }
`
