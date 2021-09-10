import styled from 'styled-components'

export const SkillsContainer = styled.div`
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

export const SkillsWrapper = styled.div`
  max-width:1000px;
  margin: 0 auto;
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: stretch;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 900px) {
  grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 650px) {
  grid-template-columns: 1fr;
  padding:0 20px;
  }
`

export const SkillsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  height: 100%;
  width: 300px;
  padding: 30px;
  box-shadow:0 1px 3px rgba(0,0,0,0.2);
  transition:  all 0.2s ease-in-out;

  &:hover{
    /* transform: scale(1.07); */
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    > div {
      transform: rotateY(180deg);
    }
  }
`

export const SkillsCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`

export const SkillsCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; 
  backface-visibility: hidden;
`

export const SkillsCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; 
  backface-visibility: hidden;
  transform: rotateY(180deg);
`
export const SkillsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`

export const SkillsH1 = styled.div`
  font-size:2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width:480px){
    font-size: 2rem;
  }
`

export const SkillsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`

export const SkillsP = styled.p`
  font-size: 1rem;
  text-align: center;
`
