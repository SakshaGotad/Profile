import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from './Navbar'
import styled from 'styled-components'
import Navbar from './Navbar'
const Header = () => {
  return (
    <Mainheader>
        <NavLink>
            <img src="images/sag.png" alt="logo" className="logo"/>
        </NavLink>
        <Navbar/>
    </Mainheader>
  )
}


const Mainheader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({theme}) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;


  .logo{
    height: auto;
    max-width: 30%;

  }
`;
export default Header
