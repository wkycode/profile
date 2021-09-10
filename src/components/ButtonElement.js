import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
  border-radius:50px;
  background: ${({ primary }) => (primary ? '#63FFEF' : '#010606')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color:${({ dark }) => (dark ? '#010606' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover{
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#63FFEF')};
  }
`

export const DlButton = styled.a`
  border-radius:50px;
  background: ${({ primary }) => (primary ? '#63FFEF' : '#010606')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color:${({ dark }) => (dark ? '#010606' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover{
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#63FFEF')};
  }
`
export const LinkButton = styled.a`
  border-radius: 5px;
  background: #010606;
  padding: 12px 30px;
  color: #fff;
  outline: none;
  text-decoration: none !important;
  border: 2px solid #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
`
