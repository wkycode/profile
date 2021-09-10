import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`
export const ProjectsH1 = styled.div`
  font-size:2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width:480px){
    font-size: 2rem;
  }
`
export const ImageContainer = styled.div`
  height: 100%;
  width: 1100px;
  padding: 30px;

  @media screen and (max-width: 1100px){
    max-height: 400px;
    height: 100%;
    width: 800px;
    padding: 20px;
  }

  @media screen and (max-width: 800px) {
    max-height: 400px;
    height: 100%;
    width: 650px;
    padding: 20px;
  }


  @media screen and (max-width: 650px) {
    max-height: 400px;
    height: 100%;
    width: 100vw;
    padding: 20px;
  }

  img {
    object-fit: contain;
  }
`
