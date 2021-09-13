import styled from 'styled-components'

export const ContactMeContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 1150px) {
    height: 400px;
  }
`

export const ContactMeH1 = styled.div`
  font-size:2.5rem;
  color: #fff;


  @media screen and (max-width:480px){
    font-size: 2rem;
  }
`
export const ContactMeWrapper = styled.div`
  max-width:1000px;
  margin: 0 auto;
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  
  @media screen and (max-width: 1050px) {
  grid-template-columns: 1fr;
  }
`

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`
